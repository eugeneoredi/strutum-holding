import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { IndustriesDetailGrid } from "@/components/IndustriesDetailGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industries | Strutum Holding",
  description:
    "Strutum Holding serves multinationals, technology companies, banks, NGOs, development agencies, manufacturers, telecoms, energy firms, healthcare, education and government partners across Africa.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Sectors that rely on structured, compliant delivery."
          subtitle="From multinational corporations to development agencies, our clients need a partner capable of handling large, structured, compliance-heavy assignments."
        />
        <IndustriesDetailGrid />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
