import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";

/** Picks the first language the browser prefers that the site has. */
function preferredLocale(acceptLanguage: string | null): Locale {
  const languages = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { language: tag.split("-")[0].toLowerCase(), quality: quality ? Number(quality) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  return languages.find(({ language }) => hasLocale(language))?.language as Locale | undefined ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
