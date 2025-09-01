"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Status = "Live" | "Beta" | "Private" | "Coming Soon";

type Dash = {
  title: string;
  description: string;
  url: string;            // external or internal link
  category: string;       // e.g., "SMEs", "Health", etc.
  status: Status;
};

const DASHBOARDS: Dash[] = [
  {
    title: "Ghana Jobs & Skills – Tracer Survey",
    description:
      "KPIs, employment outcomes, and training performance for the national GJS program.",
    url: "https://example.com/gjs-dashboard", // put your real link here
    category: "Jobs & Skills",
    status: "Live",
  },
  {
    title: "SME Grants – Results Tracker",
    description:
      "Grant disbursement progress, firm characteristics, and before/after outcomes.",
    url: "https://example.com/sme-grants",
    category: "SMEs",
    status: "Beta",
  },
  {
    title: "Child Protection – Cocoa Sector",
    description:
      "Community risk index, case referrals, and program coverage in cocoa-growing areas.",
    url: "https://example.com/cocoa-protection",
    category: "Social Protection",
    status: "Private",
  },
  {
    title: "Emergency Readiness – Sahel Districts",
    description:
      "Household vulnerability, service access, and readiness metrics across 9 districts.",
    url: "#",
    category: "Humanitarian",
    status: "Coming Soon",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
});

/** Small UI badge for status */
function StatusBadge({ value }: { value: Status }) {
  const styles: Record<Status, string> = {
    "Live": "bg-emerald-100 text-emerald-800 ring-emerald-200",
    "Beta": "bg-amber-100 text-amber-800 ring-amber-200",
    "Private": "bg-gray-100 text-gray-800 ring-gray-200",
    "Coming Soon": "bg-blue-100 text-blue-800 ring-blue-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${styles[value]}`}>
      {value}
    </span>
  );
}

export default function DashboardsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(DASHBOARDS.map((d) => d.category)))],
    []
  );

  const filtered = useMemo(() => {
    return DASHBOARDS.filter((d) => {
      const matchesCat = cat === "All" || d.category === cat;
      const matchesQuery =
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.description.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [cat, query]);

  return (
    <main className="bg-white text-gray-900">
      {/* Header / Hero */}
      <section className="border-b border-black/5 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <motion.h1
            {...fadeUp(0)}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Dashboards
          </motion.h1>
          <motion.p
            {...fadeUp(0.05)}
            className="mt-3 max-w-2xl text-emerald-50/90"
          >
            Evidence you can act on—clean visuals, key indicators, and
            share-ready insights. Use the search and filters to find what you
            need.
          </motion.p>

          {/* Search + Filters */}
          <motion.div
            {...fadeUp(0.1)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <input
              aria-label="Search dashboards"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dashboards (e.g., jobs, SME, cocoa)…"
              className="w-full max-w-xl rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-emerald-100/70 focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                    cat === c
                      ? "border-white bg-white text-emerald-900"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* List */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-black/5 p-8 text-center">
              <p className="text-gray-700">
                No dashboards match your search yet.
              </p>
              <p className="mt-2 text-gray-600">
                Tell us what you need and we’ll set it up.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center rounded-xl bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600 transition"
              >
                Request a dashboard
              </a>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d, i) => (
                <motion.article
                  key={d.title}
                  {...fadeUp(0.02 * i)}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-emerald-900">
                      {d.title}
                    </h3>
                    <StatusBadge value={d.status} />
                  </div>

                  <p className="mt-2 text-sm text-gray-700">{d.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                      {d.category}
                    </span>

                    {d.status === "Live" || d.status === "Beta" ? (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition"
                      >
                        Open dashboard
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500">
                        {d.status}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

