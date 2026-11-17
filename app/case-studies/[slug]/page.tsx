import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  return {
    title: c ? c.title : "Case Study",
    description: c?.summary ?? "Case study",
  };
}

export default async function CaseStudyDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return notFound();

  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Link href="/case-studies" className="text-sm text-white/70 hover:text-white">
            ← All case studies
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{c.sector}</p>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            {c.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_16rem]">
        <article>
          <p className="text-xl leading-relaxed text-ink/90">{c.summary}</p>

          <h2 className="font-display mt-12 text-2xl font-semibold text-brand">Results</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {c.results.map((r) => (
              <li key={r} className="flex gap-4 py-4 leading-relaxed">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>

          {c.linkHref && (
            <p className="mt-8">
              <a
                href={c.linkHref}
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.linkLabel ?? "Open related resource"}
              </a>
            </p>
          )}
        </article>

        <aside className="h-fit rounded-2xl bg-paper p-6 ring-1 ring-line">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Client</dt>
              <dd className="mt-1 font-medium">{c.client}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Year</dt>
              <dd className="mt-1 font-medium">{c.year}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sector</dt>
              <dd className="mt-1 font-medium">{c.sector}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-6 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-ink hover:bg-[#f08a45]"
          >
            Discuss a similar project
          </Link>
        </aside>
      </div>
    </>
  );
}
