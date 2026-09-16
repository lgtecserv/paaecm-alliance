import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { strategicObjectives } from "@/content/site";

export const Route = createFileRoute("/objectives")({
  head: () => ({
    meta: [
      { title: "Strategic Objectives — PAAECM" },
      {
        name: "description",
        content:
          "The five strategic objectives of the Pan African Alliance for Ending Child Marriage: research, movement building, strategic convening, policy advocacy and systems strengthening.",
      },
      { property: "og:title", content: "Strategic Objectives — PAAECM" },
      {
        property: "og:description",
        content:
          "Research, movement building, strategic convening, evidence-based advocacy and organizational strengthening.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/objectives" },
    ],
    links: [{ rel: "canonical", href: "/objectives" }],
  }),
  component: ObjectivesPage,
});

function ObjectivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Areas"
        title="Strategic Objectives"
        lead="The five specific objectives set out in PAAECM's institutional profile."
      />

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {strategicObjectives.map((o, i) => (
            <Reveal as="li" key={o.number} delay={i * 70}>
              <article className="h-full rounded-sm border border-border bg-card p-7 transition-colors hover:border-accent">
                <p className="font-display text-3xl text-accent">{o.number}</p>
                <h2 className="mt-3 font-display text-xl leading-snug">
                  {o.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {o.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-base">
          See also{" "}
          <Link
            to="/strategic-actions"
            className="text-primary underline underline-offset-4"
          >
            what we do
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
