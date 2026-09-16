import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/$lang/strategic-actions")({
  component: StrategicActions,
});

function StrategicActions() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.lang === "pt" ? "Acções Estratégicas" : "Strategic Actions"}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.actions.map((action, i) => (
              <div 
                key={i}
                className="flex flex-col bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {action.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
