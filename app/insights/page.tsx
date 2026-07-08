import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InsightsList } from "@/components/InsightsList";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Insights | Strutum Holding",
  description:
    "Perspective on CSR, ESG, tax compliance, business advisory, governance, sustainability reporting and investment into Africa.",
};

export default function InsightsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Insights"
          title="Perspective on impact, tax and Africa-focused growth."
          subtitle="Articles and reports on CSR, ESG, tax compliance, business advisory and sustainability reporting for organizations operating across Africa."
        />
        <InsightsList />
        <FinalCTA />
      </main>
    </>
  );
}
