import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { personal } from "@/content/personal";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/types/content";

const linkClass =
  "flex h-12 items-center justify-between rounded-lg border border-line px-4 font-medium text-ink transition-colors hover:border-accent hover:text-accent";

export function Contact({ content, lang }: { content: Content["contact"]; lang: Locale }) {
  return (
    <Section id="contact" label={content.label} title={content.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <ContactForm labels={content.form} />
        </Reveal>

        <Reveal delay={0.1} className="space-y-3">
          <p className="mb-5 leading-relaxed text-muted">{content.direct}</p>
          <a href={`/api/whatsapp?lang=${lang}`} target="_blank" rel="noopener noreferrer nofollow" className={linkClass}>
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${personal.email}`} className={linkClass}>
            Email <span aria-hidden="true">↗</span>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
