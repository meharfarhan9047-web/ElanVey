import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhook) return NextResponse.json({ error: "Google Sheets is not configured" }, { status: 503 });
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, source: "elanvey-waitlist", submittedAt: new Date().toISOString() }), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "Google Sheets rejected the signup" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save signup" }, { status: 500 });
  }
}
