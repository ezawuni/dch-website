import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";
import Pattern, { patternFor } from "@/components/Pattern";
import Reveal from "@/components/Reveal";

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
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep text-white sm:rounded-[2.25rem]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 100% at 95% 0%, rgba(232,116,42,0.25), transparent 62%), radial-gradient(45% 80% at 0% 100%, rgba(242,184,75,0.12), transparent 60%)",
            }}
          />
          <Pattern
            variant={patternFor(c.slug)}
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 opacity-60 [mask-image:linear-gradient(to_right,transparent,#000_70%)] md:block"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
            <Link href="/case-studies" className="text-sm text-white/75 transition-colors hover:text-white">
              ← All case studies
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{c.sector}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              {c.title}
            </h1>
          </div>
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

      <section className="bg-sage">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl font-semibold text-brand">More case studies</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {CASE_STUDIES.filter((o) => o.slug !== c.slug).map((o, i) => (
              <Reveal as="li" delay={i * 110} key={o.slug}>
                <Link
                  href={`/case-studies/${o.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10"
                >
                  <Pattern variant={patternFor(o.slug)} className="h-28 w-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{o.sector}</p>
                    <h3 className="font-display mt-2 text-xl font-semibold text-brand">{o.title}</h3>
                    <p className="mt-auto pt-4 text-sm text-muted">{o.client}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
