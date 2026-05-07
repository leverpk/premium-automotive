"use client";

import { motion } from "framer-motion";

const links = ["Story", "Showcase", "Process", "Pricing"];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/82 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Astra GT home">
          <span className="h-8 w-[3px] bg-electric" />
          <span className="text-sm font-bold uppercase tracking-[0.28em] text-ice">Astra GT</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium uppercase tracking-[0.16em] text-ice/54 transition hover:text-ice"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="border border-ice/18 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.16em] text-ice transition hover:border-electric hover:bg-electric/10"
        >
          Book viewing
        </a>
      </nav>
    </motion.header>
  );
}
