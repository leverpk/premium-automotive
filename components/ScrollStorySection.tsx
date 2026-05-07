"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const chapters = [
  {
    label: "01",
    title: "A body drawn by air",
    text: "Long surfacing, hidden intake paths, and a low glasshouse create a silhouette that feels still even at speed."
  },
  {
    label: "02",
    title: "A cabin tuned for focus",
    text: "Material contrast, acoustic glazing, and a driver-first interface turn every journey into a composed cockpit experience."
  },
  {
    label: "03",
    title: "Power without theatre",
    text: "Instant torque arrives quietly, with chassis intelligence that reads grip, steering load, and thermal demand in real time."
  }
];

export function ScrollStorySection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".story-card", {
        y: 72,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%"
        }
      });
    }, rootRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={rootRef} className="bg-ink py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ice/12 pt-9 lg:grid-cols-[0.42fr_0.58fr]">
          <p className="eyebrow">Scroll story</p>
          <h2 className="display-heading text-5xl leading-[0.96] sm:text-7xl">
            A campaign cadence, paced like the first drive after midnight.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-ice/12 md:grid-cols-[1.05fr_0.85fr_1.1fr]">
          {chapters.map((chapter, index) => (
            <article key={chapter.title} className={`story-card bg-midnight p-7 transition hover:-translate-y-1 hover:bg-graphite sm:p-9 ${index === 1 ? "md:mt-8" : ""}`}>
              <p className="text-sm font-bold text-electric">{chapter.label}</p>
              <h3 className="mt-10 text-2xl font-semibold text-ice">{chapter.title}</h3>
              <p className="editorial-copy mt-4">{chapter.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
