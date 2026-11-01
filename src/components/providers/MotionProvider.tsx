"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// LazyMotion ships only the features this site uses; components render `m.*` instead of `motion.*`.
// reducedMotion="user" drops movement for people who ask for it, and keeps simple fades.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
