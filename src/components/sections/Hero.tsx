"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personal } from "@/content/personal";
import type { Locale } from "@/i18n/config";
import { gsap, useGSAP } from "@/lib/gsap";
import type { Content } from "@/types/content";

// Placed around the edges of the portrait, clear of the face.
const nodePositions = [
  { id: "request", x: 10, y: 12, lift: "40px" },
  { id: "api", x: 92, y: 40, lift: "80px", active: true },
  { id: "database", x: 8, y: 68, lift: "60px" },
  { id: "response", x: 92, y: 88, lift: "100px" },
] as const;

function delay(seconds: number) {
  return { "--delay": `${seconds}s` } as CSSProperties;
}

export function Hero({ content, ui, lang }: { content: Content["hero"]; ui: Content["ui"]; lang: Locale }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop holds the hero in place while the diagram flattens.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-scene",
          { "--p": 0 },
          {
            "--p": 1,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top top", end: "+=70%", pin: true, scrub: true },
          },
        );
      });

      // Phones skip the pin: the diagram flattens as it scrolls through the screen.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-scene",
          { "--p": 0 },
          {
            "--p": 1,
            ease: "none",
            scrollTrigger: { trigger: ".hero-scene", start: "top 70%", end: "center 40%", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-svh flex-col overflow-x-clip bg-background">
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_70%)]"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <span className="font-mono text-sm text-muted">{personal.firstName.toLowerCase()}</span>
        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} label={ui.switchLanguage} />
          <ThemeToggle label={ui.toggleTheme} />
        </div>
      </header>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 pt-6 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:py-8">
        <div className="relative z-10">
          <p className="intro font-mono text-sm text-accent">{content.location}</p>
          <h1 className="intro mt-4 font-display text-5xl leading-[1.05] font-medium tracking-tight text-ink sm:text-7xl" style={delay(0.05)}>
            {personal.firstName}
            <span className="block text-3xl leading-tight text-muted sm:text-5xl">{personal.lastNames}</span>
          </h1>
          <p className="intro mt-6 text-xl font-medium text-ink sm:text-2xl" style={delay(0.15)}>
            {content.role}
          </p>
          <p className="intro mt-3 max-w-xl text-lg leading-relaxed text-muted" style={delay(0.2)}>
            {content.tagline}
          </p>

          <div className="intro mt-8 flex flex-wrap gap-3" style={delay(0.3)}>
            <a
              href="#projects"
              className="inline-flex h-12 items-center rounded-lg bg-accent-fill px-6 font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              {content.viewProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-lg border border-line px-6 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {content.contactMe}
            </a>
          </div>

          <ul className="intro mt-8 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6" style={delay(0.4)}>
            {content.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-fill" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-scene mx-auto aspect-[4/5] w-[min(76vw,24rem)] lg:w-full lg:max-w-sm">
          <div className="hero-plane relative size-full">
            {/* The photo has a white background; multiply blends it into the panel color. Overflow stays on this inner box so the chips keep their 3D depth. */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-line bg-portrait-panel">
              <Image
                src="/images/portrait.jpg"
                alt={content.portraitAlt}
                fill
                preload
                sizes="(min-width: 1024px) 384px, 76vw"
                className="object-cover object-top mix-blend-multiply"
              />
            </div>

            {nodePositions.map((node, index) => {
              const active = "active" in node;

              return (
                <div
                  key={node.id}
                  className={`hero-node absolute w-[40%] rounded-lg border bg-surface px-2.5 py-1.5 ${active ? "border-accent" : "border-line"}`}
                  style={
                    {
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      "--lift": node.lift,
                      "--delay": `${0.3 + index * 0.12}s`,
                    } as CSSProperties
                  }
                >
                  <p className={`font-mono text-sm font-medium ${active ? "text-accent" : "text-ink"}`}>{node.id}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-muted sm:text-xs">{content.nodes[node.id]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
