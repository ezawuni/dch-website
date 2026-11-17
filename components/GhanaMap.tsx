import { GHANA_REGIONS, GHANA_VIEWBOX } from "@/lib/ghana-regions";
import Reveal from "@/components/Reveal";
import MapHover, { MapLabel } from "@/components/MapHover";

const NAMES = Object.fromEntries(GHANA_REGIONS.map((r) => [r.id, r.name]));

/** Interactive map of Ghana's 16 regions. Geometry is server-rendered SVG. */
export default function GhanaMap() {
  return (
    <MapHover names={NAMES} className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
      <ul className="order-2 grid grid-cols-2 gap-x-4 gap-y-1 md:order-1" aria-label="Regions of Ghana">
        {GHANA_REGIONS.map((r) => (
          <li key={r.id}>
            <button
              type="button"
              data-region={r.id}
              className="group/r flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm text-muted transition-colors hover:text-ink data-[on]:bg-accent/15 data-[on]:text-ink"
            >
              <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-brand transition-colors group-data-[on]/r:bg-accent" />
              {r.name}
            </button>
          </li>
        ))}
      </ul>

      <Reveal className="order-1 md:order-2">
        <div className="relative mx-auto w-full max-w-[22rem]">
          <svg
            viewBox={GHANA_VIEWBOX}
            role="img"
            aria-label="Map of Ghana showing all 16 regions"
            className="h-auto w-full drop-shadow-[0_18px_30px_rgba(9,47,36,0.18)]"
          >
            {GHANA_REGIONS.map((r, i) => (
              <path
                key={r.id}
                d={r.d}
                data-region={r.id}
                className="region cursor-pointer fill-brand data-[on]:fill-accent"
                style={{ "--i": i } as React.CSSProperties}
                stroke="#fff"
                strokeWidth={1.4}
                strokeLinejoin="round"
              >
                <title>{r.name}</title>
              </path>
            ))}
          </svg>
          <MapLabel />
        </div>
      </Reveal>
    </MapHover>
  );
}
