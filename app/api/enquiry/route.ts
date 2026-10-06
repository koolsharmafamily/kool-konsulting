import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { contact, contactWhatsApp } from "@/data/contact";
import {
  Enquiry,
  EnquiryErrors,
  enquiryWhatsAppText,
  validateEnquiry,
} from "@/components/contact/enquiry";

export const runtime = "nodejs";
const MAX_BODY_BYTES = 32_768;
const COOLDOWN_MS = 20_000;
const attempts = new Map<string, number>();
const esc = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );

function limited(ip: string) {
  const now = Date.now();
  for (const [key, at] of attempts)
    if (now - at >= COOLDOWN_MS) attempts.delete(key);
  if (attempts.has(ip)) return true;
  // Bound memory. This is per-instance abuse protection, not a distributed quota.
  if (attempts.size >= 10_000) return true;
  attempts.set(ip, now);
  return false;
}

function failure(
  wantsJson: boolean,
  status: number,
  message: string,
  values?: Enquiry,
  errors?: EnquiryErrors,
) {
  const whatsappUrl = contactWhatsApp(
    values
      ? enquiryWhatsAppText(values)
      : "Hi Kulvir, I would like to request a call about a project.",
  );
  const headers: Record<string, string> = {
    "Cache-Control": "no-store",
    "Referrer-Policy": "no-referrer",
  };
  if (status === 429) headers["Retry-After"] = "20";
  if (wantsJson)
    return NextResponse.json(
      {
        ok: false,
        status: "not-confirmed",
        error: message,
        errors,
        whatsappUrl,
      },
      { status, headers },
    );
  const fields = errors
    ? `<ul>${Object.values(errors)
        .map((value) => `<li>${esc(value)}</li>`)
        .join("")}</ul>`
    : "";
  const html = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Request not confirmed | Kool Konsulting</title><style>body{margin:0;background:#F3F2EE;color:#0E1016;font:17px/1.7 system-ui,sans-serif;min-height:100vh;display:grid;place-items:center;padding:24px;box-sizing:border-box}.box{max-width:560px;background:#fff;border:1px solid #d7d7dc;padding:clamp(24px,5vw,48px)}h1{font-weight:500;line-height:1.15;letter-spacing:-.04em;font-size:42px}p,li{color:#525560}.action{display:inline-block;background:#5145E5;color:white;padding:12px 20px;text-decoration:none;border-radius:3px;font-weight:600}a:focus-visible{outline:3px solid #5145E5;outline-offset:4px}.back{color:#3930b9}</style></head><body><main class="box"><p>KOOL KONSULTING</p><h1>Request not confirmed.</h1><p>${esc(message)}</p>${fields}<p><a class="action" href="${esc(whatsappUrl)}">Continue on WhatsApp</a></p><p>You will review and send the message yourself. No calendar appointment has been booked.</p><a class="back" href="/contact">Return to the contact page</a></main></body></html>`;
  return new NextResponse(html, {
    status,
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
  });
}

async function readBody(req: NextRequest) {
  if (Number(req.headers.get("content-length")) > MAX_BODY_BYTES)
    throw new Error("too-large");
  const reader = req.body?.getReader();
  if (!reader) throw new Error("invalid");
  let length = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const part = await reader.read();
    if (part.done) break;
    length += part.value.byteLength;
    if (length > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("too-large");
    }
    chunks.push(part.value);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("invalid");
    return parsed as Record<string, unknown>;
  }
  const parsedForm = await new Request(req.url, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: text,
  }).formData();
  return Object.fromEntries(parsedForm.entries()) as Record<string, unknown>;
}

function deliveryConfig() {
  const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  const key = process.env.RESEND_API_KEY || "";
  const to = process.env.LEAD_INBOX?.trim() || "";
  const from = process.env.LEAD_FROM?.trim() || "";
  let webhook = "";
  try {
    const url = new URL(process.env.LEAD_WEBHOOK_URL || "");
    if (url.protocol === "https:" && !url.username && !url.password)
      webhook = url.href;
  } catch {
    /* Missing optional channel. */
  }
  return {
    key,
    to,
    from,
    emailReady: Boolean(
      key && emailPattern.test(to) && emailPattern.test(from),
    ),
    webhook,
  };
}

