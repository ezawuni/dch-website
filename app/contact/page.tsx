"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1>
      {!sent ? (
        <form
          className="space-y-4 bg-white p-6 rounded shadow"
          action="https://formspree.io/f/mvgqaybj"
          method="POST"
          onSubmit={() => setSent(true)}
        >
          <input name="name" className="w-full border p-2 rounded" placeholder="Your Name" required />
          <input name="email" className="w-full border p-2 rounded" placeholder="Your Email" type="email" required />
          <textarea name="message" className="w-full border p-2 rounded" placeholder="Message" rows={4} required />
          <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Send Message</button>
        </form>
      ) : (
        <div className="bg-green-50 p-8 rounded-xl text-center">
          <div className="text-3xl mb-4">✅</div>
          <p className="text-green-800 text-lg font-bold">Thank you! We’ll be in touch soon.</p>
        </div>
      )}
    </main>
  );
}
