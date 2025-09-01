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
    slug: "fairtrade-cocoa-climate",
    title: "Ghana Cocoa and Climate Change Project — Baseline Study",
    client: "Fairtrade Africa (Dignity for All Impact Programme)",
    year: "2018–2021",
    sector: "Climate & Agriculture",
    summary:
      "This baseline study was part of the Finnish-funded Fairtrade Africa 'Dignity for All' (D4A) Impact Programme (2018–2021), implemented across Ghana, Ethiopia, Malawi, and South Africa. In Ghana, the focus was on cocoa-producing households and their resilience to climate change impacts. The D4A Programme aimed to build resilient agro-based trade systems and ensure sustainable livelihoods through rights-based approaches and empowerment, while tracking change in producer organizations, supply chains, consumer behavior, and civil society action.",
    results: [
      "Assessed resilience of cocoa-producing households to climate change",
      "Grounded in Fairtrade Theory of Change and rights-based approaches",
      "Tracked change in producer organizations, supply chains, consumers, and civil society",
      "Highlighted cross-cutting issues: gender equality, vulnerable groups, and environmental sustainability",
    ],
  },
];

// Helpers
export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
