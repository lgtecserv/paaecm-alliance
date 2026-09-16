import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { SeoMeta } from '../../components/SeoMeta';
import { useEffect } from 'react';

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params: { lang } }) => {
    if (lang !== 'en' && lang !== 'pt') {
      throw redirect({ to: '/en', replace: true });
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();

  useEffect(() => {
    if (lang === 'en' || lang === 'pt') {
      localStorage.setItem('paaecm-lang', lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased font-sans">
      <SeoMeta />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
