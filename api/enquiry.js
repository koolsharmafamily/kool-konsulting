/**
 * Lead capture endpoint (Vercel Serverless Function).
 *
 * Replaces Netlify Forms, which does not exist on Vercel. Handles both the
 * enquiry form (/contact) and the scorecard form (/scorecard).
 *
 * Behaviour:
 *   - validates required fields server-side, not just in the browser
 *   - rejects honeypot hits and submissions faster than a human can type
 *   - emails the founder, and sends the enquirer an acknowledgement
 *   - AJAX submits get JSON back; plain form posts (JavaScript disabled) get a
 *     303 redirect to /thanks so nothing is lost
 *
 * EMAIL DELIVERY needs one environment variable, RESEND_API_KEY.
 * Without it the function still accepts and validates the submission and logs
 * it (visible in Vercel → Logs) but cannot send mail — it returns a specific
 * error telling the visitor to use WhatsApp, rather than pretending it worked.
 * See YOUR-CHECKLIST.md step 3.
 */

const TO = process.env.LEAD_INBOX || "koolsharmafamily@gmail.com";
const FROM = process.env.LEAD_FROM || "onboarding@resend.dev";
const BRAND = "Kool Konsulting";
const WHATSAPP = "+91 88888 21351";

// Per-instance memory. Not a real rate limiter across a fleet, but it blunts
// the common case of one bot hammering one warm instance.
const seen = new Map();

function tooFrequent(ip) {
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > 60_000) seen.delete(k);
  const last = seen.get(ip);
  if (last && now - last < 20_000) return true;
  seen.set(ip, now);
  return false;
}

const esc = (s = "") =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

/**
 * Failure response. AJAX callers get JSON; a browser posting the form with
 * JavaScript disabled gets a readable page instead of raw JSON on screen.
 */
