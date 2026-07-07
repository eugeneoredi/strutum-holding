import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-navy text-warm-white p-8 lg:p-10 h-fit">
      <p className="font-display text-[20px]">Get in Touch</p>
      <p className="mt-3 text-[13.5px] leading-relaxed text-warm-white/65">
        Reach out directly, or use the form to describe what you need — a
        member of the relevant division will respond.
      </p>

      <div className="mt-8 space-y-5">
        <a
          href="mailto:hello@strutumholding.com"
          className="flex items-start gap-3 group"
        >
          <Mail size={18} className="mt-0.5 text-gold shrink-0" />
          <span className="text-[14px] group-hover:text-gold transition-colors">
            hello@strutumholding.com
          </span>
        </a>
        <a href="tel:+254700000000" className="flex items-start gap-3 group">
          <Phone size={18} className="mt-0.5 text-gold shrink-0" />
          <span className="text-[14px] group-hover:text-gold transition-colors">
            +254 700 000 000
          </span>
        </a>
        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 text-gold shrink-0" />
          <span className="text-[14px] text-warm-white/70">
            Nairobi, Kenya — office address to be added
          </span>
        </div>
      </div>

      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 text-[12px] font-semibold tracking-wider text-gold hover:bg-gold hover:text-navy transition-colors"
      >
        MESSAGE US ON WHATSAPP
      </a>

      <div className="mt-8 flex items-start gap-2.5 border-t border-white/10 pt-6 text-[12.5px] text-warm-white/60">
        <ShieldCheck size={16} className="mt-0.5 text-gold shrink-0" />
        All inquiries are treated confidentially.
      </div>
    </div>
  );
}
