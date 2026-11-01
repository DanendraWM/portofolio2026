import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex h-11 items-center rounded-lg border border-line font-mono text-sm">
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}`}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === lang ? "page" : undefined}
          className={`grid h-full w-11 place-items-center rounded-lg transition-colors ${locale === lang ? "bg-surface font-medium text-accent" : "text-muted hover:text-accent"}`}
        >
          {locale.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
