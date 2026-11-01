import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Content } from "@/types/content";

export function About({ content }: { content: Content["about"] }) {
  return (
    <Section id="about" label={content.label} title={content.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
            {content.quickFacts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                <dd className="mt-1 text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
