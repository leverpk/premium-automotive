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
    <section className="bg-ink py-28 sm:py-40">
      <div className="section-shell grid gap-12 border-t border-ice/12 pt-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="display-heading mt-5 text-5xl leading-[0.95] sm:text-7xl">
            Practical answers, premium delivery.
          </h2>
        </div>
        <div className="space-y-px bg-ice/12">
          {faqs.map(([question, answer], index) => (
            <motion.details
              key={question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group bg-midnight p-6 open:bg-graphite"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-ice">
                {question}
              </summary>
              <p className="mt-4 leading-7 text-ice/60">{answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
