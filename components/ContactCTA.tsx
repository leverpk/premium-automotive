"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const headlineLines = ["Upgrade the cabin.", "Keep the drive clean."];

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.01, 1.06]);

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-midnight py-20 sm:py-28">
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src="/images/detail-finish.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#060708_0%,rgba(6,7,8,0.92)_42%,rgba(6,7,8,0.64)_100%),linear-gradient(180deg,rgba(6,7,8,0.18)_0%,#060708_100%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-shell relative z-10 border-y border-ice/12 py-14 sm:py-20"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="eyebrow"
        >
          Final fit
        </motion.p>
        <h2
          aria-label={headlineLines.join(" ")}
          className="display-heading mt-6 flex max-w-5xl flex-col gap-2 text-[clamp(4rem,14vw,6.5rem)] leading-[0.9] sm:gap-3 sm:text-[clamp(6rem,8.5vw,9rem)] lg:gap-4"
        >
          {headlineLines.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={{
                  hidden: { y: "115%", opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.95, delay: 0.08 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
          className="editorial-copy mt-8 max-w-2xl text-base leading-8 text-ice/72 sm:mt-10 sm:text-lg sm:leading-9"
        >
          Precision-fit protection designed for daily use, premium interiors and every road ahead.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.72, delay: 0.48, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
        >
          <a href="mailto:studio@example.com" className="bg-ice px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-electric sm:px-9">
            Configure your fit
          </a>
          <a href="#showcase" className="border border-ice/18 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-ice/78 transition hover:border-electric hover:bg-ice/5 hover:text-ice sm:px-9">
            View product details
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
