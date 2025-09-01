// app/case-studies/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { use } from "react";
import { CASE_STUDIES, getCaseStudyBySlug } from "../../../lib/case-studies";

// Only build the slugs we provide
export const dynamicParams = false;

// SSG: return a plain array of { slug }
export function generateStaticParams(): { slug: string }[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

// Next 15: params is a Promise — unwrap it with await
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  return {
    title: c ? `${c.title} — Case Study — DevChangeHub` : "Case Study — DevChangeHub",
    description: c?.summary ?? "Case study",
  };
}

// Page component: also receives params as a Promise — unwrap with React.use()
export default function CaseStudyDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = use(params);
  const c = getCaseStudyBySlug(slug);
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
