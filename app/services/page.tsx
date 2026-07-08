import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DivisionMessageCards } from "@/components/DivisionMessageCards";
import { ServiceCategories } from "@/components/ServiceCategories";
import { WorkingTogether } from "@/components/WorkingTogether";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Services | Strutum Holding",
  description:
    "Strutum Holding delivers two integrated service pillars across Africa: Strutum Impact (CSR & ESG) and Strutum Advisory (Accounting, Taxation & Consulting).",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Services"
          title="Two disciplines. One institutional standard."
          subtitle="Strutum Holding delivers integrated solutions across Africa through two dedicated divisions — each built to the same standard of structure, compliance and measurable outcomes."
        />
        <DivisionMessageCards />
        <ServiceCategories />
        <WorkingTogether />
        <FinalCTA />
      </main>
    </>
  );
}
