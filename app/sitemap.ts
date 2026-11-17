import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

const BASE = "https://www.devchangehub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/case-studies", "/team", "/contact"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));
  const studies = CASE_STUDIES.map((c) => ({
    url: `${BASE}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));
  return [...pages, ...studies];
}
