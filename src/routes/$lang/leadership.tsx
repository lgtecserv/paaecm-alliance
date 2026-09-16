import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { board, secretariat } from "../../content/site";

export const Route = createFileRoute("/$lang/leadership")({
  component: Leadership,
});

function Leadership() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.nav.leadership}
            </h1>
          </div>

          {/* Board of Directors */}
          <div className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.leadership.boardTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {board.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm">
                  <div className="h-24 w-24 rounded-full bg-secondary mb-6 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-muted-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                    {member.country}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Secretariat */}
          <div className="mb-20 max-w-3xl mx-auto text-center bg-secondary/30 p-10 rounded-3xl border border-border/30">
            <h2 className="text-2xl font-bold mb-6">Secretariat</h2>
            {secretariat.map((member, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Mozambique section requested in prompt */}
          <div className="max-w-4xl mx-auto bg-primary/5 p-10 rounded-3xl border border-primary/10">
            <h2 className="text-3xl font-bold mb-6">{t.mozambique.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.mozambique.text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