async function deliver(
  values: Enquiry,
  requestId: string,
  config: ReturnType<typeof deliveryConfig>,
) {
  if (config.emailReady) {
    const rows = Object.entries(values)
      .filter(([, value]) => value)
      .map(
        ([key, value]) =>
          `<tr><th style="text-align:left;vertical-align:top;padding:8px 18px 8px 0">${esc(key)}</th><td style="padding:8px 0;white-space:pre-wrap">${esc(value)}</td></tr>`,
      )
      .join("");
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.key}`,
          "Content-Type": "application/json",
          "Idempotency-Key": requestId,
        },
        body: JSON.stringify({
          from: `Kool Konsulting <${config.from}>`,
          to: [config.to],
          reply_to: values.contact.includes("@") ? values.contact : undefined,
          subject: `Call request — ${values.business.replace(/[\r\n]/g, " ")}`,
          html: `<h1 style="font:24px system-ui">New call request</h1><p>This is a request to arrange a conversation, not a booked appointment.</p><table>${rows}</table><p>Reference: ${requestId}</p>`,
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (response.ok) {
        const receipt = await response.json();
        if (typeof receipt.id === "string" && receipt.id) return true;
      }
    } catch {
      /* Try the configured fallback. Never log contacts, provider bodies or secrets. */
    }
  }
  if (config.webhook) {
    try {
      const response = await fetch(config.webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": requestId,
          ...(process.env.LEAD_WEBHOOK_SECRET
            ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
            : {}),
        },
        body: JSON.stringify({
          ...values,
          requestId,
          type: "call-request",
          timezone: contact.timezone,
          timestamp: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(8000),
        redirect: "error",
      });
      if (response.ok) return true;
    } catch {
      /* No receipt is claimed when a provider has not accepted the request. */
    }
  }
  return false;
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  const wantsJson =
    (req.headers.get("accept") || "").includes("application/json") ||
    contentType.includes("application/json");
  const origin = req.headers.get("origin");
  // Next may reconstruct req.url with localhost behind its development/proxy server.
  // The actual Host header still identifies the origin the browser requested.
  if (origin) {
    let sameOrigin = false;
    try {
      const source = new URL(origin);
      sameOrigin =
        ["http:", "https:"].includes(source.protocol) &&
        source.host === (req.headers.get("host") || new URL(req.url).host);
    } catch {
      /* Invalid origins are rejected. */
    }
    if (!sameOrigin)
      return failure(
        wantsJson,
        403,
        "This request could not be verified. Please submit the form from the contact page.",
      );
  }
  if (
    !/application\/json|application\/x-www-form-urlencoded|multipart\/form-data/.test(
      contentType,
    )
  )
    return failure(
      wantsJson,
      415,
      "Use the form on the contact page to submit your request.",
    );
  let body: Record<string, unknown>;
  try {
    body = await readBody(req);
  } catch (error) {
    const tooLarge = error instanceof Error && error.message === "too-large";
    return failure(
      wantsJson,
      tooLarge ? 413 : 400,
      tooLarge
        ? "This request is too long. Please shorten the project description."
        : "The form could not be read. Please try again.",
    );
  }
  if (body["company-website"] || body["website-url"])
    return failure(
      wantsJson,
      400,
      "This request could not be verified. Please use the contact page or WhatsApp.",
    );
  const rendered = Number(body["render-time"]);
  if (rendered && (!Number.isFinite(rendered) || Date.now() - rendered < 2500))
    return failure(
      wantsJson,
      429,
      "Please take a moment to review your details, then send the request again.",
    );
  const { values, errors } = validateEnquiry(body);
  if (Object.keys(errors).length)
    return failure(
      wantsJson,
      400,
      "Please check the highlighted details and try again.",
      undefined,
      errors,
    );
  const config = deliveryConfig();
  if (!config.emailReady && !config.webhook)
    return failure(
      wantsJson,
      503,
      `Online request delivery is currently unavailable. Please contact Kulvir on WhatsApp at ${contact.phoneDisplay}.`,
      values,
    );
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip))
    return failure(
      wantsJson,
      429,
      "A request was just attempted. Please wait 20 seconds before trying again.",
      values,
    );
  const requestId = randomUUID();
  const accepted = await deliver(values, requestId, config);
  if (!accepted)
    return failure(
      wantsJson,
      502,
      "We could not confirm delivery. Please continue on WhatsApp with your project details.",
      values,
    );
  const response = wantsJson
    ? NextResponse.json(
        {
          ok: true,
          status: "received",
          message:
            "Your call request was received. A time still needs to be agreed with you.",
        },
        { headers: { "Cache-Control": "no-store" } },
      )
    : NextResponse.redirect(new URL("/thanks", req.url), 303);
  // No personal data is stored in this short-lived confirmation marker.
  response.cookies.set("kk-call-request", requestId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/thanks",
    maxAge: 600,
  });
  return response;
}
