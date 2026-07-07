import { NextResponse } from "next/server";

// PLACEHOLDER API ROUTE — same caveat as /api/contact: this validates and
// logs only. Wire to a real email/ATS service before launch.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("New careers application:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
