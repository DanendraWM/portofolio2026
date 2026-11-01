import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getContent } from "@/content";
import { personal } from "@/content/personal";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const metadataBase = new URL(siteUrl);
  const { lang } = await params;
  if (!hasLocale(lang)) return { metadataBase };

  const { title, description, ogLocale } = getContent(lang).meta;

  return {
    metadataBase,
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", id: "/id", "x-default": `/${defaultLocale}` },
    },
    openGraph: {
      type: "profile",
      url: `/${lang}`,
      title,
      description,
      siteName: personal.name,
      locale: ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1626" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only rounded-lg bg-accent-fill px-4 py-2 font-medium text-on-accent focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          {getContent(lang).ui.skipToContent}
        </a>
        <ThemeProvider>
          <MotionProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
