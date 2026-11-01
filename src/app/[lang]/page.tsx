import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { getContent } from "@/content";
import { personal } from "@/content/personal";
import { hasLocale } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: content.hero.role,
    description: content.meta.description,
    url: `${siteUrl}/${lang}`,
    address: { "@type": "PostalAddress", addressLocality: "West Jakarta", addressCountry: "ID" },
    sameAs: [personal.linkedin, personal.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <main id="main" className="flex-1">
        <Hero content={content.hero} ui={content.ui} lang={lang} />
        <About content={content.about} />
        <Achievements content={content.achievements} />
        <Experience content={content.experience} />
        <Projects content={content.projects} />
        <Skills content={content.skills} />
        <Services content={content.services} />
        <Contact content={content.contact} lang={lang} />
      </main>
      <footer className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-4 py-8 font-mono text-sm text-muted sm:px-8">{personal.name}</p>
      </footer>
    </>
  );
}
