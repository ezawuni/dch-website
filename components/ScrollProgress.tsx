"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (top / height) * 100 : 0;
      setWidth(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-[64px] h-0.5 bg-orange-500 z-30"
      style={{ width: `${width}%` }}
    />
  );
}
