"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/** -----------------------------------------------------------
 *  Content (easy to edit without touching the layout)
 *  --------------------------------------------------------- */
const services = [
  {
    label: "Advisory",
    content:
      "We deliver consulting services and solutions to startups, scaleups, and established organizations, refining strategic direction and embedding robust controls for performance and growth.",
  },
  {
    label: "Technical Assistance",
    content:
      "Tailored technical assistance to strengthen institutions, build capacity, and enhance service delivery across Ghana and West Africa. Our support spans agencies, private sector actors, and development partners.",
  },
  {
    label: "Evaluation & MEL",
    content:
      "Trusted partner for high-quality project and program evaluation. We bring methodological rigor and actionable insights to strategic decision-making and impact measurement.",
  },
  {
    label: "Tech & Innovation",
    content:
      "Database development, secure record management, digital payments, analytics dashboards, and AI-assisted reporting—enabling real-time, evidence-based decisions for clients.",
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
      "End-of-grants evaluation, COVID-19 & SME windows, drafting World Bank Implementation Completion & Results Report (Ministry of Tourism).",
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

/** -----------------------------------------------------------
 *  Small helpers for smooth, consistent motion
 *  --------------------------------------------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

/** -----------------------------------------------------------
 *  Page
 *  --------------------------------------------------------- */
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* ===================== Hero ===================== */}
      <section className="relative overflow-hidden">
        {/* Soft gradient background blobs */}
        <div className="absolute inset-0 -z-10 bg-emerald-900" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-emerald-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-orange-500/25 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div {...fadeUp(0)}>
              {/* If you have /public/logo.png, this will show above the title */}
              <img
                src="/logo.png"
                alt="DevChangeHub Logo"
                className="mx-auto mb-6 h-16 w-16 opacity-95"
              />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Powering Development
              <br />
              <span className="text-orange-300">
                Through Evidence Across Africa
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.25)}
              className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50/90"
            >
              Helping governments, NGOs, and businesses make data-driven
              decisions. Faster research cycles. Clear dashboards. Actionable
              insights.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
              >
                Get in touch
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                Our services
              </Link>
            </motion.div>

            <motion.p
              {...fadeUp(0.55)}
              className="mt-14 text-sm text-emerald-50/80"
            >
              Trusted by teams working on growth, jobs, and inclusion
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===================== Impact ===================== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800">
            Our Impact
          </h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          >
            {[
              { k: "15+", v: "Countries" },
              { k: "120+", v: "Dashboards" },
              { k: "50+", v: "Partners" },
              { k: "1M+", v: "People Reached" },
            ].map((stat, i) => (
              <motion.div
                key={stat.v}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-3xl font-extrabold text-emerald-700">
                  {stat.k}
                </div>
                <div className="mt-1 text-gray-600">{stat.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== About ===================== */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">Who We Are</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-700">
            Development Change Hub (DCH) is a Ghana-incorporated, Africa-rooted
            consultancy that converts hard evidence into high-impact action.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mission",
                body:
                  "Partnering with organisations to generate reliable evidence and turn it into practical actions.",
              },
              {
                title: "Vision",
                body:
                  "A future where choices are guided by rigorous data, maximizing impact.",
              },
              {
                title: "Innovation",
                body:
                  "Digital tools embedded from field data to real-time analytics.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.05 * i)}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-gray-50 p-6 text-left shadow-sm ring-1 ring-black/5"
              >
                <div className="text-lg font-semibold text-emerald-700">
                  {item.title}
                </div>
                <div className="mt-2 text-gray-700">{item.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Services (Tabs) ===================== */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">Our Services</h2>

          {/* Tabs */}
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

          {/* Active tab content */}
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

      {/* ===================== Projects ===================== */}
      <section id="projects" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">
            Flagship Projects
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((proj, i) => (
              <motion.article
                key={proj.title}
                {...fadeUp(0.05 * i)}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-emerald-50 p-6 text-left shadow-sm ring-1 ring-emerald-900/10"
              >
                <h3 className="text-lg font-semibold text-emerald-900">
                  {proj.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-900/80">
                  {proj.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Blog Preview (simple card) ===================== */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">Latest from our blog</h2>
          <div className="mx-auto mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-semibold">
              Protecting Ghana’s Cocoa Children: Insights from an Endline
              Evaluation
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Read how DCH partnered with Fairtrade Africa to support safer
              communities and improve child protection outcomes in Ghana&apos;s
              cocoa sector…
            </p>
            <Link
              href="/blog"
              className="mt-3 inline-block font-semibold text-orange-600 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== Clients ===================== */}
      <section id="clients" className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-800">
            Clients & Partners
          </h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client}
                {...fadeUp(0.03 * i)}
                className="rounded-full bg-white px-5 py-2 font-semibold text-emerald-900 shadow-sm ring-1 ring-black/5 hover:bg-gray-50"
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== Contact ===================== */}
      <section id="contact" className="relative overflow-hidden bg-emerald-900 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold">Contact Us</h2>

          <div className="mx-auto mt-6 max-w-2xl rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
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

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600 transition"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Footer ===================== */}
      <footer className="bg-emerald-800 py-6 text-center text-white">
        © {new Date().getFullYear()} Development Change Hub (DCH). All rights
        reserved.
      </footer>
    </main>
  );
}
