import { NextResponse } from "next/server";
import { enrollSchema } from "@/lib/validations";
import { insertEnrollSubmission } from "@/lib/db";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = enrollSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { firstName, lastName, email, phone, dob, program, hearAbout, motivation } = parsed.data;

  try {
    insertEnrollSubmission({ firstName, lastName, email, phone, dob, program, hearAbout, motivation });
  } catch (err) {
    console.error("[api/enroll] Failed to save submission:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your application. Please try again." },
      { status: 500 }
    );
  }

  await sendNotificationEmail({
    subject: `New application: ${firstName} ${lastName} — ${program}`,
    heading: "New student application",
    rows: [
      { label: "Name", value: `${firstName} ${lastName}` },
      { label: "Email", value: email },
      { label: "Phone", value: phone },
      { label: "Date of birth", value: dob },
      { label: "Program", value: program },
      { label: "Heard about us via", value: hearAbout || "—" },
      { label: "Motivation", value: motivation },
    ],
  });

  return NextResponse.json({ ok: true });
}
