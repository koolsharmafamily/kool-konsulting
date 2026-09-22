# What you need to do — Kulvir's checklist

Plain language, in the order that unblocks the most. Nothing here needs a
developer. Anything marked **blocks launch** should be done before you send the
link to a prospect.

Where a step says "edit `src/data/site.js`", that is one text file with comments
telling you exactly which line to change. If you would rather not touch it, send
me the values and I will.

---

## 1. Buy the domain — **blocks launch**

Buy **koolkonsulting.com** (about ₹1,000/year at GoDaddy, Namecheap or Google
Domains).

Then in Vercel: *your project → Settings → Domains → Add*, and follow the DNS
instructions it gives you. Vercel issues the HTTPS certificate itself.

Tell me once it's live and I will flip the one setting and redeploy.

**Why it matters:** the site is live right now at
**https://kool-konsulting.vercel.app** and every canonical URL, sitemap entry
and social preview points there. That all works — but a `.vercel.app` address
on a consulting firm's business card undercuts the credibility the site is
built to project.

---

## 2. Set up a business email — **blocks launch**

Create **hello@koolkonsulting.com**. Two options:

- **Zoho Mail** — free for one user on your own domain. Enough to start.
- **Google Workspace** — about ₹150/user/month, gives you Gmail on your domain.

The Gmail address appears nowhere on the site by design. A consulting firm
selling business services from a personal Gmail loses credibility with exactly
the owners you want.

---

## 3. Connect the email service — **blocks launch, do this first**

This is now the single most important item. The contact and scorecard forms are
live and validate correctly, but **no email is sent yet**, so a real enquiry
would not reach you.

It is deliberately not faking success: right now a visitor who submits is told
plainly that the mail service is not connected and pointed at WhatsApp, and the
submission is written to Vercel's logs so nothing is actually lost. But that is
a broken shopfront, so fix it before sending the link to anyone.

Ten minutes:

1. Sign up free at **resend.com** (3,000 emails/month free, no card).
2. Copy an API key.
3. In **Vercel → kool-konsulting → Settings → Environment Variables**, add:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | the key you copied |
   | `LEAD_INBOX` | the inbox leads should arrive in |
   | `LEAD_FROM` | leave unset for now — it defaults to a Resend test sender |

4. Click **Redeploy** on the latest deployment.
5. Send yourself a test enquiry from `/contact`. You should get **two** emails:
   the lead alert, and the acknowledgement to the sender.

Once your own domain is verified inside Resend, set `LEAD_FROM` to
`hello@koolkonsulting.com` so the mail comes from you rather than a shared
test sender — that materially reduces the chance of landing in spam.

**Note this changed:** the site was on Netlify, which had form handling built
in. Moving to Vercel meant rebuilding lead capture as a proper endpoint
(`api/enquiry.js`). It is better in the long run — it is portable, validates on
the server, and you own it — but it needs this one key to send mail.

---

## 4. Connect the booking calendar — **blocks launch**

Create a free account at **cal.com**, set up a 30-minute event.

Your booking link looks like `cal.com/kulvir/30min` — the part after cal.com/ is
what I need. Put it in `src/data/site.js` as `calLink: "kulvir/30min"`.

The calendar then appears on `/contact` automatically. Until then that section
shows a note telling visitors to use the form instead.

---

## 5. Founder photograph — ~~blocks launch~~ **DONE**

Your photo is in. I cropped it to 4:5 (752×940), cutting just below your
forearm so it reads as a portrait rather than a full-length shot, and encoded
it to WebP at 39 KB.

It now appears in two places:

