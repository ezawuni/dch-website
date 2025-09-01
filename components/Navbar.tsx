"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/dashboards", label: "Dashboards" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  // Careers hidden for now per PRD
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b border-black/5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      style={{ height: "64px" }}
    >
      <nav className="mx-auto max-w-screen-xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight focus:outline-none focus-visible:ring rounded">
          DevChangeHub
        </Link>
        <ul className="flex items-center gap-5">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2 py-1 rounded focus:outline-none focus-visible:ring ${
                    active ? "text-emerald-700 dark:text-emerald-400" : "text-neutral-700 dark:text-neutral-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
