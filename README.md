# Kool Konsulting — website

Static site for a founder-led consulting firm in Nagpur. Built with
[Astro](https://astro.build) and deployed on Vercel.

**Live:** https://kool-konsulting.vercel.app

Every page is pre-rendered to HTML at build time, so the full body content is in
the source with JavaScript disabled. That matters here more than usual: we sell
SEO, so the site has to survive being inspected by a prospect who knows what to
look for.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

Node 22 or newer.

---

## Where to edit things

Almost all copy lives in four data files. You should rarely need to touch a
`.astro` file to change wording.

| File | What it controls |
| --- | --- |
| `src/data/site.js` | Firm name, domain, email, phone, address, founder bio and credentials, Cal.com link, analytics toggle. **Edit this first.** |
| `src/data/services.js` | All 15 service pages — titles, meta descriptions, prices, deliverables, process, FAQs. |
| `src/data/work.js` | Case studies and testimonials. Currently empty by design — see below. |
| `src/data/faqs.js` | The sitewide FAQ at `/faq`. |

Anything marked `TODO(...)` in `src/data/site.js` is a value only you can supply.

### Adding a case study

Add one object to `CASE_STUDIES` in `src/data/work.js`. The file has a fully
commented template. Everything else happens automatically:

- a page appears at `/work/<slug>`
- it is listed on `/work` and on the homepage
- it enters `sitemap.xml`
- an OG image is generated for it
- the "no case studies yet" state disappears

Same for `TESTIMONIALS` and `OUTCOME_STATS` — add entries and the sections
appear; leave them empty and the site quietly omits them rather than showing
placeholders.

### Changing prices

Every price is in `src/data/services.js` as `priceFrom` and `priceNote`. They
appear on the service page, `/pricing`, the services hub and the homepage from
that one place.

---

## Why the case studies are empty

`src/data/work.js` ships with empty arrays. The firm has no completed
engagements yet, so there are no real results to publish, and inventing a client
name, a quote or a percentage would put fabricated evidence in front of real
prospects.

Instead the site handles the empty state honestly: `/work` explains that the
first engagements are under way and points at the founder's actual background,
and the homepage shows a credentials line rather than invented statistics.

Fill the arrays as real work completes. Get the client's written permission
first; anonymised is fine ("a four-clinic dental group in Nagpur"), invented is
not.

---

## Architecture

```
src/
  data/          copy and configuration (edit these)
  layouts/
    Base.astro   <head>, SEO tags, JSON-LD, landmarks, skip link
  components/    Nav, Footer, EnquiryForm, Cta, FaqList, Logo, StickyCta
  pages/         one file per route; [slug].astro generates many
    og/[...route].ts   build-time 1200x630 PNG social cards
    robots.txt.ts      generated robots.txt
  styles/global.css    design tokens and all shared styles
```

**No client-side framework.** The built site ships zero JavaScript bundles. The
only scripts are two small inline ones: the sticky CTA scroll listener and the
form submission handler. Both are progressive enhancement — the site works
without them.

### The logo

Two mirrored K's on a shared axis. Their four arms meet at top-centre and
bottom-centre, so the negative space between the stems resolves into a diamond.
Six stroke paths, no curves, legible at favicon size. Defined in
`src/components/Logo.astro` and `public/favicon.svg` — keep the two in sync.

---

## Forms

Both forms (`enquiry` on `/contact`, `scorecard` on `/scorecard`) post to a
single Vercel Serverless Function at **`api/enquiry.js`**.

> Previously this used Netlify Forms. That is a Netlify-only feature — moving to
> Vercel meant rebuilding lead capture as a real endpoint. The upside is that it
> is now host-portable; the cost is that email delivery needs an API key.

How submission works:

1. JavaScript intercepts submit, validates inline, and POSTs to `/api/enquiry`
   with `Accept: application/json`.
2. The function re-validates server-side, emails you, and emails the enquirer an
   acknowledgement.
3. Success replaces the form with a confirmation block on the page.
4. Failure shows the endpoint's specific reason plus the WhatsApp fallback.
5. **With JavaScript disabled** the form posts natively: success redirects to
   `/thanks`, failure renders a styled error page (not raw JSON).

Spam handling, no CAPTCHA:

- honeypot fields (`company-website` / `website-url`) — a hit returns `200` so
  the bot believes it worked and does not retry
- submissions under 2.5s after page render rejected server-side
- 20s per-IP cooldown at the edge, 60s per-browser in `localStorage`
- server-side validation, so a bot skipping the browser gains nothing

### Switching on email delivery — REQUIRED

The function needs one environment variable. Until it is set, submissions are
validated and written to Vercel's logs but **no email is sent**, and the visitor
is told plainly to use WhatsApp rather than being shown a false success.

1. Create a free account at [resend.com](https://resend.com) (3,000 emails/month
   free) and copy an API key.
2. In Vercel → your project → **Settings → Environment Variables**, add:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | your key |
   | `LEAD_INBOX` | where leads should land |
   | `LEAD_FROM` | `hello@koolkonsulting.com` once the domain is verified in Resend |

3. Redeploy (`npx vercel deploy --prod`).

`LEAD_FROM` defaults to Resend's shared `onboarding@resend.dev` sender, which
works immediately for testing but should be swapped for your own domain before
launch so mail does not land in spam.

---

## SEO

Handled in `src/layouts/Base.astro` and verified at build:

- unique `<title>` (50–60 chars) and `<meta description>` (140–160) per page
- `<link rel="canonical">` on every page
- Open Graph and Twitter card tags, each with a real 1200×630 **PNG** showing
  that page's own title (SVG cards do not render on WhatsApp or LinkedIn)
- JSON-LD: `Organization` + `ProfessionalService` sitewide, `BreadcrumbList`,
  `Service` on each service page, `FAQPage` on `/faq` and every service page,
  `Person` on `/about`, `WebSite` on the homepage
- `robots.txt` and `sitemap-index.xml` generated on every build
- `/thanks` and `/404` are `noindex` and excluded from the sitemap
- real HTTP 404 for unmatched paths — there is deliberately **no** catch-all
  rewrite in `vercel.json`, since that is what turns a 404 into a soft 200
- `cleanUrls` in `vercel.json` serves `/about` from `about.html` and redirects
  `/about.html` to the clean path, so there is one canonical URL per page

### LocalBusiness schema

`LocalBusiness` is only emitted once `address.street` and `address.postalCode`
are filled in in `src/data/site.js`. This is deliberate: the type requires a real
postal address, and emitting it with placeholders would fail Google's Rich
Results Test. Fill in the address and the block appears automatically.

---

## Accessibility

- every colour pair meets WCAG AA 4.5:1 (see the table in `src/styles/global.css`)
- the previous `--ink-faint` (`#928c7f`) measured 3.02:1 and failed; it is now
  `#6b6459` at 5.28:1
- minimum body text 17px, minimum label text 14px
- all tap targets at least 44×44px (buttons are 48px)
- visible `:focus-visible` outline on every interactive element
- skip link to `#main`
- one `<h1>` per page, headings in order, real `<header>/<main>/<footer>`
- `prefers-reduced-motion` honoured; no content depends on animation

---

## Performance

Homepage: ~26 KB HTML + ~10 KB CSS, **zero JS bundles**. Well inside the 200 KB
budget. Fonts are the only external request.

---

## Deploying

The site is linked to the Vercel project `kool-konsulting`.

```bash
npx vercel deploy --prod
```

Vercel runs `npm run build` itself, per `vercel.json`. Or connect the repo in
Vercel for automatic deploys on push.

### After buying the domain

1. Set `origin` in `src/data/site.js` to `https://koolkonsulting.com`.
2. Vercel → Settings → Domains → add `koolkonsulting.com`, set it as primary.
   Vercel issues the certificate and redirects `www` to apex automatically.
3. Redeploy. Vercel keeps `kool-konsulting.vercel.app` working and 308-redirects
   it to the primary domain once one is set, so no manual redirect rule is
   needed.
4. Update `LEAD_FROM` to an address on the new domain, verified in Resend.
