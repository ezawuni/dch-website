"use client";

import { useEffect, useRef } from "react";

/** Counts a figure like "100,000+" up from zero once it scrolls into view. */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const withCommas = match[1].includes(",");
    const format = (n: number) => (withCommas ? n.toLocaleString("en-US") : String(n)) + suffix;

    const duration = 1500;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        // Always read the same clock and clamp to [0, 1], so a drifting or
        // virtual clock (crawlers, odd browsers) can never show a wrong number.
        const tick = () => {
          const p = Math.min(1, Math.max(0, (performance.now() - start) / duration));
          el.textContent = format(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = format(0);
        requestAnimationFrame(tick);
        // Guarantee the final figure even if animation frames are throttled.
        timer = window.setTimeout(() => {
          el.textContent = value;
        }, duration + 250);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, [value]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden>
        {value}
      </span>
    </>
  );
}
