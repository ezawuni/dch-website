import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pattern, { patternFor } from "@/components/Pattern";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Evidence to action: selected projects and results.",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <PageHeader eyebrow="Our work" title="Case studies">
        A few examples of how we turn complex evidence into clear, practical actions.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {CASE_STUDIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-[13rem_1fr_auto] md:items-start md:gap-10"
              >
                <div className="text-sm text-muted">
                  <div className="mb-4 overflow-hidden rounded-xl ring-1 ring-line">
                    <Pattern variant={patternFor(c.slug)} className="h-24 w-full transition-transform duration-700 group-hover:scale-110 md:h-28" />
                  </div>
                  <p className="font-semibold text-accent-ink">{c.sector}</p>
                  <p className="mt-1">{c.year}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-brand group-hover:underline decoration-accent decoration-2 underline-offset-4">
                    {c.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{c.client}</p>
                  <p className="mt-3 line-clamp-3 max-w-2xl leading-relaxed text-ink/80">{c.summary}</p>
                </div>
                <span aria-hidden className="hidden text-2xl text-brand transition group-hover:translate-x-1 md:block">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
