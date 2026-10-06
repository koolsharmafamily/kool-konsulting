# Booking and enquiry configuration

The primary CTA is **Book a call**. The contact page explains the opportunity, first scope and fit. With no scheduler it offers **Request a call**. Verified phone and WhatsApp remain +91 88888 21351.

## Settings

Copy `.env.example` into the deployment's secure configuration; never commit real credentials.

| Setting | Purpose |
|---|---|
| NEXT_PUBLIC_SITE_URL | Actual canonical HTTPS production origin; defaults to existing Vercel domain |
| BOOKING_URL | Actual HTTPS provider booking page; unset means request-only mode |
| CONTACT_EMAIL | Confirmed working business inbox shown as optional public contact |
| RESEND_API_KEY | Server-only transactional email credential |
| LEAD_FROM | Verified bare email sender address |
| LEAD_INBOX | Owner-approved lead recipient email |
| LEAD_WEBHOOK_URL | Optional HTTPS delivery channel or email fallback |
| LEAD_WEBHOOK_SECRET | Optional server-only bearer token for webhook |

Email requires all three settings. A webhook can be used independently. Its endpoint must return a 2xx response only after it accepts the request reliably. Never point the API at a placeholder endpoint that always returns success. A failed email attempt can fall back to the configured webhook.

## Truthful outcomes

- Scheduler link: provider owns time selection, timezone conversion, confirmation and rescheduling. The page displays the studio timezone, Asia/Kolkata (UTC+05:30), and asks visitors to check the provider's displayed timezone.
- Opening the provider is not a completed booking. No confirmed-booking analytics event is emitted.
- Email request: success requires a provider receipt ID.
- Webhook request: success requires a successful HTTP acknowledgement under the above contract.
- Request success means received for review; no appointment exists yet.
- No channel: 503, retained form values, and a prefilled WhatsApp link the visitor explicitly sends.
- Failed provider: 502. Network or timeout: truthful error and the same fallback.
- Direct `/thanks` access does not claim a submission. A short-lived server-set receipt marker enables the request acknowledgement.

Service, demo, context, source and project query values stay with the enquiry. No arbitrary query values are sent to analytics. Provider secrets and enquiry details are not logged by the application.

## Boundaries and launch checks

Server validation bounds field lengths and payload size, checks contact format, filters service/budget/timing values, verifies browser origin, enforces a honeypot and minimum form time, and applies a bounded per-instance cooldown. The cooldown is not a distributed quota: configure platform-level abuse protection if production traffic requires it.

Test with the real owner-approved provider after configuration: delivery, spam filtering, sender verification, timezone display, provider confirmation, rescheduling, mobile fallback and failure handling. None of those live-provider outcomes were verified in this local redesign. Automated provider tests use isolated mocks and send nothing.

Final privacy retention and provider processing details require owner confirmation. General analytics stays disabled until a provider and suitable consent choices are implemented.

