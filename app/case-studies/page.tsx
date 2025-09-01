// app/case-studies/page.tsx
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies — DevChangeHub",
  description: "Evidence to action: selected projects and results.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-emerald-800">Case Studies</h1>
      <p className="mt-2 text-neutral-700">
        A few examples of how we turn complex evidence into clear, practical actions.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md focus-visible:ring-2"
          >
            <h2 className="text-lg font-semibold text-emerald-900">{c.title}</h2>
            <p className="mt-2 text-sm text-neutral-700 line-clamp-4">{c.summary}</p>
            <div className="mt-4 text-xs text-neutral-600">
              {c.client} • {c.sector} • {c.year}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
