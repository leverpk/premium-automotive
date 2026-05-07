import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { StickyProductShowcase } from "@/components/StickyProductShowcase";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SectionReveal><ScrollStorySection /></SectionReveal>
        <SectionReveal><StickyProductShowcase /></SectionReveal>
        <SectionReveal><FeaturesGrid /></SectionReveal>
        <SectionReveal><BeforeAfterSection /></SectionReveal>
        <SectionReveal><ProcessSection /></SectionReveal>
        <SectionReveal><PricingSection /></SectionReveal>
        <SectionReveal><FAQSection /></SectionReveal>
        <SectionReveal><ContactCTA /></SectionReveal>
      </main>
      <Footer />
    </>
  );
}
