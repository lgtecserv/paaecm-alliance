import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { org } from "@/content/site";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — PAAECM" },
      {
        name: "description",
        content:
          "PAAECM's vision of an accountable Africa free of child marriage, its mission of sustainable domestic solutions, and its institutional goal.",
      },
      { property: "og:title", content: "Vision & Mission — PAAECM" },
      {
        property: "og:description",
        content:
          "An Accountable Africa that is free of child marriage and other harmful practices.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Mission"
        title="Vision, Mission and Goal"
        lead="The institutional statements that guide the Alliance."
      />

      <Section>
        <SectionHeading eyebrow="Our Vision" title="Our Vision" />
        <Reveal className="mt-8">
          <blockquote className="border-l-4 border-accent pl-6">
            <p className="font-display text-2xl leading-snug sm:text-4xl">
              “An{" "}
              <span className="text-accent">Accountable</span> Africa that is
              free of child marriage and other harmful practices.”
            </p>
          </blockquote>
        </Reveal>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Our Mission" title="Our Mission" />
        <Reveal className="mt-8">
          <p className="max-w-4xl font-display text-xl leading-relaxed sm:text-3xl">
            “{org.mission}”
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Goal" title="Our Goal" />
        <Reveal className="mt-8">
          <p className="max-w-4xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            “{org.goal}”
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Accountability"
          title="Accountability at the Centre"
          lead="Accountability is a central element of PAAECM's identity and work."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "National commitments",
            "Regional commitments",
            "Global commitments",
            "Public policy",
            "Resources",
            "Implementation of solutions",
          ].map((item, i) => (
            <Reveal as="li" key={item} delay={i * 60}>
              <div className="h-full rounded-sm border border-border bg-card p-6 text-base font-medium">
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
