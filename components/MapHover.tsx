"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const ActiveRegion = createContext<string | null>(null);

/**
 * Highlights whichever [data-region] element is hovered or focused, plus every
 * other element with the same id (the map path and its name in the list).
 * Receives only region names, so the map geometry never ships as JavaScript.
 */
export default function MapHover({
  names,
  className,
  children,
}: {
  names: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    ref.current?.querySelectorAll<HTMLElement | SVGElement>("[data-region]").forEach((el) => {
      if (el.dataset.region === active) el.setAttribute("data-on", "");
      else el.removeAttribute("data-on");
    });
  }, [active]);

  const pick = (target: EventTarget | null) =>
    (target as Element | null)?.closest?.("[data-region]")?.getAttribute("data-region") ?? null;

  return (
    <ActiveRegion.Provider value={active ? names[active] : null}>
      <div
        ref={ref}
        className={className}
        onMouseOver={(e) => setActive(pick(e.target))}
        onMouseLeave={() => setActive(null)}
        onFocus={(e) => setActive(pick(e.target))}
        onBlur={() => setActive(null)}
      >
        {children}
      </div>
    </ActiveRegion.Provider>
  );
}

/** Pill under the map naming the highlighted region. */
export function MapLabel() {
  const name = useContext(ActiveRegion);
  return (
    <p
      aria-live="polite"
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white shadow-lg"
    >
      {name ?? "All 16 regions"}
    </p>
  );
}
