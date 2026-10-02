import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { FileText, Download, Shield, Heart, Globe, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/$lang/advocacy")({
  component: Advocacy,
});

const pageContent = {
  en: {
    title: "Advocacy & Campaigns",
    subtitle: "Youth-led action and strategic interventions to end child marriage across Africa.",
    thematicTitle: "Strategic Thematic Areas",
    thematicSubtitle: "Based on our regional mapping and assessment of youth-led organizations in East Africa.",
    areas: [
      {
        icon: Shield,
        title: "Gender-Based Violence (GBV)",
        desc: "Focusing on prevention campaigns, survivor support, and addressing harmful social norms."
      },
      {
        icon: Heart,
        title: "Sexual & Reproductive Health (SRHR)",
        desc: "Advocating for reproductive health awareness, bodily autonomy, and reducing stigma."
      },
      {
        icon: Globe,
        title: "Climate Justice",
        desc: "Linking environmental sustainability and community resilience with gender justice."
      },
      {
        icon: Users,
        title: "Youth Civic Participation",
        desc: "Promoting youth inclusion in governance, accountability, and decision-making processes."
      },
      {
        icon: TrendingUp,
        title: "Economic Empowerment",
        desc: "Addressing youth unemployment and economic exclusion through livelihood strengthening."
      }
    ],
    campaignTitle: "Youth-Led Digital Advocacy",
    campaignSubtitle: "Translating the SADC Model Law into grassroots accountability.",
    campaignText1: "Our youth advocates are driving change by identifying legislative gaps in the SADC Model Law on Eradicating Child Marriage. We utilize digital storytelling and rapid-response messaging to bypass traditional media gatekeepers.",
    campaignText2: "Join the movement and use our digital campaign hashtags to hold duty-bearers accountable and amplify the voices of girls and survivors.",
    hashtags: ["#MyBodyIsMine", "#LetHerBeChild", "#HerBodyHerChoice", "#SchoolIsCool", "#BooksNotRings", "#MwanaNiMwana"],
    resourcesTitle: "Resources & Reports",
    resourcesSubtitle: "Download our latest assessments and workshop reports.",
    download: "Download PDF",
    documents: [
      {
        title: "PAAECM Digital Advocacy Workshop Report",
        filename: "PAAECM Digital Advocacy Workshop Report.pdf"
      },
      {
        title: "REV AMT - Mapping Assessment EA Region",
        filename: "REV AMT - Mapping Assessment  EA region - Report.pdf"
      },
      {
        title: "Youth-led Digital Advocacy Facilitation Report",
        filename: "Youth led Digital advocacy Facilitation Report - August 2026 (2).pdf"
      }
    ]
  },
  pt: {
    title: "Advocacia e Campanhas",
    subtitle: "Acção liderada por jovens e intervenções estratégicas para acabar com o casamento infantil em África.",
    thematicTitle: "Áreas Temáticas Estratégicas",
    thematicSubtitle: "Com base no nosso mapeamento regional e avaliação de organizações lideradas por jovens na África Oriental.",
    areas: [
      {
        icon: Shield,
        title: "Violência Baseada no Género (VBG)",
        desc: "Foco em campanhas de prevenção, apoio a sobreviventes e combate a normas sociais nocivas."
      },
      {
        icon: Heart,
        title: "Saúde Sexual e Reprodutiva (DSSR)",
        desc: "Advocacia pela consciencialização da saúde reprodutiva, autonomia corporal e redução do estigma."
      },
      {
        icon: Globe,
        title: "Justiça Climática",
        desc: "Relacionando a sustentabilidade ambiental e a resiliência comunitária com a justiça de género."
      },
      {
        icon: Users,
        title: "Participação Cívica Jovem",
        desc: "Promoção da inclusão de jovens na governação, responsabilização e processos de tomada de decisão."
      },
      {
        icon: TrendingUp,
        title: "Empoderamento Económico",
        desc: "Combate ao desemprego jovem e à exclusão económica através do fortalecimento de meios de subsistência."
      }
    ],
    campaignTitle: "Advocacia Digital Liderada por Jovens",
    campaignSubtitle: "Traduzindo a Lei Modelo da SADC em responsabilização ao nível da base comunitária.",
    campaignText1: "Os nossos jovens activistas estão a impulsionar a mudança identificando lacunas legislativas na Lei Modelo da SADC sobre a Erradicação do Casamento Infantil. Utilizamos a narração de histórias digitais e mensagens de resposta rápida para contornar as barreiras da mídia tradicional.",
    campaignText2: "Junte-se ao movimento e use as hashtags da nossa campanha digital para exigir responsabilização aos decisores e amplificar as vozes das raparigas e sobreviventes.",
    hashtags: ["#MyBodyIsMine", "#LetHerBeChild", "#HerBodyHerChoice", "#SchoolIsCool", "#BooksNotRings", "#MwanaNiMwana"],
    resourcesTitle: "Recursos e Relatórios",
    resourcesSubtitle: "Faça o download das nossas avaliações e relatórios de workshops mais recentes.",
    download: "Baixar PDF",
    documents: [
      {
        title: "Relatório do Workshop de Advocacia Digital da PAAECM",
        filename: "PAAECM Digital Advocacy Workshop Report.pdf"
      },
      {
        title: "Avaliação e Mapeamento REV AMT - Região da África Oriental",
        filename: "REV AMT - Mapping Assessment  EA region - Report.pdf"
      },
      {
        title: "Relatório de Facilitação de Advocacia Digital Liderada por Jovens",
        filename: "Youth led Digital advocacy Facilitation Report - August 2026 (2).pdf"
      }
    ]
  }
};

function Advocacy() {
  const { lang } = useI18n();
  const t = pageContent[lang as keyof typeof pageContent] || pageContent.en;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container max-w-screen-xl px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.thematicTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.thematicSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Campaign Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.campaignTitle}</h2>
              <h3 className="text-xl font-medium mb-6 text-primary-foreground/90">{t.campaignSubtitle}</h3>
              <p className="text-lg mb-4 text-primary-foreground/80 leading-relaxed">
                {t.campaignText1}
              </p>
              <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed">
                {t.campaignText2}
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 shadow-lg">
              <h4 className="text-2xl font-semibold mb-6">#JoinTheMovement</h4>
              <div className="flex flex-wrap gap-3">
                {t.hashtags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-background/20 rounded-full font-medium text-primary-foreground border border-primary-foreground/30 hover:bg-background/30 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.resourcesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.resourcesSubtitle}
            </p>
          </div>
          
          <div className="flex flex-col max-w-4xl mx-auto gap-4">
            {t.documents.map((doc, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                  <div className="h-12 w-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-semibold text-lg text-left">{doc.title}</h4>
                </div>
                <a
                  href={`/documents/${doc.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 w-full sm:w-auto shrink-0 gap-2"
                >
                  <Download className="h-4 w-4" />
                  {t.download}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
