"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mvgqaybj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <>
      <PageHeader eyebrow="Contact" title="Tell us your goal">
        We’ll reply with a simple, phased plan.
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {status === "sent" ? (
            <div role="status" className="rounded-2xl bg-brand-soft p-10">
              <h2 className="font-display text-3xl font-semibold text-brand">Thank you.</h2>
              <p className="mt-3 text-ink/80">We’ve received your message and will be in touch soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={onSubmit}>
              <label className="block text-sm font-semibold">
                Your name
                <input name="name" autoComplete="name" className={field} required />
              </label>
              <label className="block text-sm font-semibold">
                Your email
                <input name="email" type="email" autoComplete="email" className={field} required />
              </label>
              <label className="block text-sm font-semibold">
                How can we help?
                <textarea name="message" rows={6} className={field} required />
              </label>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-700">
                  Sorry, that did not go through. Please try again or email devchangehub@gmail.com.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:bg-brand-deep disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>

        <aside className="h-fit rounded-2xl bg-paper p-8 ring-1 ring-line">
          <h2 className="font-display text-2xl font-semibold text-brand">Prefer to reach us directly?</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Email</dt>
              <dd className="mt-1"><a className="underline underline-offset-4" href="mailto:devchangehub@gmail.com">devchangehub@gmail.com</a></dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Phone</dt>
              <dd className="mt-1"><a className="underline underline-offset-4" href="tel:+233203817101">+233 (0)203 817 101</a></dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Office</dt>
              <dd className="mt-1">12 Kenniffe Close, Tema Community 22, Ghana</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
