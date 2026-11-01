export const locales = ["en", "id"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
