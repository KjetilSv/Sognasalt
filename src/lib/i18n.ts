export const languages = ["no", "en", "de"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "no";

export function isLanguage(value: string): value is Language {
  return (languages as readonly string[]).includes(value);
}
