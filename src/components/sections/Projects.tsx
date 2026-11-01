"use client";

import { m } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useScrollTilt } from "@/hooks/useScrollTilt";
import type { Content } from "@/types/content";

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Projects({ content }: { content: Content["projects"] }) {
  const grid = useRef<HTMLDivElement>(null);
  useScrollTilt(grid, ".project-tilt");

  return (
    <Section id="projects" label={content.label} title={content.title}>
      <div ref={grid} className="grid gap-5 [perspective:1000px] md:grid-cols-2">
        {content.featured.map((project) => (
          <div key={project.slug} className="project-tilt">
            <m.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8"
            >
              <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{project.title}</h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-accent">{project.context}</p>

              <dl className="mt-6 flex-1 space-y-4 leading-relaxed">
                <div>
                  <dt className="font-mono text-xs text-muted">{content.problem}</dt>
                  <dd className="mt-1 text-ink">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-muted">{content.solution}</dt>
                  <dd className="mt-1 text-ink">{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-muted">{content.impact}</dt>
                  <dd className="mt-1 text-ink">{project.impact}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <TechList items={project.tech} />
              </div>
            </m.article>
          </div>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-mono text-sm text-accent">{content.smallLabel}</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {content.small.map((project) => (
            <li key={project.slug} className="grid gap-3 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
              <div>
                <p className="font-medium text-ink">{project.title}</p>
                <p className="mt-1 leading-relaxed text-muted">{project.summary}</p>
              </div>
              <TechList items={project.tech} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
