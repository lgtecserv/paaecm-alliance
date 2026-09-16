import { Link } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  const { lang, t } = useI18n();
  const isPt = lang === "pt";

  const footerLinks = [
    { label: t.nav.about, to: `/${lang}/about` },
    { label: t.nav.visionMission, to: `/${lang}/vision-mission` },
    { label: t.nav.strategicAreas, to: `/${lang}/objectives` },
    { label: t.nav.partnerships, to: `/${lang}/partnerships` },
    { label: t.nav.leadership, to: `/${lang}/leadership` },
    { label: t.nav.news, to: `/${lang}/news` },
    { label: t.nav.contact, to: `/${lang}/contact` },
  ];

  return (
    <footer className="w-full bg-[#0a1f14] text-zinc-300 relative overflow-hidden">
      {/* Premium Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600"></div>
      
      {/* Call to Action Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              {isPt ? "Junte-se ao Movimento Pan-Africano" : "Join the Pan-African Movement"}
            </h2>
            <p className="text-lg text-zinc-400">
              {isPt 
                ? "Subscreva a nossa newsletter para receber as últimas notícias, recursos e histórias de impacto."
                : "Subscribe to our newsletter to receive the latest news, resources, and impact stories."}
            </p>
          </div>
          <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder={isPt ? "O seu endereço de e-mail" : "Your email address"}
              className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-80 transition-all"
            />
            <button className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold flex items-center justify-center transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] cursor-pointer">
              {isPt ? "Subscrever" : "Subscribe"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container max-w-screen-xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (takes up 4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to={`/${lang}`} className="flex items-center">
              <img src="/Logo_da_PAAECM.png" alt="PAAECM Logo" className="h-28 w-auto brightness-[200%] contrast-[120%] drop-shadow-lg" />
            </Link>
            <p className="text-base leading-relaxed text-zinc-400 font-medium">
              {t.org.name}
            </p>
            <p className="text-sm font-semibold text-green-500 uppercase tracking-widest">
              {t.org.tagline}
            </p>
            <div className="flex items-center space-x-5 pt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-green-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-green-600 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-green-600 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spacer in grid */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links (takes up 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="font-bold text-xl text-white tracking-tight">{isPt ? "Links Rápidos" : "Quick Links"}</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-zinc-400 hover:text-green-400 transition-colors font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (takes up 4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h3 className="font-bold text-xl text-white tracking-tight">{isPt ? "Contactos" : "Contact Us"}</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-green-500 mr-4 shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed font-medium">
                  {isPt ? "Sede" : "Headquarters"}<br />
                  Maputo, Moçambique<br />
                  {isPt ? "África" : "Africa"}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                <span className="text-zinc-400 font-medium hover:text-white transition-colors cursor-pointer">info@paaecm.org</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-green-500 mr-4 shrink-0" />
                <span className="text-zinc-400 font-medium hover:text-white transition-colors cursor-pointer">+258 84 000 0000</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} {t.org.name}. {isPt ? "Todos os direitos reservados." : "All rights reserved."}
          </p>
          <div className="flex space-x-6 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">{isPt ? "Termos de Uso" : "Terms of Service"}</a>
            <a href="#" className="hover:text-white transition-colors">{isPt ? "Política de Privacidade" : "Privacy Policy"}</a>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
