import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DivisionPanels } from "@/components/DivisionPanels";
import { StatsBand } from "@/components/StatsBand";
import { WhyStrutum } from "@/components/WhyStrutum";
import { Industries } from "@/components/Industries";
import { HowWeWork } from "@/components/HowWeWork";
import { FeaturedInsights } from "@/components/FeaturedInsights";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
