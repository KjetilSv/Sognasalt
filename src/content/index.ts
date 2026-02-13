import type { Content } from "./types";
import no from "./no";
import en from "./en";
import de from "./de";

export type Lang = Content["lang"];

const contentMap: Record<Lang, Content> = { no, en, de };

export function getContent(lang: Lang): Content {
  return contentMap[lang] ?? no;
}
