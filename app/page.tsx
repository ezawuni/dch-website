import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

/* -------------------- Editable content -------------------- */
const CLIENTS = [
  { name: "World Bank", href: "/case-studies/world-bank-program" },
  { name: "European Union", href: "/case-studies/eu-program" },
  { name: "UNICEF", href: "/case-studies/unicef-initiative" },
  { name: "Fairtrade Africa", href: "/case-studies/fairtrade-cocoa-climate" },
];

const VALUE_PROPS = [
  {
    title: "Evidence to action",
    body: "We turn complex data into decisions: clear insights, short cycles, measurable results.",
  },
  {
    title: "Rooted in West Africa",
    body: "Deep understanding of Ghana and West Africa institutions, markets, and delivery realities.",
  },
  {
    title: "Secure and transparent",
    body: "Privacy by design, least-privilege access, and reporting your stakeholders can follow.",
  },
];

const SERVICES = [
  {
    label: "Advisory",
    blurb:
      "Consulting for startups, scaleups, and established organizations. We clarify strategy and install the controls that drive performance and growth.",
  },
  {
    label: "Technical assistance",
    blurb:
      "Capacity building and systems support for agencies, private actors, and development partners across Ghana and West Africa.",
  },
  {
    label: "Evaluation and MEL",
    blurb:
      "Independent evaluations with rigorous methods and practical recommendations for course-correction and impact.",
  },
  {
    label: "Tech and innovation",
    blurb:
      "Dashboards, secure databases, digital payments, and AI-assisted reporting, so leaders can act on real-time evidence.",
  },
];

const PROJECTS = [
  {
    title: "Ghana Jobs & Skills Project",
    client: "World Bank",
    tag: "US $200m programme",
    description:
      "Nationwide tracer surveys and mixed-methods evaluation of a skills and jobs programme.",
    href: "/case-studies/world-bank-program",
  },
  {
    title: "SME Grants Evaluation",
    client: "Ministry of Tourism",
    tag: "COVID-19 and SME windows",
    description: "End-of-grants evaluation and ICR drafting.",
    href: "/case-studies/eu-program",
  },
  {
    title: "UNICEF Sahel Survey",
    client: "UNICEF Ghana",
    tag: "Nine high-risk districts",
    description:
      "Multi-round household survey with emergency readiness analytics.",
    href: "/case-studies/unicef-initiative",
  },
];

const STATS = [
  { value: "16", label: "Regions of Ghana covered" },
  { value: "20+", label: "Dashboards built" },
  { value: "30+", label: "Partners" },
  { value: "100,000+", label: "People reached" },
];

const FEATURED_QUOTE = {
  quote:
    "DCH delivered a decision-ready evaluation under tight timelines. Clear, rigorous, and practical.",
  author: "Program Lead, Multilateral Partner",
};

const TESTIMONIALS = [
  {
    quote:
      "Working with DCH gave us more than just data. They helped us make sense of complex survey results, connected the dots for policy, and gave us a clear roadmap we could present to decision-makers with confidence.",
    author: "PPME Director, Government Agency",
  },
  {
    quote:
      "We trusted DCH with an assignment that required both discretion and deep expertise. They handled sensitive issues with professionalism and still delivered a thorough, actionable report.",
    author: "Chief Director, Government Agency",
  },
  {
    quote:
      "What stood out was their balance of technical rigor and human approach. The DCH team engaged communities respectfully, while ensuring the data was robust enough to withstand donor scrutiny.",
    author: "Country Manager, International NGO",
  },
  {
    quote:
      "The health and safety and gender mainstreaming guidance wasn’t just box-ticking. It was practical, context-sensitive, and helped us change how we approach program design.",
    author: "Operations Lead, agribusiness program (West Africa)",
  },
];

const FAQS = [
  {
    q: "Where do you work?",
    a: "We are Ghana-incorporated and work across West Africa with public and private clients.",
  },
  {
    q: "What makes DCH different?",
    a: "We translate evidence into concrete next steps. Short cycles, clear outputs, and shared ownership with client teams.",
  },
  {
    q: "How do you handle data security?",
    a: "Least-privilege access, secure storage, and clear data retention aligned to client requirements.",
  },
];

