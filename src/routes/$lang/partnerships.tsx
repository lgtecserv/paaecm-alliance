import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { Handshake } from "lucide-react";
import { partners } from "../../content/site";

export const Route = createFileRoute("/$lang/partnerships")({
  component: Partnerships,
});

function Partnerships() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.nav.partnerships}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.partnershipSection.text}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">{t.partnershipSection.title}</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="font-medium text-foreground">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
