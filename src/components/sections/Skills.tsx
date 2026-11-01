import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Content } from "@/types/content";

export function Skills({ content }: { content: Content["skills"] }) {
  return (
    <Section id="skills" label={content.label} title={content.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {content.groups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05} className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <h3 className="font-mono text-sm text-accent">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border border-line px-2.5 py-1 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-mono text-sm text-accent">{content.certificationsLabel}</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {content.certifications.map((certification) => (
            <li key={certification.title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
              <span className="font-medium text-ink">{certification.title}</span>
              <span className="font-mono text-sm text-muted">
                {certification.issuer}
                {certification.year ? ` · ${certification.year}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
