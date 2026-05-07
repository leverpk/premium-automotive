"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={rootRef} className="bg-ink py-24 sm:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Scroll story</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
            Built as a launch narrative, not a static page.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="story-card border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-electric/60 hover:bg-electric/10">
              <p className="text-sm font-semibold text-electric">{chapter.label}</p>
              <h3 className="mt-9 text-2xl font-semibold text-white">{chapter.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{chapter.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
