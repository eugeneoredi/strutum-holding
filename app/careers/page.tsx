import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { CareersIntro } from "@/components/CareersIntro";
import { OpenRoles } from "@/components/OpenRoles";
import { CareersApplicationForm } from "@/components/CareersApplicationForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Strutum Holding",
  description:
    "Join Strutum Holding as a full-time team member, field associate, independent consultant, or intern across our Impact and Advisory divisions.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Build your career across Africa."
          subtitle="Strutum Holding brings together people who want institutional-standard work with genuine local impact."
        />
        <CareersIntro />
        <OpenRoles />
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4 text-center">
              APPLY
            </p>
            <h2 className="font-display text-[28px] lg:text-[34px] leading-[1.2] text-charcoal text-balance text-center max-w-xl mx-auto mb-12">
              Submit a general application.
            </h2>
            <CareersApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
