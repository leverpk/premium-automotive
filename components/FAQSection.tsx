"use client";

import { motion } from "framer-motion";

const faqs = [
  ["Can this become a real client site?", "Yes. The component structure is ready for content, analytics, CMS wiring, and production image optimization."],
  ["Why use both Framer Motion and GSAP?", "Framer Motion handles component-level entrances and interaction polish. GSAP is reserved for scroll scenes where timeline control matters."],
  ["Is the design mobile-first?", "Yes. Each section stacks naturally on small screens, then expands into sticky and multi-column layouts on larger viewports."],
  ["Are the assets local?", "Yes. The placeholder automotive imagery lives in public/images and is referenced with Next Image."]
];

export function FAQSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">FAQ</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
            Practical answers, premium delivery.
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <motion.details
              key={question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group border border-white/10 bg-white/[0.035] p-6 open:border-electric/50 open:bg-electric/10"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                {question}
              </summary>
              <p className="mt-4 leading-7 text-white/60">{answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
