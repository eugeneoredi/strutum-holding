import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ImpactMetricsBand } from "@/components/ImpactMetricsBand";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { ImpactReports } from "@/components/ImpactReports";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Impact | Strutum Holding",
  description:
    "Project results, metrics, reports and testimonials from Strutum Holding's work across Africa.",
};

export default function OurImpactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Impact"
          title="Proof, not promises."
          subtitle="Every engagement is measured against defined outcomes. As projects complete and clients agree to share results, they'll be documented here."
        />
        <ImpactMetricsBand />
        <CaseStudies />
        <Testimonials />
        <ImpactReports />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
