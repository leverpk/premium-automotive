"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const headlineLines = ["Built for the road.", "Designed for the cabin."];
  const headline = headlineLines.join(" ");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const desktop = window.matchMedia("(min-width: 641px)").matches;

      gsap.set("[data-hero-line]", { yPercent: reduceMotion ? 0 : 118, opacity: reduceMotion ? 1 : 0 });
      gsap.set("[data-hero-fade]", { y: reduceMotion ? 0 : 18, opacity: reduceMotion ? 1 : 0 });
      gsap.set("[data-hero-cta]", { y: reduceMotion ? 0 : 18, opacity: reduceMotion ? 1 : 0 });

      if (!reduceMotion) {
        gsap.timeline({ defaults: { ease: "power4.out" } })
          .to("[data-hero-line]", {
            yPercent: 0,
            opacity: 1,
            stagger: 0.16,
            duration: 1.05
          })
          .to("[data-hero-fade]", { y: 0, opacity: 1, stagger: 0.08, duration: 0.75 }, "-=0.45")
          .to("[data-hero-cta]", { y: 0, opacity: 1, stagger: 0.08, duration: 0.65 }, "-=0.35");

        if (desktop) {
          gsap.to("[data-hero-image]", {
            yPercent: 8,
            scale: 1.04,
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
    <section ref={rootRef} className="relative min-h-[100svh] overflow-hidden bg-ink pt-20 sm:pt-24">
      <div data-hero-image className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="Premium automotive interior protection in a cinematic vehicle cabin campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#060708_0%,rgba(6,7,8,0.90)_35%,rgba(6,7,8,0.28)_68%,rgba(6,7,8,0.52)_100%),linear-gradient(180deg,rgba(6,7,8,0.18)_0%,rgba(6,7,8,0.10)_46%,#060708_98%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(244,241,234,0.10),transparent_30%),linear-gradient(180deg,transparent_0%,rgba(6,7,8,0.32)_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-ice/18" />
      <div data-hero-copy className="section-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-end pb-32 pt-12 sm:min-h-[calc(100vh-6rem)] sm:items-center sm:pb-36 lg:grid-cols-[0.78fr_0.22fr]">
        <div className="max-w-[920px]">
          <p
            data-hero-fade
            className="eyebrow mb-6 sm:mb-8"
          >
            PREMIUM AUTOMOTIVE INTERIORS
          </p>
          <h1
            aria-label={headline}
            className="display-heading flex flex-col gap-2 text-[clamp(4.15rem,17vw,7rem)] leading-[0.88] sm:gap-3 sm:text-[clamp(6.4rem,10.4vw,10rem)] sm:leading-[0.86] lg:gap-4 lg:text-[10rem]"
          >
            {headlineLines.map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <span data-hero-line className="block will-change-transform">
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            data-hero-fade
            className="editorial-copy mt-8 max-w-2xl text-base leading-8 text-ice/72 sm:mt-10 sm:text-lg sm:leading-9"
          >
            Precision-fit automotive protection with a cleaner silhouette, stronger durability and a premium daily driving experience.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center sm:gap-5">
            <a data-hero-cta href="#showcase" className="bg-ice px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-electric hover:text-ink sm:px-9">
              Explore the product
            </a>
            <a data-hero-cta href="#story" className="border border-ice/18 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-ice/78 transition hover:border-electric hover:bg-ice/5 hover:text-ice sm:px-9">
              View details
            </a>
          </div>
        </div>
        <div data-hero-fade className="hidden self-end pb-10 text-right lg:block">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-ice/42">2026 campaign</p>
          <p className="mt-4 text-sm leading-7 text-ice/58">Precision cabin fit<br />daily-grade durability</p>
        </div>
      </div>
      <div className="section-shell relative z-10 -mt-24 grid grid-cols-3 gap-px border-y border-ice/14 bg-ice/12 text-left backdrop-blur-xl sm:-mt-28 sm:max-w-3xl sm:ml-[max(18px,calc((100vw-1240px)/2))]">
        {[
          ["01", "Precision fit"],
          ["02", "Cleaner profile"],
          ["03", "Daily durability"]
        ].map(([value, label]) => (
          <div key={label} className="bg-ink/76 px-3 py-4 sm:px-6 sm:py-5">
            <p className="text-xl font-semibold text-electric sm:text-2xl">{value}</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-ice/52 sm:text-[10px] sm:tracking-[0.22em]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
