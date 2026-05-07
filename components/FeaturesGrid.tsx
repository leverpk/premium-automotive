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
    <section className="bg-ink py-28 sm:py-40">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ice/12 pt-10 md:grid-cols-[1fr_0.62fr] md:items-end">
          <div>
            <p className="eyebrow">Interactive detail</p>
            <h2 className="display-heading mt-5 text-5xl leading-none sm:text-7xl">Digital restraint, physical desire.</h2>
          </div>
          <p className="editorial-copy max-w-md md:justify-self-end">
            Hover states stay tactile and precise, revealing systems thinking without turning the campaign into a tech demo.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-ice/12 sm:grid-cols-2 lg:grid-cols-3">
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
