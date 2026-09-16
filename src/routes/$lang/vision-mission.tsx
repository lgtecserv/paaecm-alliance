import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { Eye, Target, Flag } from "lucide-react";

export const Route = createFileRoute("/$lang/vision-mission")({
  component: VisionMission,
});

function VisionMission() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.nav.visionMission}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.lang === "pt" ? "Visão" : "Vision"}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.org.vision}
              </p>
            </div>

            <div className="flex flex-col bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.lang === "pt" ? "Missão" : "Mission"}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.org.mission}
              </p>
            </div>

            <div className="flex flex-col bg-card p-8 rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Flag className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.lang === "pt" ? "Objectivo" : "Goal"}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.org.goal}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
