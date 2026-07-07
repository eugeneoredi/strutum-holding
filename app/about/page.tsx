import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { CompanyStory } from "@/components/CompanyStory";
import { MissionVision } from "@/components/MissionVision";
import { CoreValues } from "@/components/CoreValues";
import { Leadership } from "@/components/Leadership";
import { Governance } from "@/components/Governance";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Strutum Holding",
  description:
    "Strutum Holding is a Pan-African professional services group helping organizations operate responsibly, comply confidently and create measurable impact across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="An operating partner built for institutional standards."
          subtitle="Strutum Holding exists to help organizations establish, manage, comply, grow and create measurable impact across Africa."
        />
        <CompanyStory />
        <MissionVision />
        <CoreValues />
        <Leadership />
        <Governance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
