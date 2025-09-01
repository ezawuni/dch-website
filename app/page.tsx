"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* -----------------------------
   Editable content (easy tweaks)
------------------------------ */
const valueProps = [
  {
    title: "Evidence to Action",
    body:
      "We turn complex data into decisions. Clear insights, short cycles, measurable results.",
  },
  {
    title: "Africa-Focused",
    body:
      "Deep understanding of Ghana and West Africa institutions, markets, and delivery realities.",
  },
  {
    title: "Secure & Transparent",
    body:
      "Strong data governance, privacy by design, and stakeholder-friendly reporting.",
  },
];

const services = [
  {
    label: "Advisory",
    content:
      "Consulting for startups, scaleups, and established organizations—clarifying strategy and installing controls for performance and growth.",
  },
  {
    label: "Technical Assistance",
    content:
      "Capacity building and systems support for agencies, private actors, and development partners across Ghana and West Africa.",
  },
  {
    label: "Evaluation & MEL",
    content:
      "Independent evaluations with rigorous methods and practical recommendations for course-correction and impact.",
  },
  {
    label: "Tech & Innovation",
    content:
      "Dashboards, secure databases, digital payments, and AI-assisted reporting—so leaders act with real-time evidence.",
  },
];

const projects = [
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

const clients = [
  "World Bank",
  "UNICEF",
  "USAID",
  "GIZ",
  "Mastercard Foundation",
  "EU",
  "British Council",
];

const testimonials = [
  {
    quote:
      "DCH delivered a clear, decision-ready evaluation under tight timelines. Their data work and communication were excellent.",
    author: "Program Lead, Multilateral Partner",
  },
  {
    quote:
      "The dashboards helped us track delivery weekly and spot issues early. Practical and reliable.",
    author: "Director, Government Agency",
  },
  {
    quote:
      "They combine rigor with empathy for real-world constraints. A rare, valuable mix.",
    author: "Country Manager, International NGO",
  },
];

const faqs = [
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
    a: "We use least-privilege access, secure storage, and clear data retention rules aligned to client requirements.",
  },
];

/* ------------ helpers (motion) ----------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
  viewport: { once: true, margin: "-80px" },
});
const stagger = { whileInView: { transition: { staggerChildren: 0.08 } }, viewport: { once: true } };

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tIndex, setTIndex] = useState(0);

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* =================== HERO =================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800">
        {/* soft orbs */}
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
            We help governments, donors, and businesses convert data into decisions —
            fast, practical, and secure.
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

          {/* logos/clients strip */}
          <motion.div className="mt-14" {...fadeUp(0.35)}>
            <p className="text-sm text-emerald-50/80 mb-4">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clients.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white ring-1 ring-white/15"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============== VALUE PROPS =============== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <h2 className="text-3xl font-bold text-emerald-800">Why partners choose DCH</h2>
            <p className="mt-3 text-gray-700">
              Simple outputs. Clear next steps. Measurable progress.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
          >
            {valueProps.map((vp, i) => (
              <motion.div
                key={vp.title}
                {...fadeUp(0.05 * i)}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-gray-50 p-6 text-left shadow-sm ring-1 ring-black/5"
              >
                <div className="text-lg font-semibold text-emerald-700">{vp.title}</div>
                <p className="mt-2 text-gray-700">{vp.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================== IMPACT STATS ================== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800">Our Impact</h2>
          <motion.div
            className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              { k: "15+", v: "Countries" },
              { k: "120+", v: "Dashboards" },
              { k: "50+", v: "Partners" },
              { k: "1M+", v: "People Reached" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                {...fadeUp(0.05 * i)}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-3xl font-extrabold text-emerald-700">{s.k}</div>
                <div className="mt-1 text-gray-600">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================== PROJECTS ================== */}
      <section id="projects" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">Flagship Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp(0.05 * i)}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-emerald-50 p-6 text-left shadow-sm ring-1 ring-emerald-900/10"
              >
                <h3 className="text-lg font-semibold text-emerald-900">{p.title}</h3>
                <p className="mt-2 text-sm text-emerald-900/80">{p.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================== SERVICES (TABS) ================== */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">Our Services</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {services.map((s, i) => (
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
            <p className="text-gray-700">{services[activeTab].content}</p>
          </motion.div>
        </div>
      </section>

      {/* ================== TESTIMONIALS ================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">What partners say</h2>

          <div className="mt-8 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-lg text-gray-800">“{testimonials[tIndex].quote}”</p>
            <p className="mt-4 font-semibold text-emerald-800">
              — {testimonials[tIndex].author}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
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
            {faqs.map((f) => (
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
            Tell us your goal. We’ll propose a simple, phased plan and get you a
            fast win in weeks—not months.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <div>12 Kenniffe Close, Tema Community 22, Ghana</div>
            <div className="mt-1">
              Phone:{" "}
              <a className="underline" href="tel:+233203817101">
                +233 (0)203 817 101
              </a>
            </div>
            <div className="mt-1">
              Email:{" "}
              <a className="underline" href="mailto:devchangehub@gmail.com">
                devchangehub@gmail.com
              </a>
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
