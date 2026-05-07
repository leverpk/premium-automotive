"use client";

import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-midnight py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-shell overflow-hidden border-y border-ice/12 bg-radial-blue px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-20"
      >
        <p className="eyebrow">Contact</p>
        <h2 className="display-heading mx-auto mt-5 max-w-5xl text-5xl leading-[0.95] sm:text-7xl">
          Build a digital showroom with the atmosphere of a private reveal.
        </h2>
        <p className="editorial-copy mx-auto mt-6 max-w-2xl">
          Designed for premium automotive launches, performance studios, luxury detailing, and portfolio-grade web experiences.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:studio@example.com" className="bg-ice px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-electric">
            Start a project
          </a>
          <a href="#pricing" className="border border-ice/18 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ice transition hover:border-electric hover:bg-ice/5">
            Compare packages
          </a>
        </div>
      </motion.div>
    </section>
  );
}
