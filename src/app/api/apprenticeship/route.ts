import { NextResponse } from "next/server";
import { apprenticeshipSchema } from "@/lib/validations";
import { insertApprenticeshipSubmission } from "@/lib/db";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = apprenticeshipSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { companyName, contactName, email, phone, sector, apprenticeCount, message } = parsed.data;

  try {
    insertApprenticeshipSubmission({ companyName, contactName, email, phone, sector, apprenticeCount, message });
  } catch (err) {
    console.error("[api/apprenticeship] Failed to save submission:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your inquiry. Please try again." },
      { status: 500 }
    );
  }

  await sendNotificationEmail({
    subject: `New employer partnership inquiry: ${companyName}`,
    heading: "New employer partnership inquiry",
    rows: [
      { label: "Company", value: companyName },
      { label: "Contact person", value: contactName },
      { label: "Email", value: email },
      { label: "Phone", value: phone || "—" },
      { label: "Sector", value: sector },
      { label: "Apprentices requested", value: apprenticeCount },
      { label: "Message", value: message || "—" },
    ],
  });

  return NextResponse.json({ ok: true });
}
