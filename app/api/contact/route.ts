import { NextResponse } from "next/server";

/**
 * Quote-request handler.
 *
 * For now this validates the payload and logs it to the server console so the
 * form is fully wired end-to-end. It does NOT yet deliver email.
 *
 * TODO (see README): swap the console.log for a real transactional email
 * provider — e.g. Resend or SendGrid — and send to jerald@rainbowgate.co.in.
 * Example with Resend:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Website <quotes@rainbowgate.co.in>",
 *     to: "jerald@rainbowgate.co.in",
 *     subject: `Quote request from ${name}`,
 *     text: `${name} (${email})\n\n${message}`,
 *   });
 */

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  quantity?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Until a real email provider is wired up, log the lead so nothing is lost.
  console.log("[contact] New quote request", {
    name,
    company: data.company?.trim() || "—",
    email,
    phone: data.phone?.trim() || "—",
    quantity: data.quantity?.trim() || "—",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
