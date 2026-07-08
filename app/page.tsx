import { Hero } from "@/components/Hero";
import { DivisionPanels } from "@/components/DivisionPanels";
import { StatsBand } from "@/components/StatsBand";
import { WhyStrutum } from "@/components/WhyStrutum";
import { Industries } from "@/components/Industries";
import { HowWeWork } from "@/components/HowWeWork";
import { FeaturedInsights } from "@/components/FeaturedInsights";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DivisionPanels />
        <StatsBand />
        <WhyStrutum />
        <Industries />
        <HowWeWork />
        <FeaturedInsights />
        <FinalCTA />
      </main>
    </>
  );
}