- **/about** — full panel beside your story
- **/** — a 56px thumbnail in the "Run by" line above the fold, so the first
  screen has a real face on it

The file is `public/kulvir-sharma.webp`. To swap it later, replace that file
(keep the 4:5 ratio) or point `photo:` in `src/data/site.js` somewhere else.
Setting it to `null` reverts to the typographic panel.

**One thing to consider:** the background of that shot is a stock-looking
meeting room with a generic "Sales chart" on the screen. It works, but a plain
wall or your actual workspace would look less like a stock photo. Not urgent —
a real face beats a perfect background.

---

## 6. Confirm or change the prices

I set starting prices benchmarked against published Indian agency rates
(single-location local SEO runs ₹8,000–15,000/month, full local SEO
₹25,000–60,000/month). For a founder-led Nagpur practice I used:

| Service | Starting price |
| --- | --- |
| Local Presence and Visibility | ₹18,000 / month |
| Google Business Profile management | ₹8,000 / month |
| Reputation management | ₹10,000 / month |
| Strategy and Planning | ₹45,000 |
| Business plan writing | ₹45,000 |
| Financial modelling | ₹40,000 |
| Market entry strategy | ₹55,000 |
| Automation and AI | ₹60,000 |
| AI agents | ₹60,000 |
| Workflow automation | ₹45,000 |
| Software Development | ₹75,000 |
| Web development | ₹75,000 |
| Internal tools | ₹1,50,000 |
| Digital Marketing | ₹25,000 / month |

**These are my estimates, not your decisions.** Go through them and change
anything that is wrong. They are all in `src/data/services.js` as `priceFrom`.

---

## 7. Add your address

Needed for two things: the `LocalBusiness` structured data that helps you appear
in local search, and your Google Business Profile.

Put your street address and PIN code in `src/data/site.js` under `address`, and
the exact map coordinates under `geo`. The schema block switches itself on once
both are present — right now it is deliberately omitted, because publishing it
with a placeholder address would fail Google's validation.

---

## 8. Create your own Google Business Profile

You sell this service. Not having one yourself is the first thing a sharp
prospect will check.

Go to **google.com/business**, create the profile, verify it (Google posts a
card, usually a week), then add the profile URL to `sameAs` in
`src/data/site.js`.

---

## 9. Verify in Google Search Console

1. Go to **search.google.com/search-console**
2. Add `koolkonsulting.com` as a domain property
3. Verify via DNS (Vercel shows you the exact record to add)
4. Submit `https://koolkonsulting.com/sitemap-index.xml`
5. Link the property to your Google Business Profile

---

## 10. Switch on analytics

I have wired **Plausible** rather than GA4 — it is cookie-free, needs no consent
banner under the DPDP Act, and is simpler. About $9/month, 30-day free trial.

Add your domain at plausible.io, then set `plausible: true` in
`src/data/site.js`. Conversion tracking is already wired for form submits,
calendar bookings, WhatsApp clicks, phone clicks, email clicks and scorecard
requests.

If you would rather have GA4 (free), say so and I will swap it — it needs a
cookie banner to be DPDP-compliant, which is why I did not default to it.

---

## 11. Write the case studies — **as soon as you have results**

This is the single biggest thing missing, and I cannot do it for you.

The site currently says plainly that the firm is new and has no case studies
yet. That is honest and it converts better than fake logos, but it is a
temporary position, not a permanent one.

The moment your first engagement produces a measurable result:

1. Ask the client for written permission to write it up.
2. Get one real quote from them.
3. Send me: client name (or how they want to be described), sector, the problem,
   what we built, the numbers before and after, and the period.

I add one object to `src/data/work.js` and the page, the listing, the sitemap
entry and the social image all appear automatically.

**Anonymised is fine** — "a four-clinic dental group in Nagpur" works. Invented
is not, and I will not write invented ones.

---

## 12. Deliver the scorecards yourself

The free Google Business Profile scorecard is your best lead source for people
who are not ready to book a call. The page promises a hand-written assessment
within two working days.

When a request comes in, actually do it: check their profile, compare it against
the three businesses ranking above them, and send four or five specific
sentences. It takes about twenty minutes and it demonstrates the exact service
you are selling better than any amount of copy.

Do not automate this until you have done fifty by hand.

---

## What I could not verify, and you should

I built and tested everything I could reach from here. Three things need a real
browser and real accounts:

- **Send a test enquiry** end to end, and confirm both the alert to you and the
  acknowledgement to the sender arrive.
- **Paste the live URL into WhatsApp and LinkedIn** and check the preview card
  shows the title, description and image.
- **Run Lighthouse** in Chrome DevTools on the live site. I have measured
  payload (36 KB), contrast (all pairs pass AA), semantics and structured data
  directly, but I could not run Lighthouse itself in this environment.

Also: I was unable to take screenshots in this environment for the whole build,
so I verified layout by measuring the rendered DOM — fold positions, font sizes,
overflow at 390/768/1280/1920 — rather than by looking at it. Open it yourself
and tell me if anything looks off.
