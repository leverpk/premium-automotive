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
    <section id="showcase" ref={ref} className="bg-[linear-gradient(180deg,#060708,#101214_50%,#060708)] py-28 sm:py-44">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Product showcase</p>
          <h2 className="display-heading mt-5 text-5xl leading-[0.95] sm:text-7xl">
            Hold the silhouette. Let the detail arrive slowly.
          </h2>
          <p className="editorial-copy mt-7 max-w-md">
            A sticky product stage gives the grand tourer the stillness of a studio campaign while specifications accumulate with quiet precision.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px border-y border-ice/12 bg-ice/12">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-ink/90 p-5">
                <p className="text-lg font-semibold text-ice">{value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ice/42">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div style={{ scale }} className="overflow-hidden border border-ice/12 bg-ink shadow-2xl shadow-black/50 lg:-mt-16">
          <Image
            src="/images/showcase-car.png"
            alt="Premium electric grand tourer side profile"
            width={1400}
            height={900}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[16/11] w-full object-cover"
          />
          <div className="grid gap-px bg-ice/12 sm:grid-cols-3">
            {["Adaptive aero", "Graphite ceramic", "Laser-cut optics"].map((item) => (
              <div key={item} className="bg-ink/94 p-5 text-sm font-semibold uppercase tracking-[0.12em] text-ice/62">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
