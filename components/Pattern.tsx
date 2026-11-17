/** Generative artwork for cards. Original SVG, no photos, brand colours only. */
export type PatternVariant = "bars" | "dots" | "arcs" | "waves";

const VARIANT_BY_SLUG: Record<string, PatternVariant> = {
  "world-bank-program": "bars",
  "eu-program": "dots",
  "unicef-initiative": "arcs",
  "fairtrade-cocoa-climate": "waves",
};

export function patternFor(slug: string): PatternVariant {
  return VARIANT_BY_SLUG[slug] ?? "dots";
}

const W = 400;
const H = 200;

function Bars() {
  const bars = Array.from({ length: 13 }, (_, i) => {
    const h = 34 + i * 10 + ((i * 7) % 4) * 12;
    return { x: 18 + i * 29, h, hot: i >= 10 };
  });
  return (
    <>
      <rect width={W} height={H} fill="var(--color-brand)" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={H - b.h}
          width={17}
          height={b.h}
          rx={3}
          fill={b.hot ? "var(--color-gold)" : "#fff"}
          opacity={b.hot ? 0.95 : 0.12 + i * 0.012}
        />
      ))}
      <path d="M18 150 L90 128 L160 138 L240 92 L320 70 L386 34" fill="none" stroke="var(--color-accent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Dots() {
  const dots: React.ReactNode[] = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 18; c++) {
      const dx = c - 12.5;
      const dy = r - 3.5;
      const rad = 1.4 + 6.2 * Math.exp(-(dx * dx + dy * dy) / 18);
      const hot = dx * dx + dy * dy < 3;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={14 + c * 22.5}
          cy={14 + r * 22}
          r={rad}
          fill={hot ? "var(--color-gold)" : "#fff"}
          opacity={hot ? 1 : 0.22}
        />
      );
    }
  }
  return (
    <>
      <rect width={W} height={H} fill="var(--color-brand-deep)" />
      {dots}
    </>
  );
}

function Arcs() {
  const radii = [34, 64, 94, 124, 154, 184, 214, 244];
  return (
    <>
      <rect width={W} height={H} fill="var(--color-brand)" />
      {radii.map((r, i) => (
        <circle
          key={r}
          cx={352}
          cy={206}
          r={r}
          fill="none"
          stroke={i === 2 ? "var(--color-gold)" : i === 5 ? "var(--color-accent)" : "#fff"}
          strokeWidth={i === 2 || i === 5 ? 3 : 1.5}
          opacity={i === 2 || i === 5 ? 0.95 : 0.16}
        />
      ))}
      <circle cx={352} cy={206} r={14} fill="var(--color-gold)" />
    </>
  );
}

function Waves() {
  const paths = Array.from({ length: 7 }, (_, i) => {
    const y = 36 + i * 22;
    const amp = 10 + i * 2.2;
    let d = `M-10 ${y}`;
    for (let x = 0; x <= 420; x += 20) {
      d += ` L${x} ${(y + Math.sin((x + i * 34) / 38) * amp).toFixed(1)}`;
    }
    return d;
  });
  return (
    <>
      <rect width={W} height={H} fill="var(--color-brand-deep)" />
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i === 3 ? "var(--color-gold)" : i === 5 ? "var(--color-accent)" : "#fff"}
          strokeWidth={i === 3 || i === 5 ? 2.8 : 1.6}
          opacity={i === 3 || i === 5 ? 0.95 : 0.17}
          strokeLinejoin="round"
        />
      ))}
    </>
  );
}

export default function Pattern({
  variant,
  className,
}: {
  variant: PatternVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
      className={className}
    >
      {variant === "bars" && <Bars />}
      {variant === "dots" && <Dots />}
      {variant === "arcs" && <Arcs />}
      {variant === "waves" && <Waves />}
    </svg>
  );
}
