import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-white px-2 py-1"><Image src="/logo.png" alt="" width={40} height={28} className="h-6 w-auto" /></span>
            <span className="font-display text-xl font-semibold">DevChangeHub</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Evidence, data and technical support for development work across Ghana and West Africa.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/case-studies">Case studies</Link></li>
            <li><Link className="hover:underline" href="/team">Team</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>12 Kennife Close, Tema Community 22, Ghana</p>
            <p><a className="hover:underline" href="tel:+233203817101">+233 (0)203 817 101</a></p>
            <p><a className="hover:underline" href="mailto:devchangehub@gmail.com">devchangehub@gmail.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50 sm:px-8">
          © {new Date().getFullYear()} Development Change Hub (DCH). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
