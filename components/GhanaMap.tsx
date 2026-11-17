"use client";

import { useState } from "react";
import { GHANA_REGIONS, GHANA_VIEWBOX } from "@/lib/ghana-regions";
import Reveal from "@/components/Reveal";

/** Outline-only version used as quiet background artwork. */
export function GhanaOutline({ className }: { className?: string }) {
  return (
    <svg viewBox={GHANA_VIEWBOX} aria-hidden focusable="false" className={className}>
      {GHANA_REGIONS.map((r) => (
        <path key={r.id} d={r.d} fill="none" stroke="currentColor" strokeWidth={1} strokeLinejoin="round" />
      ))}
    </svg>
  );
}

/** Interactive map: hover or focus a region (or its name) to highlight it. */
export default function GhanaMap() {
  const [active, setActive] = useState<string | null>(null);
  const current = GHANA_REGIONS.find((r) => r.id === active);

  return (
    <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
      <ul className="order-2 grid grid-cols-2 gap-x-4 gap-y-1 md:order-1" aria-label="Regions of Ghana">
        {GHANA_REGIONS.map((r) => (
          <li key={r.id}>
            <button
              type="button"
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(r.id)}
              onBlur={() => setActive(null)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm transition-colors ${
                active === r.id ? "bg-accent/15 text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                  active === r.id ? "bg-accent" : "bg-brand"
                }`}
              />
              {r.name}
            </button>
          </li>
        ))}
      </ul>

      <Reveal className="order-1 md:order-2">
        <div className="relative mx-auto w-full max-w-[22rem]">
          <svg viewBox={GHANA_VIEWBOX} role="img" aria-label="Map of Ghana showing all 16 regions" className="h-auto w-full drop-shadow-[0_18px_30px_rgba(9,47,36,0.18)]">
            {GHANA_REGIONS.map((r, i) => (
              <path
                key={r.id}
                d={r.d}
                className="region cursor-pointer"
                style={{ "--i": i } as React.CSSProperties}
                fill={active === r.id ? "var(--color-accent)" : "var(--color-brand)"}
                stroke="#fff"
                strokeWidth={1.4}
                strokeLinejoin="round"
                onMouseEnter={() => setActive(r.id)}
                onMouseLeave={() => setActive(null)}
              >
                <title>{r.name}</title>
              </path>
            ))}
          </svg>
          <p
            aria-live="polite"
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white shadow-lg"
          >
            {current ? current.name : "All 16 regions"}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
