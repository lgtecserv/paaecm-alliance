import { Link, useLocation } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { lang, t } = useI18n();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getToggleLangUrl = () => {
    const targetLang = lang === "en" ? "pt" : "en";
    return location.pathname.replace(`/${lang}`, `/${targetLang}`);
  };

  const navLinks = [
    { label: t.nav.home, to: `/${lang}` },
    { label: t.nav.about, to: `/${lang}/about` },
    { label: t.nav.visionMission, to: `/${lang}/vision-mission` },
    { label: t.nav.contact, to: `/${lang}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Link to={`/${lang}`} className="flex items-center space-x-2">
            <img src="/Logo_da_PAAECM.png" alt="PAAECM Logo" className="h-24 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-primary [&.active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-4">
          <Link
            to={getToggleLangUrl()}
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            {lang === "en" ? "PT" : "EN"}
          </Link>
          <a
            href="#partner"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {t.partnerWithUs}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden border-b border-border bg-background px-4 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-border/50">
              <Link
                to={getToggleLangUrl()}
                className="text-base font-semibold hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {lang === "en" ? "Mudar para Português" : "Switch to English"}
              </Link>
              <a
                href="#partner"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {t.partnerWithUs}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
