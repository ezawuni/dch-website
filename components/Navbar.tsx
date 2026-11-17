"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={40} height={28} className="h-7 w-auto" priority />
          <span className="font-display text-xl font-semibold text-brand">DevChangeHub</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-brand ${
                    active ? "text-brand underline decoration-accent decoration-2 underline-offset-8" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              Work with us
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-5 pb-6 pt-2 md:hidden">
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link href={item.href} className="block py-4 text-lg font-medium text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-5 block rounded-full bg-brand py-3 text-center font-semibold text-white"
          >
            Work with us
          </Link>
        </div>
      )}
    </header>
  );
}
