import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "DevChangeHub: evidence and data consultancy in Ghana";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Evidence and data consultancy · Ghana",
    title: "Powering development through evidence across Africa.",
  });
}
