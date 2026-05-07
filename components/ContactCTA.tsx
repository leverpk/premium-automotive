"use client";

import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-midnight py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-shell overflow-hidden border border-white/10 bg-radial-blue px-6 py-16 text-center sm:px-10 sm:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Contact</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
          Build a digital showroom with the atmosphere of a private reveal.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/62">
          Designed for premium automotive launches, performance studios, luxury detailing, and portfolio-grade web experiences.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:studio@example.com" className="bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-electric hover:text-white">
            Start a project
          </a>
          <a href="#pricing" className="border border-white/18 px-6 py-4 text-sm font-semibold text-white transition hover:border-electric hover:bg-electric/10">
            Compare packages
          </a>
        </div>
      </motion.div>
    </section>
  );
}
