"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const CATEGORY_OPTIONS = [
  "Full-Time Role",
  "Tasker / Field Associate",
  "Independent Consultant",
  "Internship",
];

function inputClass() {
  return "w-full bg-white border border-charcoal/15 px-4 py-3 text-[14px] text-charcoal placeholder:text-gray/50 focus:outline-none focus:border-gold transition-colors";
}

export function CareersApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-ivory border border-charcoal/10 p-10 text-center max-w-2xl mx-auto">
        <CheckCircle2 size={32} className="mx-auto text-gold" />
        <h3 className="font-display text-[22px] text-charcoal mt-4">
          Thank you — your application has been received.
        </h3>
        <p className="mt-2 text-[14px] text-gray max-w-sm mx-auto">
          We'll keep your details on file and reach out when a suitable
          opportunity opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-charcoal/10 p-8 lg:p-10 max-w-2xl mx-auto"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[12px] font-medium text-charcoal">Full Name *</label>
          <input required name="name" type="text" className={`${inputClass()} mt-2`} />
        </div>
        <div>
          <label className="text-[12px] font-medium text-charcoal">Email *</label>
          <input required name="email" type="email" className={`${inputClass()} mt-2`} />
        </div>
        <div>
          <label className="text-[12px] font-medium text-charcoal">Phone</label>
          <input name="phone" type="tel" className={`${inputClass()} mt-2`} />
        </div>
        <div>
          <label className="text-[12px] font-medium text-charcoal">Category *</label>
          <select required name="category" defaultValue={CATEGORY_OPTIONS[0]} className={`${inputClass()} mt-2`}>
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-[12px] font-medium text-charcoal">
          CV / Portfolio Link
        </label>
        <input
          name="cvLink"
          type="url"
          placeholder="Link to your CV or LinkedIn profile"
          className={`${inputClass()} mt-2`}
        />
      </div>

      <div className="mt-5">
        <label className="text-[12px] font-medium text-charcoal">
          Tell us about yourself *
        </label>
        <textarea required name="message" rows={5} className={`${inputClass()} mt-2 resize-none`} />
      </div>

      {status === "error" && (
        <p className="mt-4 text-[13px] text-red-600">
          Something went wrong submitting your application. Please try
          again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wider text-navy hover:bg-gold-soft transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "SENDING..." : "SUBMIT APPLICATION"}
        <Send size={15} />
      </button>
    </form>
  );
}
