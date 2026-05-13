"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const steps = [
  {
    label: "01",
    title: "Precision fit",
    text: "Measured to sit flush with the cabin architecture, each surface follows the vehicle lines without bulk, lift, or visual interruption."
  },
  {
    label: "02",
    title: "Premium material",
    text: "A refined tactile layer brings structure, grip, and a quieter finish, built to feel considered every time the door closes."
  },
  {
    label: "03",
    title: "Water resistance",
    text: "Daily spills, weather, and tracked-in moisture stay controlled by a protective surface designed for real cabin use."
  },
  {
    label: "04",
    title: "Easy cleaning",
    text: "A cleaner silhouette also means a cleaner routine: remove, rinse, reset, and return the interior to its composed state."
  }
];

export function StickyProductShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const stepEls = gsap.utils.toArray<HTMLElement>("[data-showcase-step]");

      if (reduceMotion) {
        gsap.set(stepEls, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(stepEls, { autoAlpha: 0.42, y: 28 });

      stepEls.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: desktop ? "top 58%" : "top 82%",
          end: desktop ? "bottom 42%" : "bottom 22%",
          onEnter: () => gsap.to(step, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" }),
          onEnterBack: () => gsap.to(step, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" }),
          onLeave: () => desktop && gsap.to(step, { autoAlpha: 0.34, y: -18, duration: 0.45, ease: "power2.out" }),
          onLeaveBack: () => desktop && gsap.to(step, { autoAlpha: 0.34, y: 18, duration: 0.45, ease: "power2.out" })
        });
      });

      gsap.fromTo(
        "[data-showcase-image]",
        { scale: 0.96, yPercent: 3 },
        {
          scale: desktop ? 1.035 : 1,
          yPercent: desktop ? -3 : 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );
    }, rootRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" ref={rootRef} className="bg-[linear-gradient(180deg,#060708,#101214_50%,#060708)] py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow">Product showcase</p>
          <h2 className="display-heading mt-5 max-w-2xl text-5xl leading-[0.95] sm:text-7xl">
            Protection, revealed one detail at a time.
          </h2>
          <p className="editorial-copy mt-7 max-w-lg">
            A slower look at the cabin layer that carries the daily work, without interrupting the shape of the interior.
          </p>

          <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-18 lg:space-y-0">
            {steps.map((step) => (
              <article
                key={step.title}
                data-showcase-step
                className="border-t border-ice/12 py-10 lg:flex lg:min-h-[58vh] lg:flex-col lg:justify-center lg:py-16"
              >
                <p className="text-sm font-bold text-electric">{step.label}</p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight text-ice sm:text-4xl">
                  {step.title}
                </h3>
                <p className="editorial-copy mt-5 max-w-md text-base sm:text-lg">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-28">
          <div className="overflow-hidden border border-ice/12 bg-ink shadow-2xl shadow-black/50">
            <Image
              data-showcase-image
              src="/images/showcase-car.png"
              alt="Premium automotive product detail shown in a cinematic cabin-focused composition"
              width={1400}
              height={900}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[16/11] w-full object-cover will-change-transform"
            />
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-ice/12 pt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-ice/42">
            <span>Cabin protection</span>
            <span>2026 detail study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
