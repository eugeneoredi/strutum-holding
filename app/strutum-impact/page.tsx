import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ImpactServicesGrid } from "@/components/ImpactServicesGrid";
import { ImpactProcessTimeline } from "@/components/ImpactProcessTimeline";
import { ImpactReporting } from "@/components/ImpactReporting";
import { DivisionCTA } from "@/components/DivisionCTA";

export const metadata: Metadata = {
  title: "Strutum Impact | CSR & ESG Solutions | Strutum Holding",
  description:
    "Strutum Impact designs, implements, monitors and reports CSR and ESG programs across Africa — structured, measurable and reportable impact for institutional clients.",
};

export default function StrutumImpactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Strutum Impact"
          title="CSR & ESG infrastructure for Africa."
          subtitle="We design, implement, monitor and report CSR and ESG programs that create measurable social, environmental and economic value — not just charity, but organized and reportable impact."
        />
        <ProblemSolution />
        <ImpactServicesGrid />
        <ImpactProcessTimeline />
        <ImpactReporting />
        <DivisionCTA
          title="Request an Impact Consultation"
          subtitle="Tell us about your CSR or ESG objectives and we'll outline how a structured program could work for your organization."
          buttonText="Request an Impact Consultation"
          href="/contact?division=impact"
          tone="emerald"
        />
      </main>
    </>
  );
}
