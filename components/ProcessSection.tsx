"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Discovery sprint", "Define audience, model positioning, conversion goals, and visual references."],
  ["02", "Motion prototype", "Map scroll states, sticky scenes, and interaction timing before polishing UI details."],
  ["03", "Production system", "Build modular Next.js sections with accessible copy, responsive states, and reusable tokens."],
  ["04", "Launch tuning", "Optimize imagery, animation thresholds, metadata, and final QA across viewport sizes."]
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-ink py-24 sm:py-32">
      <div className="section-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Process</p>
        <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
          From showroom emotion to production-ready interface.
        </h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {steps.map(([number, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-4 py-8 md:grid-cols-[120px_0.55fr_1fr] md:items-center"
            >
              <span className="text-sm font-semibold text-electric">{number}</span>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="leading-7 text-white/58">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
