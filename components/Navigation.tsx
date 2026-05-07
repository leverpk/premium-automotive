"use client";

import { motion } from "framer-motion";

const links = ["Story", "Showcase", "Process", "Pricing"];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Astra GT home">
          <span className="h-8 w-8 border border-electric/70 bg-electric/10 shadow-glow" />
          <span className="text-sm font-semibold uppercase tracking-[0.26em] text-white">Astra GT</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/64 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="border border-white/16 px-4 py-2 text-sm font-medium text-white transition hover:border-electric hover:bg-electric/10"
        >
          Book viewing
        </a>
      </nav>
    </motion.header>
  );
}
