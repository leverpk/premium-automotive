"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clip = useTransform(scrollYProgress, [0.2, 0.78], ["inset(0 48% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={ref} className="bg-midnight py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Before / after</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
            A tactile reveal that sells finish quality.
          </h2>
          <p className="mt-6 leading-8 text-white/62">
            Scroll progress drives the reveal mask, giving detailing, restoration, or performance upgrades an immediate visual payoff.
          </p>
        </div>
        <div className="relative overflow-hidden border border-white/10 bg-ink">
          <Image
            src="/images/detail-finish.png"
            alt="Automotive finish detail before polishing"
            width={1300}
            height={820}
            className="aspect-[16/10] w-full object-cover grayscale"
          />
          <motion.div style={{ clipPath: clip }} className="absolute inset-0">
            <Image
              src="/images/detail-finish.png"
              alt="Automotive finish detail after polishing"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover saturate-150 contrast-125"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-electric shadow-glow" />
        </div>
      </div>
    </section>
  );
}