function fail(res, wantsJson, status, message) {
  if (wantsJson) return res.status(status).json({ ok: false, error: message });
  const wa = `https://wa.me/918888821351?text=${encodeURIComponent(
    "Hi Kulvir, I tried the website form and it did not go through."
  )}`;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(status).send(`<!doctype html><html lang="en-IN"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>That did not send | ${BRAND}</title>
<style>body{margin:0;background:#0d0c0a;color:#f2eee4;font:17px/1.6 system-ui,sans-serif;
display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}
.b{max-width:34rem}h1{font:400 2rem/1.15 Georgia,serif;margin:0 0 1rem}
p{color:#b0a99c;margin:0 0 1rem}a.btn{display:inline-block;margin-top:.5rem;padding:.85rem 1.6rem;
background:#f2eee4;color:#0d0c0a;text-decoration:none;font-weight:500;font-size:.95rem}
a.u{color:#cf8055}</style></head><body><div class="b">
<h1>That did not send.</h1><p>${esc(message)}</p>
<p><a class="btn" href="${wa}">Message us on WhatsApp</a></p>
<p style="margin-top:1.5rem"><a class="u" href="/contact">Back to the contact page</a></p>
</div></body></html>`);
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const raw = await new Promise((resolve) => {
    let d = "";
    req.on("data", (c) => (d += c));
    req.on("end", () => resolve(d));
  });
  const ct = req.headers["content-type"] || "";
  if (ct.includes("application/json")) {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  return Object.fromEntries(new URLSearchParams(raw));
}

async function send(payload) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "no-key" };
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) return { ok: false, reason: `resend-${r.status}`, detail: await r.text() };
  return { ok: true };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return fail(res, true, 405, "Method not allowed");
  }

  const body = await readBody(req);
  const wantsJson = (req.headers.accept || "").includes("application/json");
  const kind = body["form-name"] === "scorecard" ? "scorecard" : "enquiry";

  // Honeypot — hidden from people, irresistible to bots. Return 200 so the bot
  // believes it succeeded and does not retry.
  if (body["company-website"] || body["website-url"]) {
    return wantsJson
      ? res.status(200).json({ ok: true })
      : res.redirect(303, "/thanks");
  }

  // Submitted implausibly fast after the page rendered.
  const rendered = Number(body["render-time"]);
  if (rendered && Date.now() - rendered < 2500) {
    return fail(res, wantsJson, 429, "That was submitted unusually fast. Please try once more.");
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (tooFrequent(ip)) {
    return fail(res, wantsJson, 429, `You have just sent an enquiry. Please wait a moment before sending another.`);
  }

  const email = String(body.email || "").trim();
  const name = String(body.name || body.business || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return fail(res, wantsJson, 400, "Please enter a valid email address.");
  }
  if (kind === "enquiry" && String(body.problem || "").trim().length < 10) {
    return fail(res, wantsJson, 400, "Please tell us a little about the problem.");
  }
  if (kind === "scorecard" && !String(body.business || "").trim()) {
    return fail(res, wantsJson, 400, "Please enter your business name.");
  }

  const rows =
    kind === "scorecard"
      ? [["Business", body.business], ["City", body.city], ["Email", email]]
      : [
          ["Name", body.name],
          ["Email", email],
          ["Phone", body.phone],
          ["Business", body.business],
          ["Service", body.service || "Not specified"],
          ["Timeline", body.timeline],
          ["Problem", body.problem],
        ];

  const table = rows
    .filter(([, v]) => String(v || "").trim())
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#666;vertical-align:top;">${k}</td><td style="padding:6px 0;">${esc(v)}</td></tr>`)
    .join("");

  // Always log, so a submission is recoverable from Vercel → Logs even if the
  // email provider is misconfigured.
  console.log(`[lead:${kind}]`, JSON.stringify({ ...body, ip, ts: new Date().toISOString() }));

  const alert = await send({
    from: `${BRAND} <${FROM}>`,
    to: [TO],
    reply_to: email,
    subject:
      kind === "scorecard"
        ? `Scorecard request — ${body.business}`
        : `New enquiry — ${name || email}${body.service ? ` (${body.service})` : ""}`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#14130f;">
      <p style="margin:0 0 14px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#8c3a1e;">
        ${kind === "scorecard" ? "Scorecard request" : "New enquiry"}
      </p>
      <table style="border-collapse:collapse;">${table}</table>
      <p style="margin:18px 0 0;font-size:13px;color:#888;">Reply directly to this email to reach them.</p>
    </div>`,
  });

  const ack = await send({
    from: `${BRAND} <${FROM}>`,
    to: [email],
    subject:
      kind === "scorecard"
        ? `Your ${BRAND} scorecard is on its way`
        : `Thanks — we have your enquiry`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#14130f;">
      <p>Hello${name ? ` ${esc(name.split(" ")[0])}` : ""},</p>
      ${
        kind === "scorecard"
          ? `<p>Thanks for requesting a Google Business Profile scorecard for <strong>${esc(body.business)}</strong>.</p>
             <p>It is written by hand, not generated, so it takes up to two working days. You will get a score out of 10, the specific fields that are empty or wrong, what the businesses ranking above you have that you do not, and the three things to fix first.</p>`
          : `<p>Your enquiry has reached us and Kulvir will reply personally within one working day.</p>
             <p>If it is urgent, WhatsApp is faster — ${WHATSAPP}.</p>`
      }
      <p style="margin-top:22px;">Kulvir Sharma<br><span style="color:#666;">Founder, ${BRAND} · Nagpur</span></p>
    </div>`,
  });

  if (!alert.ok) {
    console.error("[lead:send-failed]", alert);
    const msg =
      alert.reason === "no-key"
        ? `We received your details but our mail service is not connected yet. Please message us on WhatsApp at ${WHATSAPP} so we can pick this up straight away.`
        : `Something went wrong sending your enquiry. Please message us on WhatsApp at ${WHATSAPP}.`;
    return fail(res, wantsJson, 502, msg);
  }

  if (!ack.ok) console.error("[lead:ack-failed]", ack);

  return wantsJson
    ? res.status(200).json({ ok: true, acknowledged: ack.ok })
    : res.redirect(303, "/thanks");
}
