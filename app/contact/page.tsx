"use client";
import { useState } from "react";

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

  if (status === "sent") {
    return (
      <div className="max-w-xl mx-auto py-16 px-4">
        <div role="status" className="bg-green-50 p-8 rounded-xl text-center">
          <p className="text-green-800 text-lg font-bold">Thank you! We’ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  const field = "w-full border border-gray-300 p-2 rounded";
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow" onSubmit={onSubmit}>
        <label className="block text-sm font-medium">
          Your name
          <input name="name" autoComplete="name" className={`${field} mt-1`} required />
        </label>
        <label className="block text-sm font-medium">
          Your email
          <input name="email" type="email" autoComplete="email" className={`${field} mt-1`} required />
        </label>
        <label className="block text-sm font-medium">
          Message
          <textarea name="message" rows={5} className={`${field} mt-1`} required />
        </label>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            Sorry, that did not go through. Please try again or email devchangehub@gmail.com.
          </p>
        )}
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-60"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
