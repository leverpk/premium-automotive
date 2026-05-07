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
    <section id="pricing" className="bg-[linear-gradient(180deg,#06101f,#07182f)] py-24 sm:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Pricing</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
            Packages for premium launches.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`border p-7 ${tier.featured ? "border-electric bg-electric/10 shadow-glow" : "border-white/10 bg-white/[0.035]"}`}
            >
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-5 text-4xl font-semibold text-white">{tier.price}</p>
              <p className="mt-5 min-h-20 leading-7 text-white/58">{tier.copy}</p>
              <ul className="mt-8 space-y-4">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/72">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-electric" />
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
