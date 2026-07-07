import { NextResponse } from "next/server";
import { Resend } from "resend";

// Real email delivery via Resend. Requires two env vars — see
// .env.local.example for setup instructions.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, category, cvLink, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error(
        "Email not sent — RESEND_API_KEY or CAREERS_TO_EMAIL missing from environment."
      );
      console.log("Application received (not emailed):", body);
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Strutum Careers <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New ${category} application from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Category: ${category}`,
        `CV / Portfolio: ${cvLink || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers form email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
