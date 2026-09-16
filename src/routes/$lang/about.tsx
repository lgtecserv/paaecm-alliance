import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { Users2, ShieldCheck, MapPin } from "lucide-react";

export const Route = createFileRoute("/$lang/about")({
  component: About,
});

function About() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container max-w-screen-xl px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.text}
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t.about.howItCameTogether}
              </h2>
              <div className="prose prose-lg prose-p:text-muted-foreground">
                <p>
                  <strong>{t.about.originDate}</strong>
                </p>
                <p>{t.about.originText}</p>
                <p>
                  {t.lang === "pt"
                    ? "O perfil institucional relaciona a origem da iniciativa com:"
                    : "The institutional profile relates the origin of the initiative with:"}
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
                  <li>African Union Campaign on Ending Child Marriage</li>
                  <li>African Union Summit in Lusaka, July 2022</li>
                  <li>Plan International Center of Excellence</li>
                  <li>SADC Model Law on Ending Child Marriage</li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <Users2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t.approach.ubuntu}</h3>
                    <p className="text-muted-foreground">{t.approach.collectiveAction}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t.approach.accountability}</h3>
                    <p className="text-muted-foreground">{t.approach.humanRights}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t.approach.sustainableSolutions}</h3>
                    <p className="text-muted-foreground">{t.approach.feminism}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth & Survivors Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-screen-xl px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.youth.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t.youth.text}
          </p>
        </div>
      </section>

      {/* African Representation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {t.representation.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Zambia", "Zimbabwe", "Malawi", "Mozambique", "South Africa", "Tanzania", "Ethiopia", "Nigeria", "Cameroon", "Ghana"].map((country) => (
              <span
                key={country}
                className="px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium shadow-sm hover:border-primary transition-colors cursor-default"
              >
                {t.lang === "pt" ? getPortugueseCountry(country) : country}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function getPortugueseCountry(country: string) {
  const map: Record<string, string> = {
    "Zambia": "Zâmbia",
    "Zimbabwe": "Zimbabwe",
    "Malawi": "Malawi",
    "Mozambique": "Moçambique",
    "South Africa": "África do Sul",
    "Tanzania": "Tanzânia",
    "Ethiopia": "Etiópia",
    "Nigeria": "Nigéria",
    "Cameroon": "Camarões",
    "Ghana": "Gana",
  };
  return map[country] || country;
}
