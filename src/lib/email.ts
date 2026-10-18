import { Resend } from "resend";
import { site } from "./content";

// -----------------------------------------------------------------------
// Email alerts via Resend (https://resend.com).
//
// Setup (takes about 5 minutes):
//   1. Create a free Resend account.
//   2. Verify a sending domain (or use their shared onboarding domain while
//      testing — see their dashboard for the exact address to use).
//   3. Copy your API key into .env.local as RESEND_API_KEY=re_xxxxxxxx
//   4. Set NOTIFY_EMAIL in .env.local to the inbox that should receive form
//      alerts (defaults to the general inbox in src/lib/content.ts).
//
// Until RESEND_API_KEY is set, submissions are still validated and saved to
// the database — the site just logs a warning instead of emailing, so local
// development works with zero configuration.
// -----------------------------------------------------------------------

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_ADDRESS = process.env.NOTIFY_FROM_EMAIL || "TC-Learning Studioz <onboarding@resend.dev>";
const TO_ADDRESS = process.env.NOTIFY_EMAIL || site.email.general;

type NotifyArgs = {
  subject: string;
  heading: string;
  rows: { label: string; value: string }[];
};

export async function sendNotificationEmail({ subject, heading, rows }: NotifyArgs) {
  if (!resend) {
    console.warn(
      `[email] RESEND_API_KEY not set — skipping email send for "${subject}". Submission was still saved to the database.`
    );
    return { sent: false as const };
  }

  const rowsHtml = rows
    .map(
      (r) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#383838;vertical-align:top;white-space:nowrap;">${escapeHtml(
          r.label
        )}</td><td style="padding:8px 12px;color:#0c0c0c;">${escapeHtml(r.value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <div style="background:#3C1053;padding:20px 24px;">
        <span style="color:#ffffff;font-size:18px;font-weight:700;">${escapeHtml(site.name)}</span>
      </div>
      <div style="padding:24px;border:1px solid #e5e1e8;border-top:none;">
        <h1 style="font-size:18px;margin:0 0 16px;color:#0c0c0c;">${escapeHtml(heading)}</h1>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rowsHtml}</table>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject,
      html,
    });
    return { sent: true as const, result };
  } catch (err) {
    console.error("[email] Failed to send notification:", err);
    return { sent: false as const, error: err };
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
