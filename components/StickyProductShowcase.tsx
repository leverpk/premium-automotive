"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const specs = [
  ["Drag coefficient", "0.19 cd"],
  ["Charge window", "10-80% in 14 min"],
  ["Active ride", "Predictive air"],
  ["Sound floor", "28 dBA"]
];

export function StickyProductShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.1, 0.55, 0.9], [0.92, 1, 0.96]);

  return (
    <section id="showcase" ref={ref} className="bg-[linear-gradient(180deg,#06101f,#07182f_48%,#06101f)] py-24 sm:py-36">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Product showcase</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
            Sticky presentation for a high-consideration machine.
          </h2>
          <p className="mt-6 max-w-lg leading-8 text-white/62">
            The showcase holds the product in frame while details, specifications, and purchase intent build around it.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-midnight/85 p-5">
                <p className="text-lg font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/42">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div style={{ scale }} className="overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
          <Image
            src="/images/showcase-car.png"
            alt="Premium electric grand tourer side profile"
            width={1400}
            height={900}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[16/11] w-full object-cover"
          />
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {["Adaptive aero", "Graphite ceramic", "Blue-line optics"].map((item) => (
              <div key={item} className="bg-ink/92 p-5 text-sm font-medium text-white/72">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
