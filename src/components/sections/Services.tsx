import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Content } from "@/types/content";

export function Services({ content }: { content: Content["services"] }) {
  return (
    <Section id="services" label={content.label} title={content.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {content.items.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05} className="rounded-xl border border-line bg-surface p-5 sm:p-6">
            <h3 className="font-display text-lg font-medium text-ink">{service.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
