"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Launch",
    price: "$4.8k",
    copy: "Single-page cinematic campaign for a model, service, or dealership push.",
    items: ["Custom landing page", "Responsive motion system", "Conversion CTA flow"]
  },
  {
    name: "Signature",
    price: "$8.9k",
    copy: "A complete premium product story with sticky scenes and rich interaction.",
    items: ["All Launch features", "Scroll storytelling", "CMS-ready section architecture"],
    featured: true
  },
  {
    name: "Atelier",
    price: "Custom",
    copy: "Full visual system for high-end automotive brands and multi-model rollouts.",
    items: ["Design system", "Advanced GSAP sequences", "Performance and analytics handoff"]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[linear-gradient(180deg,#060708,#111316)] py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ice/12 pt-9 md:grid-cols-[0.4fr_0.6fr]">
          <p className="eyebrow">Pricing</p>
          <h2 className="display-heading text-5xl leading-[0.95] sm:text-7xl">
            Launch packages with room for ceremony.
          </h2>
        </div>
        <div className="mt-11 grid gap-px bg-ice/12 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`p-8 ${tier.featured ? "bg-ice text-ink" : "bg-midnight text-ice"}`}
            >
              <h3 className={`text-xl font-semibold ${tier.featured ? "text-ink" : "text-ice"}`}>{tier.name}</h3>
              <p className={`mt-5 text-4xl font-semibold ${tier.featured ? "text-ink" : "text-ice"}`}>{tier.price}</p>
              <p className={`mt-5 min-h-16 leading-7 ${tier.featured ? "text-ink/64" : "text-ice/58"}`}>{tier.copy}</p>
              <ul className="mt-7 space-y-4">
                {tier.items.map((item) => (
                  <li key={item} className={`flex gap-3 text-sm ${tier.featured ? "text-ink/72" : "text-ice/72"}`}>
                    <Check className={`mt-0.5 h-4 w-4 flex-none ${tier.featured ? "text-ink" : "text-electric"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
