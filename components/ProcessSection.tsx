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
    <section id="process" className="bg-ink py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ice/12 pt-9 lg:grid-cols-[0.34fr_0.66fr]">
          <p className="eyebrow">Process</p>
          <h2 className="display-heading max-w-4xl text-5xl leading-[0.95] sm:text-7xl">
            From showroom emotion to production-ready interface.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-ice/10 border-y border-ice/12">
          {steps.map(([number, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-5 py-7 md:grid-cols-[120px_0.55fr_1fr] md:items-center"
            >
              <span className="text-sm font-bold text-electric">{number}</span>
              <h3 className="text-2xl font-semibold text-ice">{title}</h3>
              <p className="leading-7 text-ice/58">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
