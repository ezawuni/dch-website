type Stat = { label: string; value: string };

const STATS: Stat[] = [
  { label: "Countries", value: "10+" },
  { label: "Dashboards", value: "20+" },
  { label: "Partners", value: "30+" },
  { label: "People Reached", value: "100,000+" },
];

export default function Impact() {
  return (
    <section aria-labelledby="impact-title" className="mx-auto max-w-screen-xl px-4 py-16">
      <h2 id="impact-title" className="text-2xl font-semibold tracking-tight mb-6">Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-black/10 p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
