import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the evaluation, gender and inclusion, and development planning experts behind DevChangeHub.",
};

export default function Team() {
  const members = [
    {
      name: "Maame Efua Brameah Hagan (MSc. NEBOSH OHS Certified)",
      title: "Partner / Health & Safety, Gender & Inclusion Expert",
      bio: "Maame Efua Brameah Hagan brings a decade of experience in gender, inclusion, and occupational health and safety (OHS) to DCH. She is recognized for her leadership in mainstreaming gender and equity across environment, quality infrastructure, tourism, entrepreneurship, public health, and social development projects. Efua has delivered high-impact work for organizations such as the Ghana Standards Authority, UNICEF, World Bank, European Union, and Fairtrade Africa. She is a NEBOSH-certified OHS professional and holds an MSc in Environment & Public Health, with a strong record in capacity building, community engagement, and the development of inclusive workplace policies."
    },
    {
      name: "Robert Kolbila, PhD",
      title: "Project Manager/Team Lead – Evaluation & ICR Design, Implementation and Supervision",
      bio: "Dr. Robert Kolbila is an applied social scientist, evaluation consultant, and certified project manager with 15+ years’ experience across Africa and the US. He specializes in the design and management of large-scale monitoring, evaluation, and research projects in areas such as youth employment, social protection, agriculture, health, and private sector development. Robert is recognized for his ability to lead complex, multi-country research teams, advise on digital data and results systems, and deliver evidence-based insights to donors including the World Bank, UNICEF, USAID, Fairtrade Africa, and more. He holds a PhD in Sociology (Social Demography & Population Studies), MPhil in Development Studies, and is highly published and awarded for his work in social innovation and research."
    },
    {
      name: "Alfred Dongzagla, PhD",
      title: "Sector-Specific and Institutional Development Expert",
      bio: "Dr. Alfred Dongzagla is a lecturer and development planning specialist with over a decade of experience in program evaluation, institutional reform, and investment climate analysis. He holds a PhD in Geography (University of Nottingham, UK) and has led and supported research and technical assistance projects for organizations such as UNICEF, GIZ, Catholic Relief Services, CARE International, and the Civil Society Platform on SDGs. Alfred brings a robust background in GIS, mixed-methods research, and strategic analysis across sectors including MSMEs, tourism, social protection, and education, and is recognized for delivering practical, evidence-based solutions to strengthen systems and attract private investment in Ghana."
    },
  ];
  const initials = (name: string) =>
    name
      .replace(/\(.*?\)/g, "")
      .replace(/,.*$/, "")
      .replace(/\b(Dr\.?|PhD|MSc\.?)\b/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("");
  const cleanName = (name: string) => name.replace(/\s*\(.*?\)/g, "").replace(/,.*$/, "");
  const creds = (name: string) => {
    const m = name.match(/\((.*?)\)/);
    const phd = /PhD/.test(name) ? "PhD" : "";
    return m ? m[1] : phd;
  };

  return (
    <>
      <PageHeader eyebrow="Our team" title="The people behind the work">
        Evaluation, gender and inclusion, and development planning experts with field experience
        across West Africa.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {members.map((m) => (
            <li key={m.name} className="grid gap-6 py-10 md:grid-cols-[14rem_1fr] md:gap-12">
              <div>
                <div
                  aria-hidden
                  className="font-display grid h-20 w-20 place-items-center rounded-full bg-brand-soft text-2xl font-semibold text-brand"
                >
                  {initials(m.name)}
                </div>
                <h2 className="font-display mt-5 text-2xl font-semibold text-brand">{cleanName(m.name)}</h2>
                {creds(m.name) && <p className="mt-1 text-sm text-muted">{creds(m.name)}</p>}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-ink">{m.title}</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-ink/85">{m.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
