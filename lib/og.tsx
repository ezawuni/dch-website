import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

/** Fetches a Google font as TTF for the image renderer; null if offline. */
async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const [serif, sans, sansBold] = await Promise.all([
    loadFont("Fraunces", 600),
    loadFont("Geist", 500),
    loadFont("Geist", 600),
  ]);
  const fonts = [
    serif && { name: "Fraunces", data: serif, weight: 600 as const, style: "normal" as const },
    sans && { name: "Geist", data: sans, weight: 500 as const, style: "normal" as const },
    sansBold && { name: "Geist", data: sansBold, weight: 600 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 500 | 600; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#092f24",
          backgroundImage:
            "radial-gradient(circle at 92% 0%, rgba(232,116,42,0.5) 0%, rgba(232,116,42,0) 45%), radial-gradient(circle at 0% 100%, rgba(242,184,75,0.25) 0%, rgba(242,184,75,0) 40%)",
          color: "#fff",
          fontFamily: sans ? "Geist" : undefined,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", background: "#fff", borderRadius: 14, padding: "10px 14px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={88} height={63} alt="" />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5, fontFamily: serif ? "Fraunces" : undefined }}>DevChangeHub</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#e8742a",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: title.length > 60 ? 58 : 72,
              lineHeight: 1.05,
              fontFamily: serif ? "Fraunces" : undefined,
              fontWeight: 600,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "rgba(255,255,255,0.75)" }}>
          <div style={{ width: 44, height: 5, background: "#f2b84b", borderRadius: 3 }} />
          devchangehub.com
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: fonts.length ? fonts : undefined,
    }
  );
}
