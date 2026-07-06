# Strutum Holding — Website

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## What's built so far
- Design system in `app/globals.css` (colors, fonts as `@theme` tokens)
- `components/Header.tsx` — sticky nav with Services dropdown + mobile menu
- `components/Hero.tsx` — headline, subtext, CTAs, abstract skyline signature graphic
- `components/DivisionPanels.tsx` — Strutum Impact / Strutum Advisory split panels
- `components/StatsBand.tsx` — trust/metrics strip
- `components/WhyStrutum.tsx`, `Industries.tsx`, `HowWeWork.tsx`, `FeaturedInsights.tsx`, `FinalCTA.tsx`
- `components/Footer.tsx`
- Assembled on `app/page.tsx` (Home page only, per the brief's section order)

## Still to build (per brief sitemap)
About Us, Services overview, Strutum Impact, Strutum Advisory, Industries,
Our Impact, Insights, Careers, Contact — each has its own section spec in
the brief (section 6).

## Before launch
- **Logo**: `components/Logo.tsx` is a placeholder mark. Swap in the client's
  actual metallic crown/eagle asset (SVG or transparent PNG) — do not
  redesign it, per the brief.
- **Photography**: the hero currently uses an abstract SVG skyline instead
  of a licensed photo (avoids using unlicensed stock imagery). Replace with
  a real Nairobi/African skyline photo the client has rights to.
- Wire up the contact form to an email/DB endpoint (brief section 8).
- Add Google Analytics / Search Console (brief section 9).
