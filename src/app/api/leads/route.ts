import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const leadsPath = path.join(process.cwd(), ".data", "leads.json");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    await fs.mkdir(path.dirname(leadsPath), { recursive: true });
    let leads: Array<{ email: string; createdAt: string }> = [];
    try { leads = JSON.parse(await fs.readFile(leadsPath, "utf8")); } catch { /* first lead */ }
    if (!leads.some((lead) => lead.email === email)) {
      leads.push({ email, createdAt: new Date().toISOString() });
      await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2), "utf8");
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save lead" }, { status: 500 });
  }
}
