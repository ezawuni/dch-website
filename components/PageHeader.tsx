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
    <section className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep text-white sm:rounded-[2.25rem]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 100% at 95% 0%, rgba(232,116,42,0.28), transparent 62%), radial-gradient(45% 80% at 0% 100%, rgba(242,184,75,0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            {title}
          </h1>
          {children && <p className="mt-5 max-w-2xl text-lg text-white/80">{children}</p>}
        </div>
      </div>
    </section>
  );
}
