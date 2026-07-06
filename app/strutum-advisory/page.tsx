import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { AdvisoryProblem } from "@/components/AdvisoryProblem";
import { AdvisoryServicesGrid } from "@/components/AdvisoryServicesGrid";
import { RetainerPackages } from "@/components/RetainerPackages";
import { ComplianceChecklist } from "@/components/ComplianceChecklist";
import { DivisionCTA } from "@/components/DivisionCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strutum Advisory | Accounting, Tax & Corporate Advisory | Strutum Holding",
  description:
    "Strutum Advisory provides accounting, taxation, payroll, financial reporting and corporate advisory services that ensure compliance and support sustainable growth across Africa.",
};

export default function StrutumAdvisoryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Strutum Advisory"
          title="Accounting, taxation and corporate advisory for growth-focused organizations."
          subtitle="We provide expert financial, tax and business advisory services that ensure compliance, strengthen performance and support sustainable growth."
        />
        <AdvisoryProblem />
        <AdvisoryServicesGrid />
        <RetainerPackages />
        <ComplianceChecklist />
        <DivisionCTA
          title="Book a Financial Advisory Consultation"
          subtitle="Tell us where your finance function needs support and we'll outline the right level of engagement for your organization."
          buttonText="Book a Financial Advisory Consultation"
          href="/contact?division=advisory"
          tone="emerald"
        />
      </main>
      <Footer />
    </>
  );
}
