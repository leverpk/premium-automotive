"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const headline = "Precision shaped for the silent fast lane.";
  const words = headline.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const desktop = window.matchMedia("(min-width: 641px)").matches;

      gsap.set("[data-hero-word]", { yPercent: reduceMotion ? 0 : 115, opacity: reduceMotion ? 1 : 0 });
      gsap.set("[data-hero-fade]", { y: reduceMotion ? 0 : 18, opacity: reduceMotion ? 1 : 0 });
      gsap.set("[data-hero-cta]", { y: reduceMotion ? 0 : 18, opacity: reduceMotion ? 1 : 0 });

      if (!reduceMotion) {
        gsap.timeline({ defaults: { ease: "power4.out" } })
          .to("[data-hero-word]", {
            yPercent: 0,
            opacity: 1,
            stagger: 0.055,
            duration: 0.9
          })
          .to("[data-hero-fade]", { y: 0, opacity: 1, duration: 0.75 }, "-=0.35")
          .to("[data-hero-cta]", { y: 0, opacity: 1, stagger: 0.08, duration: 0.65 }, "-=0.35");

        if (desktop) {
          gsap.to("[data-hero-image]", {
            yPercent: 8,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.8
            }
          });

          gsap.to("[data-hero-copy]", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.9
            }
          });
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen overflow-hidden bg-ink pt-24">
      <div data-hero-image className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="Premium electric grand tourer in a cinematic dark studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06101f_0%,rgba(6,16,31,0.88)_32%,rgba(6,16,31,0.18)_72%),linear-gradient(180deg,rgba(6,16,31,0.15)_0%,#06101f_94%)]" />
      </div>

      <div data-hero-copy className="section-shell relative z-10 flex min-h-[calc(100vh-6rem)] items-center">
        <div className="max-w-3xl pb-20">
          <p
            data-hero-fade
            className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-electric"
          >
            Electric performance atelier
          </p>
          <h1
            aria-label={headline}
            className="font-[var(--font-display)] text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl"
          >
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
                <span data-hero-word className="inline-block will-change-transform">
                  {word}
                </span>
                {index < words.length - 1 ? "\u00a0" : null}
              </span>
            ))}
          </h1>
          <p
            data-hero-fade
            className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg"
          >
            A cinematic product story for a premium automotive brand, designed around motion, restraint, and tactile digital luxury.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a data-hero-cta href="#showcase" className="bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-electric hover:text-white">
              Explore showcase
            </a>
            <a data-hero-cta href="#story" className="border border-white/18 px-6 py-4 text-sm font-semibold text-white transition hover:border-electric hover:bg-electric/10">
              View narrative
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell relative z-10 -mt-28 grid grid-cols-3 gap-px border border-white/10 bg-white/10 text-center backdrop-blur-xl sm:max-w-2xl">
        {[
          ["2.7s", "0-100 km/h"],
          ["790km", "Range"],
          ["920hp", "Dual motor"]
        ].map(([value, label]) => (
          <div key={label} className="bg-ink/70 px-3 py-5">
            <p className="text-2xl font-semibold text-white">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/48">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
