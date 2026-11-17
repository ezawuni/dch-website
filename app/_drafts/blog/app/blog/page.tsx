"use client";
import { motion } from "framer-motion";

const POSTS = [
  {
    slug: "first-post",
    title:
      "Protecting Ghana’s Cocoa Children: Insights from an Endline Evaluation",
    excerpt:
      "How we supported safer communities and improved child protection outcomes in the cocoa sector.",
    date: "Aug 2025",
  },
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, delay: d } },
});

export default function BlogIndex() {
  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-black/5 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <motion.h1 {...fadeUp(0)} className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Blog
          </motion.h1>
          <motion.p {...fadeUp(0.05)} className="mt-3 max-w-2xl text-emerald-50/90">
            Short, practical notes on evidence, delivery, and data for decision-makers.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.slug}
                {...fadeUp(0.03 * i)}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500">{p.date}</p>
                <h2 className="mt-1 text-xl font-semibold text-emerald-900">{p.title}</h2>
                <p className="mt-2 text-gray-700">{p.excerpt}</p>
                <a
                  href={`/blog/${p.slug}`}
                  className="mt-4 inline-block font-semibold text-orange-600 hover:underline"
                >
                  Read more →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

