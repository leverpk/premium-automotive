"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clip = useTransform(scrollYProgress, [0.2, 0.78], ["inset(0 48% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={ref} className="bg-midnight py-20 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
        <div className="lg:pt-10">
          <p className="eyebrow">Before / after</p>
          <h2 className="display-heading mt-5 text-5xl leading-[0.95] sm:text-7xl">
            Finish quality should be felt before it is explained.
          </h2>
          <p className="editorial-copy mt-7 max-w-md">
            The reveal mask gives paint correction, restoration, and performance upgrades the kind of tactile proof usually reserved for close-up film.
          </p>
        </div>
        <div className="relative overflow-hidden border border-ice/12 bg-ink shadow-2xl shadow-black/50 lg:-mr-10">
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
          <div className="absolute inset-y-0 left-1/2 w-px bg-electric" />
        </div>
      </div>
    </section>
  );
}
