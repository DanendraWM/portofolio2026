import type { Locale } from "@/i18n/config";
import type { Content } from "@/types/content";
import { en } from "./en";
import { id } from "./id";

const content: Record<Locale, Content> = { en, id };

export function getContent(locale: Locale): Content {
  return content[locale];
}
