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
    let refreshFrame = 0;

    const refreshScroll = () => {
      if (refreshFrame) cancelAnimationFrame(refreshFrame);

      refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        updateProgress();
      });
    };

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("load", refreshScroll);
    window.addEventListener("resize", refreshScroll);
    window.addEventListener("orientationchange", refreshScroll);

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

      lenis.on("scroll", () => {
        ScrollTrigger.update();
        updateProgress();
      });
      frame = requestAnimationFrame(raf);
    }

    document.fonts?.ready.then(refreshScroll);

    const images = Array.from(document.images);
    images.forEach((image) => {
      if (image.complete) return;
      image.addEventListener("load", refreshScroll, { once: true });
      image.addEventListener("error", refreshScroll, { once: true });
    });

    refreshScroll();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("load", refreshScroll);
      window.removeEventListener("resize", refreshScroll);
      window.removeEventListener("orientationchange", refreshScroll);
      images.forEach((image) => {
        image.removeEventListener("load", refreshScroll);
        image.removeEventListener("error", refreshScroll);
      });
      if (frame) cancelAnimationFrame(frame);
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      lenis?.destroy();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left scale-x-[var(--scroll-progress,0)] bg-electric"
      aria-hidden="true"
    />
  );
}
