type Logo = { name: string; href: string; title?: string };

const LOGOS: Logo[] = [
  { name: "World Bank", href: "/case-studies/world-bank-program" },
  { name: "European Union", href: "/case-studies/eu-program" },
  { name: "UNICEF", href: "/case-studies/unicef-initiative" },
  { name: "Mastercard Foundation", href: "/case-studies/mastercard-foundation-young-africa-works" },
  { name: "USAID", href: "/case-studies/usaid-initiative" },
  { name: "AfDB", href: "/case-studies/afdb-project" },
  { name: "Minstry of Finance", href: "/case-studies/mof-gjsp" },
  { name: "Ministry of Tourism Arts & Culture", href: "/case-studies/motac-gtdp" },
  { name: "Fairtrade Africa", href: "/case-studies/fairtrade-africa-project" },
];

function PlaceholderMonochrome({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 200 60" role="img" aria-label={label} className="h-10 w-auto">
      <rect width="200" height="60" rx="8" className="fill-neutral-400" />
      <text x="100" y="36" textAnchor="middle" className="fill-white" style={{ font: "bold 20px system-ui" }}>
        {label}
      </text>
    </svg>
  );
}

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-title" className="mx-auto max-w-screen-xl px-4 py-16">
      <h2 id="trusted-title" className="text-2xl font-semibold tracking-tight mb-6">Trusted by</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
        {LOGOS.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            className="group grayscale hover:grayscale-0 focus:grayscale-0 transition rounded outline-none focus-visible:ring p-3 flex items-center justify-center"
            title={logo.title ?? `See proof: ${logo.name}`}
          >
            <PlaceholderMonochrome label={logo.name} />
          </a>
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Each logo links to proof (case note or case study).
      </p>
    </section>
  );
}
