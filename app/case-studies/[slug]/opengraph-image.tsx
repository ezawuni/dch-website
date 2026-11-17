import { OG_SIZE, renderOg } from "@/lib/og";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";

export const alt = "DevChangeHub case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  return renderOg({
    eyebrow: c ? `Case study · ${c.sector}` : "Case study",
    title: c?.title ?? "DevChangeHub case study",
  });
}
