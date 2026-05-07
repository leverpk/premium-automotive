"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GlobalMotion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 640px)").matches;
    let lenis: Lenis | undefined;
    let frame = 0;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    if (!reduceMotion && !smallScreen) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.92
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      lenis.on("scroll", ScrollTrigger.update);
      frame = requestAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left scale-x-[var(--scroll-progress,0)] bg-electric shadow-[0_0_24px_rgba(0,163,255,0.75)]"
      aria-hidden="true"
    />
  );
}
