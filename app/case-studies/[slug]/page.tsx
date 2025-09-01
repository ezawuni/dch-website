// app/case-studies/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "../../../lib/case-studies";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const c = getCaseStudyBySlug(params.slug);
  return {
    title: c ? `${c.title} — Case Study — DevChangeHub` : "Case Study — DevChangeHub",
    description: c?.summary ?? "Case study",
  };
}

export default function CaseStudyDetail({ params }: Props) {
  const c = getCaseStudyBySlug(params.slug);
  if (!c) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/case-studies" className="text-sm text-emerald-700 hover:underline">
        ← All case studies
      </Link>

      <h1 className="mt-3 text-3xl font-bold text-emerald-900">{c.title}</h1>
      <div className="mt-1 text-sm text-neutral-600">
        {c.client} • {c.sector} • {c.year}
      </div>

      <p className="mt-6 text-neutral-800">{c.summary}</p>

      <h2 className="mt-8 text-xl font-semibold text-emerald-800">Results</h2>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-800">
        {c.results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      {c.linkHref && (
        <p className="mt-6">
          <a
            href={c.linkHref}
            className="inline-flex items-center rounded-xl bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800 focus-visible:ring"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.linkLabel ?? "Open related resource"}
          </a>
        </p>
      )}
    </main>
  );
}
