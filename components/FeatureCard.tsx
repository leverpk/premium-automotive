"use client";

import { LucideIcon } from "lucide-react";
import { PointerEvent, useRef } from "react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function FeatureCard({ icon: Icon, title, text }: FeatureCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const card = cardRef.current;

    if (!card || window.matchMedia("(max-width: 640px), (prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="feature-card group relative min-h-[232px] overflow-hidden bg-midnight p-7 transition duration-300"
    >
      <div className="relative z-10 flex h-11 w-11 items-center justify-center border border-ice/12 bg-ice/5 text-electric transition group-hover:border-electric group-hover:bg-electric group-hover:text-ink">
        <Icon size={21} strokeWidth={1.7} />
      </div>
      <h3 className="relative z-10 mt-8 text-xl font-semibold text-ice">{title}</h3>
      <p className="relative z-10 mt-4 leading-7 text-ice/56">{text}</p>
    </article>
  );
}
