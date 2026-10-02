import { NextRequest, NextResponse } from "next/server";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const TO = process.env.LEAD_INBOX || "koolsharmafamily@gmail.com";
const FROM = process.env.LEAD_FROM || "onboarding@resend.dev";
const BRAND = site.name;
const WHATSAPP_DISPLAY = site.phoneDisplay;

// Per-instance memory cooldown
const seen = new Map<string, number>();

function tooFrequent(ip: string): boolean {
  const now = Date.now();
  seen.forEach((t, k) => {
    if (now - t > 60_000) seen.delete(k);
  });
  const last = seen.get(ip);
  if (last && now - last < 20_000) return true;
  seen.set(ip, now);
  return false;
}

const esc = (s: unknown = "") =>
  String(s || "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c));

function failResponse(wantsJson: boolean, status: number, message: string, userTypedDetails: string = "") {
  if (wantsJson) {
    return NextResponse.json({ ok: false, error: message }, { status });
  }

  const waMsg = `Hi Kulvir, I tried submitting the website form but hit an issue: ${message}. Here are my details: ${userTypedDetails}`;
  const waLink = getWhatsAppUrl(waMsg);

  const html = `<!doctype html><html lang="en-IN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Form could not be sent | ${BRAND}</title>
<style>
body{margin:0;background:#FBFAF6;color:#17161C;font:16px/1.6 system-ui,-apple-system,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}
.box{max-width:34rem;background:#FFFFFF;border:1px solid #E6E2DA;border-radius:18px;padding:36px;box-shadow:0 8px 16px -8px rgba(23,22,28,.08)}
h1{font-size:1.75rem;margin:0 0 1rem;font-weight:700;line-height:1.2}
p{color:#55515E;margin:0 0 1.25rem}
a.btn{display:inline-flex;align-items:center;padding:12px 24px;background:#25D366;color:#17161C;text-decoration:none;font-weight:600;font-size:15px;border-radius:12px}
a.back{color:#35309A;text-decoration:none;font-size:14px;font-weight:500;display:inline-block;margin-top:1.5rem}
</style></head><body><div class="box">
<h1>Submission not sent</h1>
<p>${esc(message)}</p>
<p><a class="btn" href="${waLink}">Message Kulvir directly on WhatsApp</a></p>
<p><a class="back" href="/contact">← Return to the contact page</a></p>
</div></body></html>`;

  return new NextResponse(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

async function sendResendEmail(payload: {
  from: string;
  to: string[];
  reply_to?: string;
  subject: string;
  html: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "no-key" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, reason: `resend-${res.status}`, detail: await res.text() };
    }
    return { ok: true };
  } catch (err: unknown) {
    return { ok: false, reason: "network-error", detail: String(err) };
  }
}

async function sendWebhookBackup(payload: Record<string, unknown>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return { ok: false, reason: "no-webhook" };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { ok: res.ok };
  } catch (err: unknown) {
    return { ok: false, reason: "webhook-failed", detail: String(err) };
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  const contentType = req.headers.get("content-type") || "";
  const accept = req.headers.get("accept") || "";
  const wantsJson = accept.includes("application/json") || contentType.includes("application/json");

  try {
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }
  } catch {
    return failResponse(wantsJson, 400, "Invalid form submission data.");
  }

  // Honeypot check
  if (body["company-website"] || body["website-url"]) {
    return wantsJson
      ? NextResponse.json({ ok: true })
      : NextResponse.redirect(new URL("/thanks", req.url), 303);
  }

  // Minimum render time check (2.5s)
  const rendered = Number(body["render-time"]);
  if (rendered && Date.now() - rendered < 2500) {
    return failResponse(wantsJson, 429, "That was submitted unusually fast. Please try once more.");
  }

  // IP cooldown
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooFrequent(ip)) {
    return failResponse(
      wantsJson,
      429,
      "You have just sent an enquiry. Please wait a moment before sending another."
    );
  }

  // Field validation
  const name = String(body.name || "").trim();
  const business = String(body.business || "").trim();
  const phone = String(body.phone || "").trim();
  const service = String(body.service || "Not sure yet").trim();
  const problem = String(body.problem || body.notes || "").trim();
  const city = String(body.city || "").trim();
  const email = String(body.email || "").trim();

  const userTypedString = `Name: ${name}, Business: ${business}, Phone: ${phone}, Service: ${service}`;

  if (!name) {
    return failResponse(wantsJson, 400, "Please enter your name.", userTypedString);
  }
  if (!business) {
    return failResponse(wantsJson, 400, "Please enter your business name.", userTypedString);
  }
  if (!phone || phone.length < 8) {
    return failResponse(wantsJson, 400, "Please enter a valid phone or WhatsApp number.", userTypedString);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return failResponse(wantsJson, 400, "Please enter a valid email address.", userTypedString);
  }

  const rows = [
    ["Name", name],
    ["Business", business],
    ["Phone / WhatsApp", phone],
    ["Service Needed", service],
    ["Notes / Bottleneck", problem],
    ["City", city],
    ["Email", email],
  ].filter(([, v]) => String(v || "").trim());

  const tableHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#55515E;vertical-align:top;font-size:14px;">${k}</td><td style="padding:6px 0;font-weight:500;font-size:14px;color:#17161C;">${esc(
          v
        )}</td></tr>`
    )
    .join("");

  const submissionPayload = {
    ...body,
    name,
    business,
    phone,
    service,
    problem,
    city,
    email,
    ip,
    timestamp: new Date().toISOString(),
  };

  // Always log to Vercel logs so leads can be retrieved
  console.log("[lead:enquiry]", JSON.stringify(submissionPayload));

  // 1. Try sending email alert to Kulvir
  const emailAlert = await sendResendEmail({
    from: `${BRAND} <${FROM}>`,
    to: [TO],
    reply_to: email || undefined,
    subject: `New Tech Check-up Enquiry — ${business} (${name})`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#17161C;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#35309A;font-weight:700;">
        New Enquiry from Website
      </p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">${tableHtml}</table>
      <p style="margin:16px 0 0;font-size:13px;color:#6F6A78;">
        Phone/WhatsApp: <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}">${phone}</a>
      </p>
    </div>`,
  });

  // 2. If enquirer provided an email, send acknowledgement
  if (email && emailAlert.ok) {
    await sendResendEmail({
      from: `${BRAND} <${FROM}>`,
      to: [email],
      subject: `Thanks — we have received your enquiry for ${business}`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#17161C;">
        <p>Hello ${esc(name.split(" ")[0])},</p>
        <p>Thank you for reaching out about <strong>${esc(business)}</strong>.</p>
        <p>Kulvir Sharma has received your enquiry and will reply personally on WhatsApp (${esc(phone)}) or email within one working day.</p>
        <p>If you'd like to talk right away, message Kulvir on WhatsApp: <a href="https://wa.me/${site.whatsappNumber}">${WHATSAPP_DISPLAY}</a>.</p>
        <p style="margin-top:24px;">Kulvir Sharma<br><span style="color:#6F6A78;">Founder, ${BRAND} · Nagpur</span></p>
      </div>`,
    });
  }

  // 3. Backup to Google Sheet webhook if configured
  const webhookResult = await sendWebhookBackup(submissionPayload);

  // Success if either email or webhook succeeded
  const channelSucceeded = emailAlert.ok || webhookResult.ok;

  if (!channelSucceeded) {
    // If no provider is configured, do not fake success
    const failureReason = emailAlert.reason === "no-key" && webhookResult.reason === "no-webhook"
      ? `Our automated email inbox is currently being connected.`
      : `Delivery network failed to dispatch the lead.`;

    const message = `${failureReason} Please send your message directly to Kulvir on WhatsApp at ${WHATSAPP_DISPLAY}.`;
    return failResponse(wantsJson, 502, message, userTypedString);
  }

  if (wantsJson) {
    return NextResponse.json({
      ok: true,
      message: `Thanks, ${name.split(" ")[0]}. Kulvir will reply on WhatsApp within one working day.`,
    });
  }

  return NextResponse.redirect(new URL("/thanks", req.url), 303);
}
