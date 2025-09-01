// lib/case-studies.ts
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  sector: string;
  summary: string;         // 80–120 words in the future; short for now
  results: string[];       // 3–5 bullets
  linkLabel?: string;      // optional external link label
  linkHref?: string;       // optional external link
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "world-bank-program",
    title: "Ghana Jobs & Skills Program — Tracer & Evaluation",
    client: "World Bank / Government of Ghana",
    year: "2024",
    sector: "Jobs & Skills",
    summary:
      "Nationwide tracer surveys and mixed-methods evaluation informing implementation decisions and the ICR. Rapid cycles turned complex evidence into clear actions for program managers and government counterparts.",
    results: [
      "Designed/fielded tracer surveys with quality controls",
      "Merged admin + survey data for faster insights",
      "Delivered decision-ready briefs for management",
      "Supported ICR drafting with verified evidence",
    ],
  },
  {
    slug: "eu-program",
    title: "SME Competitiveness & Grants — Learning Review",
    client: "European Union (example)",
    year: "2023",
    sector: "Private Sector",
    summary:
      "Independent review of an SME support window. Mapped pipeline, grant performance, and operational bottlenecks; produced a practical improvement plan aligned with partner expectations.",
    results: [
      "Clear pipeline health view (by sector/region)",
      "Actionable process fixes for next grant round",
      "Monitoring indicators aligned to outcomes",
    ],
  },
  {
    slug: "unicef-initiative",
    title: "UNICEF Sahel Readiness — Household Survey",
    client: "UNICEF Ghana",
    year: "2023",
    sector: "Social Protection",
    summary:
      "Multi-round household survey in high-risk districts to support emergency readiness and targeting. Built simple dashboards and briefs for fast decisions.",
    results: [
      "Sampling + field protocols documented",
      "Rapid-release briefs by district",
      "Stakeholder-friendly dashboard for updates",
    ],
  },
  {
    slug: "afdb-project",
    title: "Market Systems & Analytics — Scoping",
    client: "AfDB (example)",
    year: "2022",
    sector: "Markets & Trade",
    summary:
      "Scoping analysis for market systems support with a focus on data flows, private investment pathways, and institutional readiness.",
    results: [
      "Prioritized interventions by feasibility",
      "Roadmap linking data → action",
      "Partner coordination notes prepared",
    ],
  },
];

// Helpers
export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
