export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "measurable-csr-programs-africa",
    category: "CSR / ESG",
    title: "How Corporates Can Build Measurable CSR Programs in Africa",
    excerpt:
      "A practical framework for moving from goodwill CSR spending to programs with defined KPIs and verifiable outcomes.",
    date: "2026",
    body: [
      "Many corporate CSR programs in Africa begin with genuine intent but struggle to demonstrate results a board can point to. The gap is rarely a lack of funding — it's a lack of structure. Without defined indicators from the outset, a program that spent responsibly can still be impossible to report on convincingly.",
      "A measurable program starts with a theory of change: what specific outcome is the investment meant to produce, for whom, and by when. From there, indicators should be chosen that can actually be collected in the field — not aspirational metrics that sound good in a strategy deck but have no realistic collection method.",
      "Verification matters as much as measurement. Independent field coordination, photographic evidence, and beneficiary sign-off create an audit trail that protects the organization if a donor, regulator, or journalist asks hard questions later.",
      "Finally, reporting cadence should be fixed in advance — quarterly updates and an annual summary, at minimum — so results are compiled continuously rather than reconstructed under deadline pressure at year end.",
    ],
  },
  {
    slug: "tax-compliance-checklist-kenya",
    category: "Tax",
    title: "Tax Compliance Checklist for Companies Operating in Kenya",
    excerpt:
      "The recurring statutory deadlines and filings every company operating in Kenya needs on its calendar.",
    date: "2026",
    body: [
      "Companies operating in Kenya carry a recurring set of statutory obligations that are easy to underestimate until a deadline is missed. A structured compliance calendar is the simplest way to avoid penalties and reputational risk.",
      "At minimum, this includes monthly PAYE remittance for staff payroll, VAT filing where applicable, and NSSF and NHIF/SHIF statutory deductions processed every pay cycle. Annual obligations include corporate income tax returns and, depending on structure, transfer pricing documentation for related-party transactions.",
      "Beyond filing, companies should maintain management accounts that reconcile to filed figures — discrepancies between internal records and statutory filings are one of the most common triggers for closer regulatory scrutiny.",
      "Organizations expanding into Kenya for the first time are well served by an outsourced finance partner who can own this calendar directly, rather than layering it onto an already-stretched internal finance function.",
    ],
  },
  {
    slug: "local-corporate-infrastructure-africa",
    category: "Business",
    title: "Why Multinationals Need Local Corporate Infrastructure in Africa",
    excerpt:
      "Head-office strategy alone rarely survives contact with local regulatory and operational realities.",
    date: "2026",
    body: [
      "A CSR strategy or financial control framework designed at head office frequently assumes a level of local infrastructure that doesn't exist on the ground. The result is a plan that looks complete on paper and stalls in execution.",
      "Local corporate infrastructure means more than a registered entity — it means field relationships, an understanding of regional regulatory nuance, and a partner capable of translating strategy into activity that can actually be delivered and verified.",
      "This is particularly true for CSR and ESG programs, where community engagement depends on trust built over time, and for financial compliance, where statutory requirements vary meaningfully by country and change without much notice.",
      "Multinationals that build or partner for this infrastructure early tend to avoid the more expensive alternative: discovering the gap only after a program has already underperformed or a compliance issue has already surfaced.",
    ],
  },
  {
    slug: "annual-impact-outlook-east-africa",
    category: "Reports",
    title: "Annual Impact Outlook: East Africa",
    excerpt:
      "A downloadable overview of CSR and ESG trends across East Africa's corporate and development sectors.",
    date: "2026",
    body: [
      "This report is in preparation and will summarize CSR, ESG and development-sector trends observed across East Africa over the past year, along with an outlook for organizations planning programs in the region.",
      "A downloadable PDF version will be linked here once the report is finalized.",
    ],
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug);
}