/* -------------------- Small pieces -------------------- */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "text-accent" : "text-accent-ink"
      }`}
    >
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ========================================================= */

export default function Home() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div aria-hidden className="orb-a pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div aria-hidden className="orb-b pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand-soft/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <div className="rise">
              <Eyebrow light>Evidence and data consultancy · Ghana</Eyebrow>
            </div>
            <h1 className="font-display rise rise-2 mt-5 text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Powering development through <span className="draw-underline">evidence</span> across Africa.
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We help governments, donors, and businesses convert data into decisions.
              Fast, practical, and secure.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#f08a45] hover:shadow-lg hover:shadow-black/20"
              >
                Start a conversation <Arrow />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-full px-7 py-3.5 font-semibold text-white ring-1 ring-white/35 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/70"
              >
                See our work
              </Link>
            </div>
          </div>

          <aside aria-label="Selected work" className="rise rise-3 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Selected work</p>
            <ul className="mt-2 divide-y divide-white/10">
              {PROJECTS.map((p) => (
                <li key={p.title}>
                  <Link href={p.href} className="group group/btn flex items-start justify-between gap-4 py-5">
                    <div>
                      <p className="text-xs text-accent">{p.client}</p>
                      <p className="font-display mt-1 text-xl font-medium transition-colors group-hover:text-accent">{p.title}</p>
                      <p className="mt-1 text-sm text-white/60">{p.tag}</p>
                    </div>
                    <span className="mt-1 text-white/40 transition group-hover:text-accent">
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* =============== CLIENTS =============== */}
      <section aria-labelledby="clients-title" className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2 id="clients-title" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Trusted by
          </h2>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {CLIENTS.map((c) => (
              <li key={c.name}>
                <Link
                  href={c.href}
                  className="font-display text-xl font-medium text-brand transition hover:text-accent-ink"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============== WHY DCH =============== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Why partners choose DCH</Eyebrow>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-brand sm:text-5xl">
              Simple outputs. Clear next steps. Measurable progress.
            </h2>
          </Reveal>
          <ol className="divide-y divide-line border-y border-line">
            {VALUE_PROPS.map((vp, i) => (
              <Reveal as="li" delay={i * 110} key={vp.title} className="grid gap-2 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-3xl text-accent-ink">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{vp.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{vp.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* =============== IMPACT =============== */}
      <section aria-labelledby="impact-title" className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 id="impact-title" className="sr-only">Our impact</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 120} className="border-t border-white/25 pt-5">
                <dd className="font-display text-[2rem] font-semibold leading-none sm:text-6xl"><CountUp value={s.value} /></dd>
                <dt className="mt-2 text-sm text-white/70">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* =============== SERVICES =============== */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-brand sm:text-5xl">
            Four ways we work with you
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article key={s.label} className="group relative bg-white p-8 transition-colors duration-300 hover:bg-paper sm:p-10">
              <span aria-hidden className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              <Reveal delay={(i % 2) * 120}>
                <p className="font-display text-sm text-accent-ink">0{i + 1}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-brand">{s.label}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.blurb}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* =============== PROJECTS =============== */}
      <section id="projects" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal className="max-w-2xl">
              <Eyebrow>Flagship projects</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-brand sm:text-5xl">
                Work that shaped programme decisions
              </h2>
            </Reveal>
            <Link href="/case-studies" className="group/btn inline-flex items-center gap-2 font-semibold text-brand hover:text-accent-ink">
              All case studies <Arrow />
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal as="li" delay={i * 120} key={p.title}>
                <Link
                  href={p.href}
                  className="group group/btn flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-line transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{p.client}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-brand">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                  <p className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
                    {p.tag}
                    <span className="text-brand"><Arrow /></span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* =============== TESTIMONIALS =============== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>What partners say</Eyebrow>
        <Reveal as="figure" className="mt-6 max-w-4xl">
          <blockquote className="font-display text-3xl font-medium leading-snug text-brand sm:text-5xl sm:leading-[1.15]">
            “{FEATURED_QUOTE.quote}”
          </blockquote>
          <figcaption className="mt-6 text-muted">{FEATURED_QUOTE.author}</figcaption>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" delay={(i % 2) * 120} key={t.author} className="border-t border-line pt-6">
              <blockquote className="leading-relaxed text-ink/85">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand">{t.author}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =============== FAQ =============== */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-brand sm:text-5xl">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={150} className="divide-y divide-line border-y border-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold">
                  {f.q}
                  <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-line transition-transform" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M7 1v12M1 7h12" /></svg>
                  </span>
                </summary>
                <p className="pb-6 pr-12 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =============== CTA =============== */}
      <section id="contact" className="bg-brand-deep text-white">
        <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Tell us your goal. We’ll propose a phased plan.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            You get a fast win in weeks, not months.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#f08a45] hover:shadow-lg hover:shadow-black/20"
            >
              Start a conversation <Arrow />
            </Link>
            <a className="text-white/80 underline-offset-4 hover:underline" href="mailto:devchangehub@gmail.com">
              devchangehub@gmail.com
            </a>
            <a className="text-white/80 underline-offset-4 hover:underline" href="tel:+233203817101">
              +233 (0)203 817 101
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
