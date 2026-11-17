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

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = format(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = format(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
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
