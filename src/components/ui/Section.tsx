import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-8 px-4 py-20 sm:px-8 lg:py-28">
      <p className="font-mono text-sm text-accent">{label}</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-medium tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      <div className="mt-10 lg:mt-14">{children}</div>
    </section>
  );
}
