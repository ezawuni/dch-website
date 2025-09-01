"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { motion } from "framer-motion";

/* -------------------- Trusted-by (placeholder logos + proof links) -------------------- */
type Logo = { name: string; href: string; title?: string };
const TRUST_LOGOS: Logo[] = [
  { name: "World Bank", href: "/case-studies/world-bank-program" },
  { name: "European Union", href: "/case-studies/eu-program" },
  { name: "UNICEF", href: "/case-studies/unicef-initiative" },
  { name: "AfDB", href: "/case-studies/afdb-project" },
];

function PlaceholderMonochrome({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 200 60" role="img" aria-label={label} className="h-10 w-auto">
      <rect width="200" height="60" rx="8" className="fill-neutral-400" />
      <text x="100" y="36" textAnchor="middle" className="fill-white" style={{ font: "bold 20px system-ui" }}>
        {label}
      </text>
    </svg>
  );
}

/* -------------------- Editable content -------------------- */
const VALUE_PROPS = [
  {
    title: "Evidence to Action",
    body: "We turn complex data into decisions—clear insights, short cycles, measurable results.",
  },
  {
    title: "Africa-Focused",
    body: "Deep understanding of Ghana and West Africa institutions, markets, and delivery realities.",
  },
  {
    title: "Secure & Transparent",
    body: "Privacy by design, least-privilege access, and stakeholder-friendly reporting.",
  },
];

const SERVICES = [
  {
    label: "Advisory",
    blurb:
      "Consulting for startups, scaleups, and established organizations—clarifying strategy and installing controls for performance and growth.",
  },
  {
    label: "Technical Assistance",
    blurb:
      "Capacity building and systems support for agencies, private actors, and development partners across Ghana and West Africa.",
  },
  {
    label: "Evaluation & MEL",
    blurb:
      "Independent evaluations with rigorous methods and practical recommendations for course-correction and impact.",
  },
  {
    label: "Tech & Innovation",
    blurb:
      "Dashboards, secure databases, digital payments, and AI-assisted reporting—so leaders act with real-time evidence.",
  },
];

const PROJECTS = [
  {
    title: "Ghana Jobs & Skills Project",
    description:
      "Nationwide tracer surveys and mixed-methods evaluation of a US $200m skills and jobs programme (World Bank).",
  },
  {
    title: "SME Grants Evaluation",
    description:
      "End-of-grants evaluation (COVID-19 & SME windows) and ICR drafting for the Ministry of Tourism.",
  },
  {
    title: "UNICEF Sahel Survey",
    description:
      "Multi-round household survey across nine high-risk districts; emergency readiness analytics (UNICEF Ghana).",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "DCH delivered a decision-ready evaluation under tight timelines. Clear, rigorous, and practical.",
    author: "Program Lead, Multilateral Partner",
  },
  {
    quote:
      "Working with DCH gave us more than just data. They helped us make sense of complex survey results, connected the dots for policy, and gave us a clear roadmap we could present to decision-makers with confidence.",
    author: "PPME Director, Government Agency",
  },
  {
    quote:
      "We trusted DCH with an assignment that required both discretion and deep expertise. They handled sensitive issues with professionalism and still delivered a thorough, actionable report.” — Director, public agency.",
    author: "Chief Director, Government Agency",
  },
  {
    quote:
      "What stood out was their balance of technical rigor and human approach. The DCH team engaged communities respectfully, while ensuring the data was robust enough to withstand donor scrutiny.",
    author: "Country Manager, International NGO",
  },
  {
    quote:
      "The health and safety and gender mainstreaming guidance wasn’t just box-ticking. It was practical, context-sensitive, and helped us change how we approach program design.",
    author: "COperations Lead, agribusiness program (West Africa)",
  },
];

