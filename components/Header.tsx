"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Strutum Impact", href: "/strutum-impact" },
      { label: "Strutum Advisory", href: "/strutum-advisory" },
      { label: "CSR & ESG", href: "/strutum-impact#csr-esg" },
      { label: "Accounting & Tax", href: "/strutum-advisory#accounting-tax" },
      { label: "CFO Services", href: "/strutum-advisory#cfo-services" },
      { label: "Monitoring & Evaluation", href: "/strutum-impact#monitoring-evaluation" },
      { label: "Compliance Advisory", href: "/strutum-advisory#compliance-advisory" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Our Impact", href: "/our-impact" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Robust scroll lock for iOS Safari: overflow:hidden alone is not
  // reliable there, so pin the body in place and restore scroll position
  // on close.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Strutum Holding home" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[13px] tracking-wide font-medium text-warm-white/85 hover:text-gold transition-colors"
                  aria-expanded={servicesOpen}
                >
                  {item.label.toUpperCase()}
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                    <div className="bg-navy-2 border border-white/10 rounded-md shadow-2xl py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-5 py-2.5 text-[13px] text-warm-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide font-medium text-warm-white/85 hover:text-gold transition-colors"
              >
                {item.label.toUpperCase()}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-gold bg-gold px-5 py-2.5 text-[12px] font-semibold tracking-wider text-navy hover:bg-transparent hover:text-gold transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>

        <button
          className="lg:hidden text-warm-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Single full-screen overlay (covers the header too) — avoids the
          seam/gap that occurs on iOS Safari when the menu is a separate
          fixed block stacked below a sticky header, since the address bar
          collapsing/expanding shifts viewport height mid-scroll. */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-navy flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
            <Link href="/" aria-label="Strutum Holding home" onClick={() => setOpen(false)}>
              <Logo variant="dark" />
            </Link>
            <button
              className="text-warm-white"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pb-10 overflow-y-auto overscroll-contain flex-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-[13px] tracking-wide font-medium text-warm-white/85 hover:text-gold border-b border-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label.toUpperCase()}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block py-2 text-[12px] text-warm-white/60 hover:text-gold"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex justify-center rounded-sm border border-gold bg-gold px-5 py-3 text-[12px] font-semibold tracking-wider text-navy"
              onClick={() => setOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
