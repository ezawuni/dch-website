import { GHANA_REGIONS, GHANA_VIEWBOX } from "@/lib/ghana-regions";

/** Outline-only map used as quiet background artwork (server-rendered). */
export default function GhanaOutline({ className }: { className?: string }) {
  return (
    <svg viewBox={GHANA_VIEWBOX} aria-hidden focusable="false" className={className}>
      {GHANA_REGIONS.map((r) => (
        <path key={r.id} d={r.d} fill="none" stroke="currentColor" strokeWidth={1} strokeLinejoin="round" />
      ))}
    </svg>
  );
}
