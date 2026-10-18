import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { insertContactSubmission } from "@/lib/db";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot tripped — pretend success, do nothing.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, subject, message } = parsed.data;

  try {
    insertContactSubmission({ name, email, subject, message });
  } catch (err) {
    console.error("[api/contact] Failed to save submission:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your message. Please try again." },
      { status: 500 }
    );
  }

  await sendNotificationEmail({
    subject: `New contact message: ${subject}`,
    heading: "New message from the website contact form",
    rows: [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Subject", value: subject },
      { label: "Message", value: message },
    ],
  });

  return NextResponse.json({ ok: true });
}
