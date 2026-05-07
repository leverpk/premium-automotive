"use client";

import { BatteryCharging, Gauge, Radar, ShieldCheck, Sparkles, Waves } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  { icon: Gauge, title: "Launch dynamics", text: "Torque vectoring, thermal prediction, and adaptive damping work as one system." },
  { icon: BatteryCharging, title: "Rapid endurance", text: "Range-first battery architecture with high-rate charging and smart preconditioning." },
  { icon: Radar, title: "Sensor clarity", text: "Assistance layers remain quiet until they can meaningfully reduce workload." },
  { icon: Sparkles, title: "Material language", text: "Carbon, glass, brushed metal, and soft-touch surfaces create a precise interior feel." },
  { icon: ShieldCheck, title: "Structural calm", text: "A rigid safety cell supports confident handling and low cabin vibration." },
  { icon: Waves, title: "Acoustic polish", text: "Noise shaping keeps the drive serene without disconnecting the driver from the road." }
];

export function FeaturesGrid() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">Interactive cards</p>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl text-white sm:text-6xl">Digital detail, physical desire.</h2>
          </div>
          <p className="max-w-md leading-7 text-white/58">
            Hover states and restrained motion create a premium interface rhythm without turning the page into noise.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            return (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
