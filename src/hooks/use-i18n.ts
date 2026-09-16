import { useParams } from "@tanstack/react-router";
import { i18n, Language, defaultLanguage } from "../lib/i18n";

export function useI18n() {
  // We use strict: false so this hook can be used anywhere, 
  // even in components outside the $lang route (though they might default to English).
  const params = useParams({ strict: false }) as { lang?: string };
  
  const currentLang: Language = 
    (params.lang === "pt" || params.lang === "en") ? params.lang : defaultLanguage;
    
  const t = i18n[currentLang];
  
  return { lang: currentLang, t };
}
