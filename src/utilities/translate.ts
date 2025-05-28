import en from "@/langs/en.json";
import de from "@/langs/de.json";
import cs from "@/langs/cs.json";
import es from "@/langs/es.json";
import zh from "@/langs/zh.json";
import it from "@/langs/it.json";
import ru from "@/langs/ru.json";
import ar from "@/langs/ar.json";
import pl from "@/langs/pl.json";
import fr from "@/langs/fr.json";

type TranslationFile = typeof en;

// Helper type to get nested keys as dot notation
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Helper function to get nested values
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export const availableLanguages = {
  en,
  de,
  cs,
  es,
  zh,
  it,
  ru,
  ar,
  pl,
  fr,
} as const;

// Utility type for destructured return
type TranslateReturnType<T extends string> =
  T extends `${infer First}.${infer Rest}`
    ? { [K in First]: TranslateReturnType<Rest> }
    : T extends keyof TranslationFile
      ? TranslationFile[T]
      : never;

// Overload signature for dot notation keys
export function translate<T extends NestedKeyOf<TranslationFile>>(
  key: T,
  lang?: keyof typeof availableLanguages,
): TranslateReturnType<T>;

// Overload signature for string keys (fallback)
export function translate(
  key: string,
  lang?: keyof typeof availableLanguages,
): any;

// Implementation
export function translate(
  key: string,
  lang: keyof typeof availableLanguages = "en",
) {
  // Default to 'en' if the requested language isn't available
  const targetLang = availableLanguages[lang] ? lang : "en";
  const languageFile = availableLanguages[targetLang];

  const result = getNestedValue(languageFile, key);

  if (result === undefined) {
    console.warn(
      `Translation key '${key}' not found in '${targetLang}' language file`,
    );
    return {};
  }

  return result;
}
