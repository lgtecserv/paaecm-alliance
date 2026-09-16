import { countries } from "@/content/site";
import { Reveal } from "./Reveal";

/**
 * Stylised map of Africa with the countries where PAAECM has representation.
 * Coordinates are approximate label positions, not office locations.
 */
const points: Record<string, { x: number; y: number }> = {
  Ghana: { x: 30, y: 47 },
  Nigeria: { x: 40, y: 47 },
  Cameroon: { x: 47, y: 52 },
  Ethiopia: { x: 71, y: 47 },
  Tanzania: { x: 66, y: 65 },
  Zambia: { x: 57, y: 72 },
  Malawi: { x: 65, y: 73 },
  Mozambique: { x: 69, y: 78 },
  Zimbabwe: { x: 60, y: 79 },
  "South Africa": { x: 55, y: 90 },
};

export function CountryPresence() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <Reveal>
        <div
          className="relative aspect-4/5 w-full max-w-md rounded-sm bg-secondary"
          role="img"
          aria-label={`Map of Africa highlighting countries with PAAECM representation: ${countries.join(", ")}.`}
        >
          <svg
            viewBox="0 0 100 125"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M30 8 L52 6 L64 12 L70 22 L78 30 L80 42 L76 52 L72 60 L70 72 L64 84 L58 96 L52 108 L46 112 L42 104 L38 92 L30 82 L24 70 L20 56 L18 44 L20 32 L24 18 Z"
              className="fill-primary/10 stroke-primary/40"
              strokeWidth="0.6"
            />
            {Object.entries(points).map(([name, p], i) => (
              <g key={name}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="2.6"
                  className="fill-accent/30"
                  style={{
                    animation: `paaecm-pulse 3.2s ease-in-out ${i * 0.25}s infinite`,
                  }}
                />
                <circle cx={p.x} cy={p.y} r="1.2" className="fill-accent" />
              </g>
            ))}
          </svg>
        </div>
      </Reveal>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
        {countries.map((c, i) => (
          <Reveal as="li" key={c} delay={i * 40}>
            <span className="flex items-center gap-2.5 border-b border-border py-2 text-sm font-medium">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {c}
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
