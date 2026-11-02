import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Content } from "@/types/content";

export function Outside({ content }: { content: Content["outside"] }) {
  return (
    <Section id="outside" label={content.label} title={content.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {content.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className={`grid aspect-[4/3] gap-px ${item.images.length > 1 ? "grid-cols-2" : ""}`}>
              {item.images.map((image) => (
                <div key={image.src} className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      item.images.length > 1
                        ? "(min-width: 1152px) 176px, (min-width: 768px) 17vw, 50vw"
                        : "(min-width: 1152px) 352px, (min-width: 768px) 33vw, 100vw"
                    }
                    className="object-cover"
                    style={{ objectPosition: image.position }}
                  />
                </div>
              ))}
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.caption}</p>
              {item.note && <p className="mt-3 font-mono text-xs text-muted">{item.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h3 className="font-mono text-sm text-accent">{content.favoritesLabel}</h3>
        <dl className="mt-4 divide-y divide-line border-y border-line">
          {content.favorites.map((group) => (
            <div key={group.label} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="font-mono text-sm text-muted">{group.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line px-2.5 py-1 text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
