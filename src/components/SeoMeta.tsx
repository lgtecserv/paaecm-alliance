import { Helmet } from "react-helmet";
import { useI18n } from "../hooks/use-i18n";
import { useLocation } from "@tanstack/react-router";

export function SeoMeta() {
  const { lang, t } = useI18n();
  const location = useLocation();
  
  // Base URL would typically come from an env variable
  const baseUrl = "https://paaecm.org";
  const pathWithoutLang = location.pathname.replace(`/${lang}`, "");
  
  const currentUrl = `${baseUrl}/${lang}${pathWithoutLang}`;
  const alternateEnUrl = `${baseUrl}/en${pathWithoutLang}`;
  const alternatePtUrl = `${baseUrl}/pt${pathWithoutLang}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t.org.name}</title>
      <meta name="description" content={t.org.mission} />
      
      {/* Open Graph */}
      <meta property="og:title" content={t.org.name} />
      <meta property="og:description" content={t.org.mission} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      
      {/* Alternate Languages for SEO */}
      <link rel="alternate" hrefLang="en" href={alternateEnUrl} />
      <link rel="alternate" hrefLang="pt" href={alternatePtUrl} />
      <link rel="alternate" hrefLang="x-default" href={alternateEnUrl} />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
