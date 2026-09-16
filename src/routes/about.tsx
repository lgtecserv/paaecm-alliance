import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CountryPresence } from "@/components/site/CountryPresence";
import { originsReferences, originsSteps } from "@/content/site";
import communityImg from "@/assets/community-dialogue.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PAAECM — Pan African Alliance for Ending Child Marriage" },
      {
        name: "description",
        content:
          "PAAECM is an alliance of activists, advocates and researchers working to end child marriage in Africa, with representation across ten African countries.",
      },
      { property: "og:title", content: "About PAAECM" },
      {
        property: "og:description",
        content:
          "An alliance of activists, advocates and researchers focused on ending child marriage in Africa.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About PAAECM"
        lead="A Pan-African alliance of activists, advocates and researchers working specifically on ending child marriage."
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-start">
          <Reveal className="space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              The Pan African Alliance for Ending Child Marriage (PAAECM) is an
              alliance of women's and children's rights activists, advocates and
              researchers with a specific focus on ending child marriage,
              bringing together representation from different African countries.
            </p>
            <p>
              PAAECM emerged in a context where several national initiatives
              already existed, while sub-regional and continental efforts were
              considered fragile or fragmented.
            </p>
            <p>
              The Alliance seeks to strengthen collective action, accountability
              and the sustainability of African responses to child marriage.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={communityImg}
              alt="Community members, traditional leaders and young people in discussion under a tree"
              className="w-full rounded-sm object-cover"
              width={1600}
              height={1008}
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Origins"
          title="How PAAECM Came Together"
          lead="The group first came together in January 2023."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {originsSteps.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 90}>
              <div className="h-full rounded-sm border border-border bg-card p-6">
                <span className="font-display text-sm text-accent">
                  Step {i + 1}
                </span>
                <p className="mt-2 font-display text-lg leading-snug">{step}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 max-w-3xl">
          <Eyebrow>Institutional references</Eyebrow>
          <ul className="mt-4 space-y-3">
            {originsReferences.map((r) => (
              <li
                key={r}
                className="border-l-2 border-accent pl-4 text-base leading-relaxed text-foreground/85"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Representation"
          title="A Pan-African Alliance"
          lead="PAAECM's institutional profile records representation in the following countries."
        />
        <div className="mt-10">
          <CountryPresence />
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Read more about PAAECM in{" "}
          <Link to="/mozambique" className="text-primary underline underline-offset-4">
            Mozambique
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
