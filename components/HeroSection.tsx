"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const headline = "Silent velocity, drawn in graphite.";
  const words = headline.split(" ");

  useLayoutEffect(() => {
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

    ScrollTrigger.refresh();

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#060708_0%,rgba(6,7,8,0.88)_30%,rgba(6,7,8,0.12)_72%),linear-gradient(180deg,rgba(6,7,8,0.24)_0%,rgba(6,7,8,0.16)_52%,#060708_96%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-ice/18" />
      <div data-hero-copy className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center lg:grid-cols-[0.78fr_0.22fr]">
        <div className="max-w-[780px] pb-24 pt-10">
          <p
            data-hero-fade
            className="eyebrow mb-6"
          >
            Electric grand touring
          </p>
          <h1
            aria-label={headline}
            className="display-heading text-6xl leading-[0.86] sm:text-8xl lg:text-[8.8rem]"
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
            className="editorial-copy mt-8 max-w-xl text-base sm:text-lg"
          >
            A restrained launch experience built around surface, silence, and the rare confidence of a machine that does not need to announce itself.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a data-hero-cta href="#showcase" className="bg-ice px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-electric hover:text-ink">
              Explore showcase
            </a>
            <a data-hero-cta href="#story" className="border border-ice/18 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ice transition hover:border-electric hover:bg-ice/5">
              View narrative
            </a>
          </div>
        </div>
        <div data-hero-fade className="hidden self-end pb-36 text-right lg:block">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-ice/42">Private reveal</p>
          <p className="mt-4 text-sm leading-7 text-ice/58">Milano studio<br />2026 campaign</p>
        </div>
      </div>
      <div className="section-shell relative z-10 -mt-28 grid grid-cols-3 gap-px border-y border-ice/14 bg-ice/12 text-left backdrop-blur-xl sm:max-w-3xl sm:ml-[max(18px,calc((100vw-1240px)/2))]">
        {[
          ["2.7s", "0-100 km/h"],
          ["790km", "Range"],
          ["920hp", "Dual motor"]
        ].map(([value, label]) => (
          <div key={label} className="bg-ink/76 px-4 py-5 sm:px-6">
            <p className="text-2xl font-semibold text-ice">{value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ice/46">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
