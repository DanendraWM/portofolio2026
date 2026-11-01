"use client";

import { useState, type FormEvent } from "react";
import type { Content } from "@/types/content";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2.5 text-base text-ink transition-colors outline-none placeholder:text-muted focus:border-accent";

export function ContactForm({ labels }: { labels: Content["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  function errorFor(httpStatus: number) {
    if (httpStatus === 400) return labels.errorValidation;
    if (httpStatus === 429) return labels.errorRateLimit;
    return labels.errorGeneric;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (response.ok) {
        form.reset();
        setStatus({ state: "sent" });
        return;
      }

      setStatus({ state: "error", message: errorFor(response.status) });
    } catch {
      setStatus({ state: "error", message: labels.errorGeneric });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-line bg-surface p-5 sm:p-6">
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-ink">
          {labels.name}
        </label>
        <input id="contact-name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-contact" className="text-sm font-medium text-ink">
          {labels.contact}
        </label>
        <input id="contact-contact" name="contact" required maxLength={150} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          {labels.message}
        </label>
        <textarea id="contact-message" name="message" required maxLength={2000} rows={5} className={fieldClass} />
      </div>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="inline-flex h-12 items-center rounded-lg bg-accent-fill px-6 font-medium text-on-accent transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
      >
        {status.state === "sending" ? labels.sending : labels.send}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status.state === "sent" && <span className="text-accent">{labels.sent}</span>}
        {status.state === "error" && <span className="text-ink">{status.message}</span>}
      </p>
    </form>
  );
}
