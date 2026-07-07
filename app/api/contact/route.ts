import { NextResponse } from "next/server";

// PLACEHOLDER API ROUTE
// This currently validates and logs the submission only. Before launch,
// wire this up to a real email/CRM service — e.g. Resend, SendGrid, or a
// database insert — using environment variables for API keys (never commit
// keys to the repo). Example with Resend is sketched in the comment below.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, email, country, service, message } = body;

    if (!name || !organization || !email || !country || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: replace with real delivery, e.g.:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Strutum Website <noreply@strutumholding.com>",
    //   to: "hello@strutumholding.com",
    //   subject: `New inquiry from ${name} (${organization})`,
    //   text: JSON.stringify(body, null, 2),
    // });
    console.log("New contact inquiry:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
