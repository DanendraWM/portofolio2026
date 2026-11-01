"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { useScrollTilt } from "@/hooks/useScrollTilt";
import type { Content } from "@/types/content";

export function Achievements({ content }: { content: Content["achievements"] }) {
  const root = useRef<HTMLDivElement>(null);
  useScrollTilt(root, ".achievement-tilt");

  return (
    <Section id="highlights" label={content.label} title={content.title}>
      <div ref={root} className="grid gap-5 [perspective:1000px] md:grid-cols-2">
        {content.items.map((achievement) => (
          <div key={achievement.title} className="achievement-tilt">
            <m.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent"
            >
              <Image
                src={achievement.image.src}
                alt={achievement.image.alt}
                width={2000}
                height={1333}
                sizes="(min-width: 1152px) 544px, (min-width: 768px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <p className="font-display text-5xl font-medium tracking-tight text-accent sm:text-6xl">{achievement.highlight}</p>
                <h3 className="mt-4 font-display text-xl font-medium text-ink sm:text-2xl">{achievement.title}</h3>
                <p className="mt-1 font-mono text-sm text-muted">
                  {achievement.issuer} · {achievement.year}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{achievement.detail}</p>
              </div>
            </m.article>
          </div>
        ))}
      </div>
    </Section>
  );
}
