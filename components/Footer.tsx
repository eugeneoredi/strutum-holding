import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-emerald text-warm-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="dark" size="sm" />
          <p className="mt-5 text-[14px] leading-relaxed text-warm-white/65 max-w-xs">
            Strutum Holding helps organizations operate responsibly, comply
            confidently and create measurable impact across Africa.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[15px] tracking-wide text-gold mb-4">Divisions</h4>
          <ul className="space-y-2.5 text-[13px] text-warm-white/70">
            <li><Link href="/strutum-impact" className="hover:text-gold transition-colors">Strutum Impact</Link></li>
            <li><Link href="/strutum-advisory" className="hover:text-gold transition-colors">Strutum Advisory</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">All Services</Link></li>
            <li><Link href="/industries" className="hover:text-gold transition-colors">Industries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[15px] tracking-wide text-gold mb-4">Company</h4>
          <ul className="space-y-2.5 text-[13px] text-warm-white/70">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/our-impact" className="hover:text-gold transition-colors">Our Impact</Link></li>
            <li><Link href="/insights" className="hover:text-gold transition-colors">Insights</Link></li>
            <li><Link href="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[15px] tracking-wide text-gold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-[13px] text-warm-white/70">
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 text-gold shrink-0" />
              <span>hello@strutumholding.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 text-gold shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-gold shrink-0" />
              <span>Nairobi, Kenya — serving clients across Africa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-warm-white/50">
          <p>© {new Date().getFullYear()} Strutum Holding. All rights reserved.</p>
          <p>All inquiries are treated confidentially.</p>
        </div>
      </div>
    </footer>
  );
}