/* -------------------- Motion helpers -------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  },
  viewport: { once: true, margin: "-80px" },
});

/* -------------------- useOnScreen (type-safe) -------------------- */
function useOnScreen(ref: RefObject<Element | null>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

/* ========================================================= */

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tIndex, setTIndex] = useState(0);

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* =================== HERO =================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800">
        {/* soft orbs (safe classes only) */}
        <div className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.img
            src="/logo.png"
            alt="DevChangeHub logo"
            className="mx-auto mb-6 h-16 w-16"
            {...fadeUp(0)}
          />
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            {...fadeUp(0.1)}
          >
            Powering Development
            <br />
            <span className="text-orange-300">Through Evidence Across Africa</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50/90"
            {...fadeUp(0.2)}
          >
            We help governments, donors, and businesses convert data into
            decisions—fast, practical, and secure.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            {...fadeUp(0.3)}
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition"
            >
              Our services
            </a>
          </motion.div>
        </div>
      </section>

      {/* =============== TRUSTED BY (logos → proof links) =============== */}
      <section aria-labelledby="trusted-title" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="trusted-title" className="sr-only">Trusted by</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {TRUST_LOGOS.map((logo, i) => (
            <a
              key={logo.name}
              href={logo.href}
              className="group grayscale hover:grayscale-0 focus:grayscale-0 transition rounded outline-none focus-visible:ring p-3 flex items-center justify-center bg-white"
              title={logo.title ?? `See proof: ${logo.name}`}
            >
              <PlaceholderMonochrome label={logo.name} />
            </a>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-neutral-600">
          Each logo links to a proof page (case note or case study).
        </p>
      </section>

      {/* =============== VALUE PROPS =============== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <h2 className="text-3xl font-bold text-emerald-800">Why partners choose DCH</h2>
            <p className="mt-3 text-gray-700">Simple outputs. Clear next steps. Measurable progress.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((vp, i) => (
              <motion.div
                key={vp.title}
                {...fadeUp(0.05 * i)}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-gray-50 p-6 text-left shadow-sm ring-1 ring-black/5"
              >
                <div className="text-lg font-semibold text-emerald-700">{vp.title}</div>
                <p className="mt-2 text-gray-700">{vp.body}</p>
                <div className="mt-4 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== IMPACT (SSR-safe numbers) ================== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800">Our Impact</h2>
          {/* Server-rendered numbers for SEO and non-JS users */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <div className="text-3xl font-extrabold text-emerald-700">10+</div>
              <div className="mt-1 text-gray-600">Countries</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <div className="text-3xl font-extrabold text-emerald-700">20+</div>
              <div className="mt-1 text-gray-600">Dashboards</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <div className="text-3xl font-extrabold text-emerald-700">30+</div>
              <div className="mt-1 text-gray-600">Partners</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <div className="text-3xl font-extrabold text-emerald-700">100,000+</div>
              <div className="mt-1 text-gray-600">People Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== PROJECTS (carousel) ================== */}
      <section id="projects" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800">Flagship Projects</h2>

          {/* Scroll-snap carousel (keyboard & touch) */}
          <div className="mt-8 overflow-x-auto scroll-smooth">
            <div className="flex snap-x snap-mandatory gap-4 pr-4">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="snap-start shrink-0 basis-[87%] sm:basis-[48%] md:basis-[32%] rounded-2xl bg-emerald-50 p-6 text-left shadow-sm ring-1 ring-emerald-900/10"
                >
                  <h3 className="text-lg font-semibold text-emerald-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-emerald-900/80">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== SERVICES (tabs) ================== */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">Our Services</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SERVICES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActiveTab(i)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeTab === i
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-black/10 bg-white text-emerald-800 hover:bg-gray-50"
                }`}
                aria-pressed={activeTab === i}
              >
                {s.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5"
          >
            <p className="text-gray-700">{SERVICES[activeTab].blurb}</p>
          </motion.div>
        </div>
      </section>

      {/* ================== TESTIMONIALS ================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">What partners say</h2>
          <div className="mt-8 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-lg text-gray-800">“{TESTIMONIALS[tIndex].quote}”</p>
            <p className="mt-4 font-semibold text-emerald-800">— {TESTIMONIALS[tIndex].author}</p>
            <div className="mt-6 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setTIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    tIndex === i ? "bg-emerald-700" : "bg-emerald-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== FAQ ================== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800">FAQs</h2>
        <div className="mt-8 space-y-3">
            {[
              {
                q: "Where do you work?",
                a: "We are Ghana-incorporated and work across West Africa with public and private clients.",
              },
              {
                q: "What makes DCH different?",
                a: "We translate evidence into concrete next steps—short cycles, clear outputs, and shared ownership with client teams.",
              },
              {
                q: "How do you handle data security?",
                a: "Least-privilege access, secure storage, and clear data retention aligned to client requirements.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 open:ring-emerald-200"
              >
                <summary className="cursor-pointer select-none text-lg font-semibold text-emerald-900">
                  {f.q}
                </summary>
                <p className="mt-3 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================== CTA ================== */}
      <section id="contact" className="bg-emerald-900 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Let’s work together</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90">
            Tell us your goal. We’ll propose a simple, phased plan and get you a fast win in weeks—not months.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <div>12 Kenniffe Close, Tema Community 22, Ghana</div>
            <div className="mt-1">
              Phone: <a className="underline" href="tel:+233203817101">+233 (0)203 817 101</a>
            </div>
            <div className="mt-1">
              Email: <a className="underline" href="mailto:devchangehub@gmail.com">devchangehub@gmail.com</a>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* ================== FOOTER ================== */}
      <footer className="bg-emerald-800 py-6 text-center text-white">
        © {new Date().getFullYear()} Development Change Hub (DCH). All rights reserved.
      </footer>
    </main>
  );
}
