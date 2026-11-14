import { NextResponse } from "next/server";
import { EmailNotConfiguredError, sendLeadEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { leadSchema, toFieldErrors } from "@/lib/validation";

export const runtime = "nodejs";

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  if (!rateLimit(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing, but send nothing.
  if (typeof body === "object" && body !== null && "website" in body) {
    const trap = (body as { website?: unknown }).website;
    if (typeof trap === "string" && trap.trim() !== "") {
      return NextResponse.json({ ok: true });
    }
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const errors = toFieldErrors(parsed.error.issues);
    const fieldErrors = Object.fromEntries(Object.entries(errors).map(([key, message]) => [key, [message]]));
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fieldErrors }, { status: 422 });
  }

  try {
    await sendLeadEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      console.error("Lead received but SMTP is not configured. Set SMTP_* variables.");
    } else {
      console.error("Failed to send lead email", error);
    }
    return NextResponse.json(
      {
        ok: false,
        error: "We could not send your request right now. Please try again, or reach us on WhatsApp or by email.",
      },
      { status: 500 },
    );
  }
}
