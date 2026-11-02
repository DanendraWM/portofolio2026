"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { gsap, useGSAP } from "@/lib/gsap";
import type { Content } from "@/types/content";

export function Experience({ content }: { content: Content["experience"] }) {
  const timeline = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // The accent line draws down the timeline as you scroll; without motion it's simply full height.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".timeline-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: timeline.current, start: "top 70%", end: "bottom 70%", scrub: true },
          },
        );
      });
    },
    { scope: timeline },
  );

  return (
    <Section id="experience" label={content.label} title={content.title}>
      <ol ref={timeline} className="relative space-y-12 pl-8 sm:pl-12">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
        <span aria-hidden="true" className="timeline-progress absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent-fill" />

        {content.jobs.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-8 size-[11px] rounded-full border-2 border-accent-fill bg-background sm:-left-12"
            />
            <Reveal>
              <p className="font-mono text-sm text-accent">{job.period}</p>
              <h3 className="mt-2 font-display text-xl font-medium text-ink sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-muted">{job.company}</p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-16">
        <h3 className="font-mono text-sm text-accent">{content.educationLabel}</h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {content.education.map((item) => (
            <li key={item.school} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
              {item.image && (
                <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-lg sm:w-24">
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="96px" className="object-cover object-top" />
                </div>
              )}
              <div>
                <p className="font-medium text-ink">{item.degree}</p>
                <p className="mt-1 text-muted">{item.school}</p>
                <p className="mt-2 font-mono text-sm text-muted">
                  {item.period}
                  {item.note ? ` · ${item.note}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
