export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          {title}
        </h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-white/75">{children}</p>}
      </div>
    </section>
  );
}
