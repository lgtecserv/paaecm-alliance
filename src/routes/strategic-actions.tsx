import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { approachPillars, strategicActions } from "@/content/site";
import youthImg from "@/assets/youth-voices.jpg";

export const Route = createFileRoute("/strategic-actions")({
  head: () => ({
    meta: [
      { title: "What We Do — Strategic Actions | PAAECM" },
      {
        name: "description",
        content:
          "PAAECM's key strategic actions: accountability tracking, mobilizing political will and resources, building a continental movement, knowledge and collaboration, and youth and survivor voice.",
      },
      { property: "og:title", content: "What We Do — PAAECM" },
      {
        property: "og:description",
        content:
          "Accountability, political will and resources, continental movement, knowledge and collaboration, youth and survivors.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/strategic-actions" },
    ],
    links: [{ rel: "canonical", href: "/strategic-actions" }],
  }),
  component: ActionsPage,
});

function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Areas"
        title="What We Do"
        lead="The five strategic lines of action described in PAAECM's institutional profile."
      />

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {strategicActions.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 70}>
              <article className="h-full rounded-sm border-t-2 border-accent bg-secondary p-7">
                <h2 className="font-display text-xl leading-snug">{a.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  {a.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Approach"
          title="African Solutions, Collective Action"
          lead="PAAECM seeks to ground the response to child marriage in a social, cultural, political, African, feminist and human rights based analysis."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {approachPillars.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 50}>
              <span className="inline-block rounded-full border border-primary/25 bg-card px-4 py-2 text-sm font-medium">
                {p}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal>
            <img
              src={youthImg}
              alt="Young African women speaking at a public forum"
              className="w-full rounded-sm object-cover"
              width={1600}
              height={1008}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Youth & Survivors"
              title="Youth, Girls and Survivors"
              lead="PAAECM is committed to strengthening and supporting the voice of young people, especially adolescent girls and young women and survivors of violence, as frontline champions for ending child marriage."
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
