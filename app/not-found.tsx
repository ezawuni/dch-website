import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">404</p>
      <h1 className="font-display mt-4 text-5xl font-semibold text-brand">That page isn’t here.</h1>
      <p className="mt-4 text-muted">It may have moved. Try the home page or get in touch.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white hover:bg-brand-deep">
        Back to home
      </Link>
    </section>
  );
}
