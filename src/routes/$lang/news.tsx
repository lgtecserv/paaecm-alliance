import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { newsCategories } from "../../content/site";

export const Route = createFileRoute("/$lang/news")({
  component: News,
});

function News() {
  const { t, lang } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.nav.news}
            </h1>
          </div>

          {/* Categories Tab Bar Placeholder */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm">
              {lang === "pt" ? "Todas" : "All"}
            </span>
            {newsCategories.map((cat, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-background border border-border text-foreground font-medium text-sm">
                 {lang === "pt" ? getPtNewsCat(cat) : cat}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center p-20 bg-background rounded-3xl border border-dashed border-border">
            <p className="text-muted-foreground font-medium">
              {lang === "pt" ? "As notícias e atualizações aparecerão aqui em breve." : "News and updates will appear here soon."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function getPtNewsCat(cat: string) {
  const map: Record<string, string> = {
    "News": "Notícias",
    "Events": "Eventos",
    "Advocacy": "Advocacia",
    "Research": "Investigação",
    "Partnerships": "Parcerias",
  };
  return map[cat] || cat;
}
