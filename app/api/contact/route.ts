import { NextResponse } from "next/server";
import { Resend } from "resend";

// Real email delivery via Resend. Requires two env vars — see
// .env.local.example for setup instructions.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, country, service, message } = body;

    if (!name || !organization || !email || !country || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error(
        "Email not sent — RESEND_API_KEY or CONTACT_TO_EMAIL missing from environment."
      );
      console.log("Inquiry received (not emailed):", body);
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      // onboarding@resend.dev works without domain verification, but only
      // delivers to the email address you signed up to Resend with. Once
      // strutumholding.com is verified in Resend, change this to something
      // like "Strutum Website <noreply@strutumholding.com>".
      from: "Strutum Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name} (${organization})`,
      text: [
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Country: ${country}`,
        `Service Needed: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
