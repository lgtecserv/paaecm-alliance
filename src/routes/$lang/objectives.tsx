import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";

export const Route = createFileRoute("/$lang/objectives")({
  component: Objectives,
});

function Objectives() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.lang === "pt" ? "Objectivos Estratégicos" : "Strategic Objectives"}
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {t.objectives.map((obj, i) => (
              <div 
                key={obj.number}
                className="flex items-center p-6 bg-card rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl font-bold text-primary/20 mr-6 group-hover:text-primary transition-colors">
                  {obj.number}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {obj.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
