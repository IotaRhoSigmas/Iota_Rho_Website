import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const CHAPTER_EMAIL = process.env.CONTACT_TO_EMAIL ?? "immortalsigmas@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

const requestsByAddress = new Map<string, number[]>();

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function isRateLimited(address: string) {
  const now = Date.now();
  const recentRequests = (requestsByAddress.get(address) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) return true;

  recentRequests.push(now);
  requestsByAddress.set(address, recentRequests);
  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Contact email is missing RESEND_API_KEY or CONTACT_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please email the chapter directly." },
      { status: 503 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const address = forwardedFor || "local";

  if (isRateLimited(address)) {
    return NextResponse.json(
      { error: "Too many messages were sent. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";

  // Silently accept bot submissions that fill the hidden honeypot field.
  if (website) return NextResponse.json({ success: true });

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!message || message.length > 3000) {
    return NextResponse.json(
      { error: "Please enter a message of 3,000 characters or fewer." },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": randomUUID(),
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [CHAPTER_EMAIL],
      reply_to: email,
      subject: `Iota Rho website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<h2>New Iota Rho website inquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
    }),
  });

  const result = (await resendResponse.json().catch(() => null)) as
    | { id?: string; message?: string }
    | null;

  if (!resendResponse.ok || !result?.id) {
    console.error("Resend contact email failed:", resendResponse.status, result);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again or email the chapter directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, reference: result.id.slice(-8) });
}
