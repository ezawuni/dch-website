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
    "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

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
            <form className="relative space-y-6" onSubmit={onSubmit}>
              <input type="hidden" name="_subject" value="New enquiry from devchangehub.com" />
              {/* Spam trap: hidden from people, bots fill it in and Formspree discards the message */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Leave this empty
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Your name
                  <input name="name" autoComplete="name" className={field} required />
                </label>
                <label className="block text-sm font-semibold">
                  Your email
                  <input name="email" type="email" autoComplete="email" className={field} required />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Organisation <span className="font-normal text-muted">(optional)</span>
                  <input name="organisation" autoComplete="organization" className={field} />
                </label>
                <label className="block text-sm font-semibold">
                  What do you need?
                  <span className="relative block">
                    <select name="service" defaultValue="" className={`${field} appearance-none pr-10`}>
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option>Evaluation and MEL</option>
                      <option>Surveys and data collection</option>
                      <option>Dashboards and data systems</option>
                      <option>Technical assistance</option>
                      <option>Advisory</option>
                      <option>Something else</option>
                    </select>
                    <svg aria-hidden width="12" height="8" viewBox="0 0 12 8" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </label>
              </div>
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
              <dd className="mt-1">12 Kennife Close, Tema Community 22, Ghana</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
