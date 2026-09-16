import { createFileRoute, redirect } from "@tanstack/react-router";
import { defaultLanguage, Language } from "../lib/i18n";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // Attempt to read language from localStorage
    let storedLang = "en";
    try {
      const saved = localStorage.getItem("paaecm-lang");
      if (saved === "pt" || saved === "en") {
        storedLang = saved;
      }
    } catch (e) {
      // ignore
    }

    throw redirect({
      to: `/${storedLang}`,
      replace: true,
    });
  },
});
