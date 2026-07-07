import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { INSIGHTS, getInsight } from "@/lib/insights-data";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Strutum Holding Insights`,
    description: insight.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-warm-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 pb-14 lg:pt-20 lg:pb-16">
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-5">
              {insight.category.toUpperCase()} · {insight.date}
            </p>
            <h1 className="font-display text-balance text-[30px] sm:text-[38px] leading-[1.15]">
              {insight.title}
            </h1>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 lg:py-20">
            {insight.body.map((para, i) => (
              <p
                key={i}
                className="text-[15.5px] leading-relaxed text-charcoal/85 mb-6 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
