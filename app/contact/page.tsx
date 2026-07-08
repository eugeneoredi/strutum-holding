import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Strutum Holding",
  description:
    "Get in touch with Strutum Holding for CSR & ESG or Accounting, Taxation & Advisory inquiries. All inquiries are treated confidentially.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's start a conversation."
          subtitle="Tell us about your organization and what you need — whether that's a CSR/ESG program, financial advisory, or both."
        />
        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[0.85fr_1.3fr] gap-8 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
