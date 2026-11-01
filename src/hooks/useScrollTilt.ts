"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Cards matching the selector tilt back and settle flat as they scroll in.
 * Only the transform is scroll-driven, so they stay readable at any scroll position.
 */
export function useScrollTilt(scope: RefObject<HTMLElement | null>, selector: string) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(selector, scope.current).forEach((card) => {
          gsap.fromTo(
            card,
            { rotationX: 24, y: 48, transformOrigin: "50% 100%" },
            {
              rotationX: 0,
              y: 0,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top 95%", end: "top 55%", scrub: true },
            },
          );
        });
      });
    },
    { scope },
  );
}
