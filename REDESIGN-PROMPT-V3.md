# Kool Konsulting: website redesign prompt (v3)

> **How to use this file.** Open this project folder in Claude Code (or Antigravity) and send:
>
> *"Read `REDESIGN-PROMPT-V3.md` and `3D-BAHI-KHATA-PROMPT.md` in full. Then carry out `REDESIGN-PROMPT-V3.md` phase by phase, stopping at every checkpoint to show me screenshots."*
>
> This file replaces `REDESIGN-PROMPT.md` and `WEBSITE-AUDIT.md`. Both describe the old Astro site. Ignore them.
>
> Prepared 2 October 2026.

**Decisions already made by Kulvir (don't reopen them):**
- Sell **tech only**: websites, apps, business software, automation & AI. No marketing, SEO retainers or business plans.
- Show **"starting from"** prices.
- Look: **light, premium and warm**, with real product visuals. Modern grotesk, big confident headlines, one bold brand colour.
- Proof: real builds for a cinema, a construction site, a mandi wholesale shop, websites for other businesses, automations, AI cameras and an event ticketing platform. More will be added later, so the Work section must be data-driven.
- One signature 3D moment: a **bahi-khata** (the red ledger) that opens and turns into software. The site as a whole should feel like a showcase of serious tech capability.

---

## 0. Your role and the one outcome that matters

You are the design lead and senior front-end engineer for Kool Konsulting. You are rebuilding the website in this repo: Next.js 14 (App Router), React 18, Tailwind CSS 3, TypeScript, deployed on Vercel from `github.com/koolsharmafamily/kool-konsulting`.

An owner of a small or medium Indian business opens this site on a phone. Usually they arrive from a WhatsApp link a friend forwarded, or from a proposal Kulvir sent. Within ten seconds they should think:

1. "They build real software for businesses like mine."
2. "This looks world-class. These people are seriously good with technology."
3. "Talking to them is easy." Then they tap **WhatsApp**.

Everything below serves those three thoughts. When a decision is unclear, choose whatever makes them happen faster on a ₹15,000 Android phone over 4G.

---

## 1. The business

**What Kool Konsulting is.** A founder-led tech studio in Nagpur. It designs, builds and supports websites, mobile and web apps, custom business software and automations, including AI, for small and medium businesses across India. Kulvir Sharma takes every first call and builds the systems himself.

**What it sells.** Four services, in this order:
1. **Websites**
2. **Apps** (Android, iOS and web)
3. **Business software**: custom systems for billing, stock, orders, CRM, portals and dashboards
4. **Automation & AI**: WhatsApp automation, reminders, reports, data entry, forecasting, AI assistants, AI cameras

After launch, it also sells **care plans**. Do **not** sell or mention SEO retainers, Google Maps ranking, digital marketing, business plans, CMA reports, financial models or market-entry strategy anywhere on the site. The old site sold those, and they are discontinued.

**Who buys.** Owners and second-generation managers of owner-run businesses, typically 5–200 staff and roughly ₹1 crore to ₹100 crore turnover. They include:
- traders and distributors (Itwari, Gandhibagh, Kalamna)
- manufacturers (MIDC Hingna, Butibori)
- builders and contractors
- cinemas, restaurants and event organisers
- clinics and diagnostic centres
- schools, coaching institutes and academies
- shops and showrooms

They run their businesses on WhatsApp, Tally, Excel and paper registers. Many are 35–60. They use English for business but are often happier talking in Hindi or Marathi. Many have been burned by an agency that disappeared, ran over time, or built something their staff never used.

**How they arrive.** Mostly through word of mouth: a friend forwards the link, or it's inside a proposal. So the site's first job is to **confirm the recommendation** and make the next step effortless. Its second job is ranking in local searches like "website developer in Nagpur", "app development company Nagpur" and "software company Nagpur".

**Market facts you may use.** Show the source in small text wherever a fact appears.
- Only **26.9%** of Indian MSMEs have a business website. **52.6%** say finding suitable digital tools is somewhat or very difficult, and **36.8%** struggle to set tools up. *(India SME Forum, "Breaking Barriers, Building Futures: The State of Digitalisation in Indian MSMEs", December 2025, 7,835 MSMEs surveyed.)*
- Nagpur's Hingna industrial estate has about 900 small and medium units. Butibori is described as Asia's largest industrial estate by area, and Kalamna as one of Asia's largest wholesale markets for oranges and grains. *(Nagpur District administration, nagpur.gov.in/economy.)*

**What competitors look like.** Most Nagpur agencies sell WordPress websites and "digital marketing". They lead with years in business, team size and "latest technologies", and they look interchangeable. Kool Konsulting wins on five things:
- one accountable founder
- real systems running in real businesses
- a business and finance brain
- transparent starting prices
- visibly superior craft

The website itself is the proof of that craft.

---

## 2. Why the last two versions failed (don't repeat them)

| Version | What it looked like | Why it failed |
|---|---|---|
| v1: Astro, Aug–Sep 2026 | Cream background, Instrument Serif headlines, terracotta accent, film grain, uppercase letter-spaced labels | This is the most common "premium" look AI tools produce, so it read as a template. It also positioned the firm as a local SEO agency. |
| v2: Next.js "brutalist", Sep 2026 (live now) | Black background, terminal-green accent, monospace everywhere, zero border radius, grayscale founder photo | This is the second most common AI look. It talks to developers, not owners: "Initialize Audit", "Deploy Systems", "Examine Architecture", "SYSTEM_LOG_STREAM", "Listening on Port 8080". It makes claims nobody can back up ("40 hours into 4 seconds", "ROI payback < 45 days", "Rank #1 in Google Maps", "Resp: < 2 hours"), and it uses two different logos: a "KK" box in the navbar and a "K" in the footer. |

**Functional failures on the live site** (fix them in Phase 0):
- **The contact form is fake.** `components/contact/ContactForm.tsx` waits 500 ms, then says "Kulvir will message you on WhatsApp within 2 hours". Nothing is sent, so every form lead is lost.
- **20 of the 25 URLs in the old Astro sitemap now return 404**: `/pricing`, `/faq`, `/scorecard`, `/privacy`, `/terms` and all 15 `/services/*` pages. Some of these links are in proposals that have already gone out.
- **`hello@koolkonsulting.com` bounces.** The domain isn't registered. It was available to register when checked on 2 October 2026 (about US$11 a year).
- The site has no per-page metadata, sitemap, robots file, structured data, OG images or 404 page. `next.config.mjs` also ignores TypeScript and ESLint errors.
- The case studies are corporate internship and learning projects (DSP, TrakIT, a trading bot). None of them shows an Indian SME getting a website, app or system.

---

## 3. Ground rules

### 3.1 Honesty (hard rules)
- **Never invent anything.** That covers clients, logos, testimonials, ratings, review counts, project counts, years in business, team size, percentages and "hours saved". A number appears only if Kulvir supplied it, and it must live in a data file with a source note.
- **Label recreated screens.** Any demo screen recreated with sample data carries the caption "Recreated with sample data."
- **Show each project's status honestly.** Use one of `Live`, `In daily use`, `Pilot`, `Prototype` or `Earlier role`. If the status field is empty, show no status badge.
- **Hide empty sections.** A section whose data array is empty (testimonials, results) does not render at all. No placeholders, no "coming soon".
- **Prices and promises come from data files.** Every price comes from one data file and is labelled "Starting from". Never promise a ranking, or a response or delivery time shorter than the one in `data/site.ts`.

### 3.2 Copy
- **Write for owners, not developers.** Use plain Indian English: short sentences, sentence case everywhere, ₹ with Indian digit grouping (₹1,50,000; "₹1.5 lakh" in running text).
- **Name things by what the owner gets.** Write "Get enquiries on WhatsApp", not "lead-capture pipeline".
- **Buttons say exactly what happens.** For example: "Chat on WhatsApp", "Call Kulvir", "Get a free tech check-up", "See the construction app", "Send enquiry".
- **Banned in UI copy:** initialize, deploy, architecture, architect, systems (as a nav label), engine, pipeline, leverage, synergy, seamless, robust, cutting-edge, next-gen, revolutionise, empower, unlock, supercharge, game-changer, world-class (about ourselves), "solutions" as a standalone noun, digital transformation, "zero fluff" and "no jargon". Don't claim plainness; show it.
- **Punctuation limits.** At most one em dash per page. No exclamation marks, except inside the WhatsApp demo bubbles.

### 3.3 Design tells to avoid (these make a site look AI-generated)
- **Labels:** all-caps labels, letter-spaced "eyebrow" labels above headings, monospace "data" labels, and `[ BRACKETED ]` labels.
- **Headlines:** one word in a different colour, gradient or italic.
- **Decoration in text:** meta strings joined with middle dots ("A · B · C"), and an arrow "→" tacked onto every link.
- **Numbering:** markers like 01 / 02 / 03, unless the content is a genuine sequence (the process steps are).
- **Template kit:** identical rounded card grids for everything, the same grey shadow under every card, gradient washes, glowing blobs, glassmorphism everywhere, fade-and-slide-up on every section, "magnetic" buttons, custom cursors, and marquees of slogans.
- **Overused looks:** cream (#F4F1EA) with a serif and terracotta; black with neon green; zero-radius brutalism.

### 3.4 Engineering
- **Mobile first.** Design and test at 360 px and 390 px wide before 1440 px.
- **Content lives in data files.** Everything editable lives in `data/*.ts`. Only microcopy may be hard-coded in components.
- **Strict TypeScript.** Remove `ignoreBuildErrors` and `ignoreDuringBuilds`, then fix whatever breaks.
- **Server Components by default.** Make a component a Client Component only if it needs state, effects or browser APIs.

---

## 4. Phase 0: stop the leaks

Ship this to production **before** starting the redesign.

1. **Build real lead capture.** Create `app/api/enquiry/route.ts` as a Route Handler.
   - **Port the protections.** Bring over the validation, honeypot, minimum-time and per-IP cooldown logic from the root `api/enquiry.js`. Then delete the root `api/` folder, because a Next.js project on Vercel uses Route Handlers.
   - **Send by email.** Use Resend's REST API (`POST https://api.resend.com/emails`; no SDK needed) with the env vars `RESEND_API_KEY`, `LEAD_INBOX` and `LEAD_FROM`. Send a lead alert to Kulvir, with `reply_to` set to the enquirer's email if they gave one. If they gave an email, also send them an acknowledgement.
   - **Keep a backup copy.** If the env var `LEAD_WEBHOOK_URL` is set, also POST the lead to it. It should point to a Google Apps Script web app that appends a row to a Google Sheet; Kulvir already uses Apps Script.
   - **Never fake success.** Show success only if at least one channel worked. Otherwise, show the specific failure plus a WhatsApp button whose prefilled message contains everything the visitor typed, so nothing is lost.
   - Never send full phone numbers or emails to client-side analytics.
2. **Fix the contact form.** Make `ContactForm.tsx` POST to `/api/enquiry`. It needs:
   - inline validation and a loading state
   - a real success state: "Thanks, {first name}. Kulvir will reply on WhatsApp within one working day."
   - the WhatsApp fallback from step 1

   It must also work without JavaScript: a native POST, then a redirect to `/thanks` or a readable error page.
3. **Add redirects.** Add every old URL from section 9 to `redirects()` in `next.config.mjs` as a permanent redirect. Keep `/pricing`, `/faq`, `/privacy` and `/terms` as real pages.
4. **Create one config file.** Make `data/site.ts` the single source of truth for: name, origin, phone, WhatsApp number and default message, email, address, geo, hours, founder, social links, Cal.com link, analytics flags and the response-time promise.
   - Replace every hard-coded `918888821351`, phone number and email in the components with values from it.
   - Until the domain works, show WhatsApp and phone only, not `hello@koolkonsulting.com`. Control this with `emailLive: false`.
5. **Clean up.**
   - **Remove:** the Astro dependencies (`astro`, `@astrojs/sitemap`, `astro-og-canvas`, `canvaskit-wasm`, and `source-map-js` if nothing else needs it), `astro.config.mjs`, `.astro/`, `dist/`, `extract.cjs` and `cases.json`.
   - **Archive:** move `legacy_astro/`, `REDESIGN-PROMPT.md` and `WEBSITE-AUDIT.md` into `docs/archive/`. They're useful reference but not part of the build.
6. **Ship it.** Run `npm run build` with type checking on and make sure it passes. Deploy, then test the form end to end on the live URL.

**Checkpoint 0:** Show Kulvir that a test lead arrived, list the redirects, and wait for his go-ahead before Phase 1.

---

## 5. Positioning and messaging

**One-liner** (use it in meta descriptions, the footer and OG cards):
> Kool Konsulting builds websites, apps, business software and automations for growing Indian businesses. Based in Nagpur. Working across India.

**Positioning statement** (internal only; it guides every page):
> For owner-run Indian businesses that have outgrown registers, Excel sheets and WhatsApp follow-ups, Kool Konsulting is the founder-led tech studio that builds software around how their team already works. Quotes are fixed, everything is in the owner's name, and the builder is on WhatsApp.

**Message pillars.** Each pillar needs proof on the page, not adjectives:

| Pillar | Proof on the page |
|---|---|
| **Built for how Indian businesses actually run.** WhatsApp, Tally, Excel, UPI, GST, Hindi/Marathi/English, budget Android phones. | The register-to-app demos, the WhatsApp demo, the industry list |
| **Real systems in real businesses.** | A cinema, a construction site, a mandi wholesale shop, a dance academy in Lucknow, a jewellery designer in London |
| **One accountable builder.** You deal with Kulvir from the first call to after launch. | The founder section, direct WhatsApp, his business and finance background |
| **No traps.** A fixed written quote, milestone payments, code, data, domain and accounts in your name, then a care plan or a full handover. | The process, pricing and FAQ sections |
| **Visibly superior craft.** | This website itself: the 3D scene, the live demos, the speed |

**Voice.** A sharp, friendly builder who has sat at your counter: confident, specific, never salesy. Says "you" and "your team", and uses the owner's own words: register, parchi, godown, site, counter, staff, dealer, enquiry, follow-up, payment pending.

---

## 6. Design system

The direction is **light, premium and warm, with real product visuals**: the clarity of Stripe or Razorpay and the friendliness of Notion. Ground it in the Indian business world: ledger paper, carbon-copy ink and the red bahi-khata.

Spend your boldness in **one place**: the 3D bahi-khata moment (section 7). Keep everything around it quiet, precise and generous.

### 6.1 Colour tokens

Define these as CSS variables and Tailwind theme colours.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBFAF6` | Page background: light and faintly warm, not cream |
| `surface` | `#FFFFFF` | Panels, device screens, inputs |
| `ink` | `#17161C` | Text and primary buttons |
| `ink-2` | `#55515E` | Secondary text |
| `ink-3` | `#6F6A78` | Captions and meta (check it reaches 4.5:1 on paper) |
| `line` | `#E6E2DA` | Hairlines and card borders |
| `line-strong` | `#D6D0C4` | Hover borders and input borders |
| `carbon` | `#35309A` | The brand colour ("carbon-copy ink"): links, focus rings, active tabs, key data, the digitising glow in 3D |
| `carbon-600` | `#2B2783` | Carbon in hover and pressed states |
| `carbon-050` | `#EEEDFA` | One tinted band and selected states |
| `bahi` | `#B3261E` | Only the 3D bahi-khata and ledger illustrations. Never a general accent. |
| `ledger-red` | `#C9443A` | Ledger margin lines, "before" marks, form errors |
| `ledger-rule` | `#C8D3EC` | Faint ruled lines in ledger illustrations |
| `leaf` | `#1E7A4C` | Success text and "Present" or "Paid" states |
| `whatsapp` | `#25D366` | WhatsApp buttons only, always with `ink` text (white text fails contrast) |

**Rules:**
- Use one primary (`ink`) button per viewport.
- Carbon carries meaning (links, active states, brand moments). It is not decoration.
- Check every text/background pair against WCAG AA, and leave the contrast ratio in a comment next to each token.

### 6.2 Typography

Load the fonts with `next/font/google` (self-hosted at build, `display: 'swap'`, latin subset). For Anek Latin, pass `axes: ['wdth']`. By default `next/font` only includes the weight axis, and `font-stretch` would do nothing.

- **Display: Anek Latin.** A variable font by Ek Type, an Indian foundry. Use its width axis: `font-stretch: 106%` for H1, 104% for H2 and 100% for H3. Use weights 650–720, letter-spacing −0.02 to −0.025em and line-height 1.02–1.1. This semi-expanded, heavy grotesk is the brand's voice. Use it only for headings, the wordmark, big numbers and prices.
- **Text: Mukta** (also Ek Type), weights 400, 500 and 600, for body text, UI, buttons and forms. Both families have Devanagari versions, so Hindi and Marathi pages can be added later without changing the look.
- **Handwriting: Kalam** (Indian Type Foundry), weights 400 and 700. Use it **only** inside ledger, register and parchi illustrations, in carbon-blue "ink" on ruled paper. Load it only in the components that use it.
- **Don't use:** monospace anywhere, Inter, Geist, Space Grotesk, Poppins or Instrument Serif.

**Type scale** (desktop / mobile, in px):

| Role | Size | Line height | Notes |
|---|---|---|---|
| Hero H1 | 72 / 40 | 1.02 | Anek 700 at 106% stretch. No more than 4 lines at 1440 px or 5 lines at 390 px. |
| H2 | 48 / 30 | 1.08 | Anek 680 at 104% stretch |
| H3 | 26 / 21 | 1.2 | Anek 640 |
| Lead | 20 / 18 | 1.55 | Mukta 400, `ink-2` |
| Body | 18 / 17 | 1.6 | Mukta 400, lines no longer than 68 characters |
| Small | 15 / 14.5 | 1.5 | Mukta 500, `ink-3`; never below 14 px |
| Button | 17 / 17 | 1 | Mukta 600 |

- **Fluid sizes:** use `clamp()` to scale between the two sizes.
- **Numbers:** use `font-variant-numeric: tabular-nums` for prices and numbers in UI.
- **Headlines:** no word in a headline gets a different colour or style.

### 6.3 Layout
- **Grid.** Content container max 1200 px. Gutters 24 px on desktop and 16 px on mobile. 12 columns on desktop, 4 on mobile.
- **Spacing.** 112 px between sections on desktop, 72 px on mobile. Text is left-aligned; only the final CTA is centred.
- **Vary the layout.** In order down the page:
  - a split hero with a 3D stage
  - a tabbed demo stage
  - a list-style services index with mini mockups
  - a chat on a phone
  - a two-column industry list
  - a real sequence for the process
  - real tables for comparison and pricing

  No two sections in a row share a layout.
- **Background rhythm.** `paper`, then `surface` panels, then one `carbon-050` band (the WhatsApp demo), then `paper`. No dark sections.
- **Radius hierarchy.** 28 px for stages, 18 px for cards, 12 px for buttons and inputs, 999 px for chips and tabs, 40 px for phone frames.
- **Shadows** only where something physically floats (devices, the 3D stage, open menus): `0 1px 0 rgba(23,22,28,.04), 0 24px 48px -24px rgba(53,48,154,.28), 0 8px 16px -8px rgba(23,22,28,.12)`. Cards get a 1 px `line` border and no shadow.

### 6.4 Components

Build these once in `components/ui/` and reuse them everywhere:
- `Button`, in four styles: primary (ink), WhatsApp, secondary (white with a line border) and text link
- `Logo`, `Header`, `Footer`
- `MobileMenu`: a full-screen sheet with big rows, and WhatsApp and Call pinned at the bottom
- `MobileActionBar`
- `Section` and `SectionHeading` (an H2 plus an optional one-line lead; no eyebrow label)
- `Chip`, `Tabs` (accessible), `StatusBadge`, `Accordion` (built on `<details>`)
- `PhoneFrame`, `LaptopFrame`, `BrowserFrame`
- `LedgerPaper`, `ParchiSlip`, `ChatThread`
- `PriceTag`, `ComparisonTable`
- `Field` (label, hint, error)

**Logo.**
- **Mark:** restore the mirrored-K diamond mark from `public/favicon.svg`: two mirrored K's whose arms meet so the space between them forms a diamond.
- **Wordmark:** "Kool Konsulting" in Anek Latin 650 at 106% stretch.
- **Use one logo everywhere:** header, footer, favicon and OG cards.
- **Icons:** the favicon is the mark in `paper` on a `carbon` square. Also make a 180 px `apple-touch-icon.png` and a web manifest.

**Device mockups.**
- **Built in HTML/CSS, not images**, with realistic Indian sample data: Indian names, ₹ amounts, dates like "14 Sept", and Hinglish where it's natural ("Bhaiya, rate kya hai?").
- **Phone frame:** 9:19.5, 40 px radius, an 8 px `ink` bezel, no notch gimmicks, and no Apple or Samsung branding.
- **Tilt:** on desktop only, phone and laptop mockups tilt up to 5° towards the pointer using CSS perspective. Turn this off for touch screens and reduced motion.

**Imagery.**
- **Screens:** use real screenshots of real builds once Kulvir supplies them (`public/work/*`). Until then, use HTML recreations labelled "Recreated with sample data".
- **Photos:** the founder photo is shown in colour.
- **Don't use:** stock photos, AI-generated people or abstract gradient blobs.

**Founder photo.** `public/kulvir-sharma.webp` currently shows a staged pose, pointing at a TV that reads "Sales chart". Until Kulvir replaces it:
- crop it to head and shoulders (`object-position` around 60% 22%, aspect 4:5), so the TV and the pointing hand are out of frame
- never make it grayscale

### 6.5 Motion
- **One orchestrated moment.** The 3D sequence (section 7) is the only motion that plays by itself. Everything else moves only in response to the visitor: tab switches, the before/after handle, chat replies, the accordion, estimator steps and hover states.
- **Timing.** UI transitions take 160–240 ms with `cubic-bezier(.2,.7,.2,1)`. No scroll-triggered fade-ins on sections.
- **Reduced motion.** `prefers-reduced-motion: reduce` turns off the 3D animation (a poster image shows instead), the tilt, the auto-playing demos and smooth scrolling.
- **No JavaScript.** All content stays fully usable with JavaScript turned off.

---

## 7. The signature moment: the 3D bahi-khata

### 7.1 The idea

For generations, Indian traders have kept their accounts in the bahi-khata, a red cloth-bound ledger. It is the most recognisable symbol of an Indian business's records. In 2019 the Finance Minister carried the Union Budget in a red bahi-khata instead of a briefcase, and since 2021 the same red pouch has carried a tablet. That makes it a national symbol of moving from paper to digital, which is exactly what Kool Konsulting does for each client.

On the homepage, a beautifully rendered 3D bahi-khata floats beside the headline. As the visitor scrolls:
1. the cotton rope slips off and the cover opens
2. the handwritten pages lift out one at a time
3. as each page rises, a carbon-blue scan line sweeps across it, turning the ink-on-paper into a crisp app screen
4. the four pages settle as four glowing cards: **Website**, **App**, **Business software** and **Automation**

The labels next to the cards link to the four services. Under the stage, a caption in the Small style reads: "From registers to real-time."

### 7.2 Assets
- **The model:** `public/3d/bahi-khata.glb`, built from `3D-BAHI-KHATA-PROMPT.md`.
  - Read that file's section 6, "Contract with the website". It lists the exact node names, pivots, axes, the `Curl` morph target and the `CAM_Hero` camera. Code against that contract.
  - Until the real GLB exists, build a stand-in from primitives (boxes and a tube) using the same node names, so development isn't blocked.
- **Posters:**
  - `public/3d/bahi-poster.avif`: the closed book on a transparent background, delivered with the GLB.
  - `public/3d/bahi-poster-open.avif`: the end state. Render it yourself from the live scene with a Playwright script, `scripts/render-3d-poster.mjs`.
- **Card textures:** four portrait WebP images, 512×1024, no more than 70 KB each, in `public/3d/cards/`:
  - website: a phone showing the dance academy site
  - app: construction site attendance
  - software: wholesale billing and stock
  - automation: a WhatsApp order chat

  Generate them from your own HTML mockup components with Playwright (`scripts/render-card-textures.mjs`), so the 3D cards match the 2D demos.

### 7.3 Stack
- **Libraries.** `three`, `@react-three/fiber` v8 and `@react-three/drei` v9. These versions match React 18, so don't upgrade React for this.
  - `three` must be r162 or later, for `NeutralToneMapping`.
  - Pin `three` to `0.170.x` unless a newer version builds and runs cleanly with drei 9.
- **Loading.** Load the GLB with drei's `useGLTF(url, false, true)`. drei bundles the Meshopt decoder (through three-stdlib), so there's no CDN request. No post-processing passes: no bloom, no depth of field.
- **Lighting.** Use drei's `<Environment resolution={256}>` built from `<Lightformer>` panels (no HDR download): a soft key light from the top left and a warm rim light from the right. Use `<ContactShadows>` baked once (`frames={1}`).
- **Colour.** Use `THREE.NeutralToneMapping` for accurate product colour.
- **Camera.** Use the GLB's `CAM_Hero`. Failing that, use a field of view of about 28°, looking slightly down at a three-quarter angle.

### 7.4 Choreography

`p` is the scroll progress through the sequence, from 0 to 1.

| p | What happens |
|---|---|
| Idle (before scrolling) | The closed book floats gently: ±4 mm and ±1.5° over about 6 seconds. On desktop it turns up to 5° towards the pointer. |
| 0.00–0.12 | `BK_Rope` lifts 2 cm and fades out. |
| 0.08–0.32 | `BK_FrontCover_Hinge` rotates around x from 0 to −π, eased. This reveals page 1 with its handwritten entries. |
| 0.30–0.78 | Pages 1–4 move one after another. For each page: <ol><li>its hinge rotates around x to about −0.35π, while its `Curl` morph goes from 0 to 0.6</li><li>the page detaches and flies to its card slot</li><li>during the flight it turns about its own x-axis until its content face looks at the camera (+π/2 from flat), and `Curl` returns to 0</li><li>a `digitise` uniform goes from 0 to 1: a thin carbon line sweeps from hinge to free edge, the paper texture becomes the UI texture behind it, and rounded corners grow in</li></ol> |
| 0.78–1.00 | The cards settle in a gentle arc (desktop) or a 2×2 grid (mobile) in front of the open book. The book eases back and down, and the four HTML labels fade in next to their cards. |

**The digitise effect** is one small custom material, `components/three/DigitiseMaterial.ts`:
- it mixes the two textures with `mix(paperTex, uiTex, step(edge, uv.y))`
- it adds a soft carbon band about 2–3% wide on the sweep edge
- it uses a rounded-rectangle alpha mask whose radius animates in

Keep it under 80 lines of GLSL.

**Page textures.**
- **Source:** the handwritten textures come from the `LedgerPaper` component (Kalam in carbon ink, on ruled paper with a red double margin), rendered to 512×1024 WebP by the same script.
- **Page 1:** a few lines in an owner's handwriting, such as "Ramesh  P  adv 500", "Cash in ₹12,400" and "Order 50 bags ✓".
- **No religious marks or invocations** on any page.

**If only a static model exists** (built with Route B in the 3D prompt), skip the opening. Instead, the closed book turns towards the viewer and the four cards rise out of it, with the same digitise effect.

### 7.5 Scroll mechanics
- **Desktop (1024 px and wider).**
  - The hero section is about 220vh tall, with a sticky inner frame 100vh tall. `p` is how far the visitor has scrolled through the section.
  - Use native scrolling only: no scroll hijacking, no smooth-scroll library, no GSAP.
  - A roughly 1 KB hook, `useSectionProgress`, reads the scroll position with `requestAnimationFrame` and writes it to a ref. The scene reads that ref inside `useFrame` and calls `invalidate()` when it changes.
- **Mobile (below 1024 px).**
  - There is no sticky section. The 3D stage is a square below the hero text.
  - When the stage is 60% visible, the timeline plays once over about 4.5 seconds, then a small "Play again" button appears.
  - The four labels sit under the stage as a 2×2 grid of links.

### 7.6 Performance and fallbacks (non-negotiable)
- **LCP.** The H1 is the LCP element. The 3D code must not delay it.
- **First paint.** Show `bahi-poster.avif` in the stage on first paint, at the same size and position as the canvas so nothing shifts.
- **Loading the scene.** Load it with `next/dynamic(() => import('…'), { ssr: false })` from inside a Client Component, but only when both of these are true:
  - the page is idle (`requestIdleCallback`, with a 2 s timeout)
  - the stage is within one viewport of the screen

  After the first rendered frame, cross-fade from the poster to the canvas over 400 ms.
- **When to skip WebGL.** Keep the poster and load no WebGL at all when:
  - `prefers-reduced-motion` is on
  - `navigator.connection.saveData` is on
  - `deviceMemory` is below 4
  - `hardwareConcurrency` is below 4
  - WebGL2 isn't available
  - or the scene throws an error (wrap the canvas in an error boundary)

  In these cases, show the end-state poster once the visitor scrolls to the end, with the same four labels.
- **Rendering.** Use `dpr={[1, 1.75]}` and `frameloop="demand"`. Stop rendering when the stage is off-screen or the tab is hidden.
- **Budgets.**

  | Item | Limit |
  |---|---|
  | 3D JavaScript chunk | 260 KB gzipped |
  | GLB | 600 KB |
  | Card and page textures | 400 KB total |
  | Frame rate on a mid-range Android | Steady 55–60 fps (at least 45 fps in Chrome DevTools with 4× CPU throttling) |
  | Long tasks during the sequence | None over 100 ms |
- **Accessibility.** The canvas is `aria-hidden="true"`. The meaning lives in the text next to it and in the four real, focusable links.

---

## 8. Tech you can touch: interactive features that prove capability

The site should feel like software, not a brochure. Alongside the 3D scene, build the features below. Each must be fast, accessible and usable on a phone with one thumb.

### 8.1 Before-and-after demos
On the homepage, in the "Real work" section.
- **Tabs:** "Construction site", "Cinema", "Wholesale shop" and "Dance academy", rendered as real tab buttons.
- **The stage:** each tab shows the "before" and the "after" on one stage.
  - The before is a `LedgerPaper` register, a `ParchiSlip`, or a printed pamphlet for the academy.
  - The after is the app or website in a `PhoneFrame`.
- **Comparing:**
  - **Desktop:** a draggable divider, built on an accessible `input type="range"` that works with the keyboard and has `aria-label="Compare before and after"`.
  - **Mobile:** a two-option toggle, "On paper" and "With the app", plus swipe.
- **Below the stage:** three facts about what was built, a "See the full project" link, and the caption "Recreated with sample data."

### 8.2 "Try an automation"
A scripted WhatsApp chat that makes no AI calls, shown in a `PhoneFrame` on the `carbon-050` band.
- **How it works:** the visitor taps suggested replies (chips), and the bot answers after a short typing indicator.
- **Scenarios:** three, as tabs.
  1. **Wholesale order.**
     - Customer: "Bhaiya, toor dal 50 kg ka rate? 20 bag chahiye."
     - Bot: "Namaste! Toor dal, 50 kg bag: ₹6,250. 20 bags in stock. Total ₹1,25,000 + GST."
     - Chips: "Confirm order" / "Change quantity".
     - On confirm: "Order #2041 confirmed ✅ Bill attached. Dispatch tomorrow by 11 am." with a file chip, "Bill_2041.pdf".
     - On change: "Sure, how many bags?" with chips for 10, 30 and 50, then the total is recalculated.
  2. **Payment reminder** (outgoing).
     - Bot: "Namaste Sharma ji. A gentle reminder: ₹42,300 is due on bill #1187 from 12 Sept. Pay by UPI:" followed by a "Pay now" button.
     - Chips: "Paid already" / "Will pay Friday".
     - Paid already: "Thank you! We'll match it and send your receipt."
     - Will pay Friday: "Noted. We'll remind you on Friday morning."
  3. **Clinic appointment.**
     - Patient: "Can I see the doctor tomorrow evening?"
     - Bot: "Yes. Tomorrow evening's free slots are 5:30, 6:00 and 7:15 pm."
     - Chips: one for each slot.
     - On a choice: "Booked for 6:00 pm with Dr. Mehta ✅ We'll remind you 2 hours before. Reply 1 to reschedule."
- **Labelling:** "Demo with sample data". End the demo with "Want this for your business? Chat on WhatsApp".

### 8.3 Ballpark estimator
Titled "Get a ballpark in a minute".
- **Step 1, what you need:** Website, App, Business software or Automation.
- **Step 2, size:** Simple, Standard or Advanced, each with a one-line example.
- **Step 3, extras:** a Hindi or Marathi interface, online payments, a Tally connection, the WhatsApp Business API.
- **Result:** "Usually ₹X to ₹Y, and A to B weeks", calculated from `data/pricing.ts`, followed by "Final price after a free check-up. GST extra."
- **Buttons:** "Send this to Kulvir on WhatsApp" (prefilled with their choices) and "Get a written quote" (opens the form with their choices filled in). Track completions.

### 8.4 Proposal mode
- **Trigger:** a `?for=Company+Name` parameter, sanitised to letters, numbers, spaces, `&` and `.`, at most 40 characters, and rendered with `textContent`. It can come with an optional `&industry=` parameter: `construction`, `trading`, `manufacturing`, `hospitality`, `healthcare`, `education` or `retail`.
- **What it shows:** a slim bar under the header reading "Prepared for **{Company}**", with links to How we work, Pricing and Credentials.
- **What it changes:** the demo tabs and featured work are reordered to lead with that industry.
- **Persistence:** store it in `sessionStorage` (wrapped in try/catch) for the rest of the visit.
- **SEO:** these URLs canonicalise to the clean URL, so they never get indexed.

### 8.5 WhatsApp everywhere, with context
Every WhatsApp link pre-fills a message that says where the visitor came from. From the Apps page, for example: "Hi Kulvir, I saw your apps page. I'm looking for an app for my business." The messages are built from `data/site.ts`.

### 8.6 Speed as a feature
Navigation feels instant (with prefetching), nothing shifts as the page loads, and WhatsApp and Call respond immediately. The site's speed is part of the pitch.

### 8.7 Optional, later, off by default: the "Ask Kool" assistant
- **What it does:** a small chat that answers questions about services, prices and the process, in English, Hindi or Marathi. It uses only the site's own data files, with no web browsing, and hands off to WhatsApp with a summary.
- **How it's built:** a server-side Route Handler, with the AI provider key in an env var.
- **Guardrails:**
  - rate-limited per IP
  - a maximum of 6 turns
  - refuses unrelated topics
  - never quotes a price that isn't in `data/pricing.ts`
  - stores nothing
- **When:** enabled only when `ASSISTANT_ENABLED=true`. Build it only after everything else passes the checklist.

---

## 9. Site map, URLs and redirects

| URL | Page |
|---|---|
| `/` | Home |
| `/services` | All four services |
| `/services/websites` | Websites |
| `/services/apps` | Apps |
| `/services/software` | Business software |
| `/services/automation` | Automation & AI |
| `/work` | All projects, filterable by service and industry |
| `/work/[slug]` | One project's story |
| `/pricing` | Starting prices, care plans, payment terms |
| `/about` | Kulvir and how the studio works |
| `/contact` | Free tech check-up form, WhatsApp, call, location |
| `/faq` | FAQ |
| `/privacy` | Privacy notice |
| `/terms` | Terms |
| `/credentials` | Printable one-page capability sheet (noindex) |
| `/thanks` | Form success page for visitors without JavaScript (noindex) |
| 404 | Custom not-found page |

**Permanent redirects** (`permanent: true`) in `next.config.mjs`:

| From | To |
|---|---|
| `/scorecard` | `/contact` |
| `/services/web-development` | `/services/websites` |
| `/services/local-visibility`, `/services/local-seo-nagpur`, `/services/google-business-profile-management`, `/services/reputation-management`, `/services/digital-marketing` | `/services/websites` |
| `/services/software-development`, `/services/internal-tools` | `/services/software` |
| `/services/automation-ai`, `/services/ai-agents-for-business`, `/services/workflow-automation` | `/services/automation` |
| `/services/strategy-planning`, `/services/business-plan-writing`, `/services/financial-modelling`, `/services/market-entry-strategy` | `/services` |
| `/work/construction-workforce-automation` | `/work/construction-site-app` |
| `/work/options-trading-agent` | `/work` |

**Keep these live**, because recent proposals link to them. Re-render them in the new design under "Earlier work and experiments":
- `/work/adlens-ai`
- `/work/agency-ad-operations`
- `/work/distributor-workflow-automation`
- `/work/trakit-australian-market-entry`
- `/work/finance-data-automation`
- `/work/ai-construction-site` (if Kulvir confirms it's the same work as the AI cameras, redirect it to `/work/ai-cameras` instead)

---

## 10. Page by page

### 10.1 Global

**Header.**
- **Size:** 72 px, sticky. After 8 px of scrolling it turns `paper` at 85% opacity with a backdrop blur.
- **Desktop, left to right:**
  - the logo
  - Services, which opens a panel listing the four services, each with a one-line outcome and its starting price
  - Work, Pricing and About
  - a green "Chat on WhatsApp" button on the right
- **Mobile:** the logo, a 44 px WhatsApp icon button and a menu button. The wordmark must never wrap.

**Mobile action bar.**
- **When:** it appears once the hero has scrolled off screen, and hides over the footer or while the keyboard is open.
- **What:** two equal buttons, "WhatsApp" (green) and "Call" (white). 56 px tall and safe-area aware.

**Footer.**
- the logo and the one-liner
- Services
- Company: Work, Pricing, About, FAQ, Credentials
- Contact: WhatsApp, phone, email once it's live, the address with a Google Maps link once it's set, and hours
- Legal: Privacy, Terms
- GSTIN and Udyam number, if they're set in `data/site.ts`
- the line "© 2026 Kool Konsulting. Designed and built in Nagpur."

### 10.2 Home

1. **Hero.** Desktop is a 6/6 split, with the text on the left and the 3D stage on the right. On mobile they stack.
   - **H1:** **We build the tech that runs growing Indian businesses.**
     If Kulvir prefers, use one of these instead: "From registers to real-time." or "Your business has outgrown the register."
   - **Lead:** "Websites, apps, business software and AI automations, built around how your team already works. You deal directly with the person who builds them."
   - **Buttons:** primary "Get a free tech check-up" (goes to `/contact`); secondary "Chat on WhatsApp" (white, with the WhatsApp glyph).
   - **Proof line** (Small style): "Built for a cinema, a construction site, a mandi wholesale shop, a dance academy in Lucknow and a jewellery designer in London." Change "Built for" to "Running at" only for projects whose status is Live or In daily use.
   - **3D stage** (section 7), with the caption "From registers to real-time." and the four service links.
2. **Real work.**
   - H2: "Software that replaced the register"
   - the before/after demo stage (section 8.1)
   - three featured project cards: the construction app, the cinema forecasting app and the dance academy website
   - a "See all work" link
3. **What we build.** H2 "What we build", with the lead "Most businesses start with one thing and add the rest later."
   - **Layout:** an index of four rows, not four identical cards.
   - **Each row has:**
     - the service name as an H3
     - a one-line promise
     - three example builds as plain chips
     - "Starting from ₹…" and "Usually … weeks", both from `data/pricing.ts`
     - a small mockup on the right: a browser, phone, dashboard or chat
     - a link, "See {service}"
   - **Below the index:** "Prices exclude GST. Usage costs, such as WhatsApp messages or AI, are billed to you by the provider with no markup from us."
4. **Try an automation.** On the `carbon-050` band (section 8.2). H2 "Try an automation".
5. **Built for businesses like yours.**
   - **Layout:** a two-column list, not cards.
   - **Each row:** the industry, the everyday problem in the owner's words, and two or three typical builds.

   | Industry | The problem | Typical builds |
   |---|---|---|
   | Traders and distributors | Orders on WhatsApp, credit to chase, stock across godowns | WhatsApp order capture, payment reminders, a stock app |
   | Manufacturers | Production and dispatch tracked on paper and phone calls | Production and dispatch tracking, a dealer portal, a daily owner report on WhatsApp |
   | Builders and contractors | Attendance registers, site cash, lost photos | A site attendance and wages app, material tracking, lead follow-ups |
   | Cinemas, restaurants and events | Guessing quantities, posting every show by hand, taking ticket requests by phone | Demand forecasts, auto-posting, ticketing and sign-ups |
   | Clinics and diagnostic centres | Appointments by phone, reports collected in person | Booking with reminders, reports on WhatsApp |
   | Schools, coaching and academies | Admission enquiries, fee reminders, parent updates | An enrolment website, fee reminders, an attendance app |
   | Shops and showrooms | Customers can't find you online | A catalogue website, Google profile setup, a WhatsApp catalogue |
6. **How a project runs** (`#process`). H2 "How a project runs". This is a genuine 5-step sequence, so numbers are allowed. It runs horizontally on desktop and vertically on mobile.
   1. **Free tech check-up.** 30 minutes on a call, a video call, or at your office in Nagpur. We look at how you work today and tell you the first thing worth fixing. If a ready-made app already does the job, we'll say so.
   2. **Written plan and fixed quote.** Scope, timeline, price and payment milestones in writing. No hourly billing.
   3. **Build, with a demo every week.** You try it on your own phone as it grows, and you can change course early.
   4. **Launch and training.** We set it up with your team in Hindi, Marathi or English, and stay close for the first weeks.
   5. **Support that continues.** A care plan for hosting, backups and changes, or a full handover. The code, data, domain and accounts are always in your name.
7. **Why owners choose us** (`#why`). H2 "Why owners choose Kool Konsulting".
   - **Format:** a real `<table>`. On mobile it scrolls horizontally, with the first column sticky.
   - **Cells:** use these, and keep them fair:

   | | Kool Konsulting | Typical IT agency | Freelancer | Ready-made software |
   |---|---|---|---|---|
   | Who you deal with | Kulvir, from first call to after launch | A sales contact, then a project team | One person; availability varies | A support desk |
   | Built around your process | Yes, mapped with your team first | Varies, often a template | Varies | You adjust to the software |
   | Price | Fixed written quote, paid in milestones | Quote plus change requests | Low, but scope can drift | Lowest upfront; a monthly fee per user |
   | Who owns code, data and accounts | You do | Check the contract | Check the handover | The vendor's platform |
   | After launch | Care plan or full handover | Annual maintenance contract | Depends on availability | The vendor's roadmap |
   | Understands your numbers | Finance background; starts from your margins and cash flow | Not usually the focus | Not usually the focus | Built for the average business |

   - **Below the table:** "Ready-made software is the right answer for many standard needs. We'll tell you when it is."
8. **You'll work with Kulvir** (`#about`).
   - the photo (4:5, in colour)
   - H2 "You'll work with Kulvir"
   - a 70-word bio from `data/site.ts` and a plain list of credentials
   - "Chat with Kulvir on WhatsApp"
9. **Ballpark and pricing** (`#estimate`). H2 "Get a ballpark in a minute", followed by the estimator (section 8.3) and a link to `/pricing`.
10. **FAQ** (`#faq`). Six questions from `data/faqs.ts` in an accordion, and a link to `/faq`.
11. **Final CTA.** Centred, with generous space.
    - H2: "Tell us what's slowing your business down."
    - Lead: "The 30-minute check-up is free. You'll get a straight answer on what to fix first and roughly what it costs."
    - Buttons: "Chat on WhatsApp", "Call Kulvir" and "Send an enquiry".
    - Small text: "Kulvir replies within one working day."

### 10.3 Service pages (`/services/[slug]`)

One template for all four, with content from `data/services.ts`. Sections, in order:
1. **Hero:**
   - the H1 promise and the lead
   - the starting price and typical timeline
   - a primary CTA with a WhatsApp message specific to the service
   - a large mockup for that service
2. **What we build:** 6–8 concrete deliverables, one line each
3. **What's included / What's not included:** two honest lists
4. **Related projects,** filtered from `data/work.ts`
5. **Built for:** the industries this service suits
6. **Process** (the shared component)
7. **FAQs for this service**
8. **Final CTA**

On the Websites page, use the market fact "Only about 1 in 4 Indian MSMEs has a business website." with its source line.

### 10.4 Work (`/work` and `/work/[slug]`)

**The index page.**
- **Heading:** H1 "Work".
- **Filters:** filter chips by service and by industry. Keep the filter in the URL, and make it work without JavaScript as plain links.
- **Each project card shows:**
  - a real screenshot or a recreated mockup
  - an outcome-led title
  - a client descriptor, e.g. "A construction site with 30+ workers"
  - the place, the service and a status badge
- **Earlier work:** at the bottom, a separate, quieter section titled "Earlier work and experiments" holds past roles and prototypes, clearly labelled.

**Each project page.** In order:
1. the title, client descriptor, place, service and status
2. the problem, in the owner's words
3. what we built, as bullets
4. how it works, as a simple flow diagram in HTML with 3–5 steps
5. screens, real or recreated (and labelled)
6. tools, first in plain words, then by name
7. results, only if real numbers exist
8. a quote, only if it's real
9. "Want something like this?", with a WhatsApp message that names this project
10. links to the next and previous projects

For the "Earlier work and experiments" entries, keep the long-form content from the existing `data/caseStudies.ts`, trimmed and re-rendered in the new design.

### 10.5 Pricing (`/pricing`, anchor `#engagement-models`)
In order:
1. **The price table,** from `data/pricing.ts`: service, starting price, what's included and typical timeline.
2. **Care plans.**
3. **How payments work,** from `data/site.ts`, with the GST note and the line: "Never included: licence fees paid to us, lock-in, or charges you didn't approve in writing."
4. **The estimator,** then the CTA.

### 10.6 About (`/about`)
- Kulvir's story in 180 words or fewer (a draft is in Appendix A for Kulvir to edit) and his photo
- his credentials list
- "How I work": four short principles (one accountable builder, fixed quotes, everything in your name, tech your staff will actually use)
- the languages he works in, and his location
- the CTA
- a link to "Earlier work and experiments"

### 10.7 Contact (`/contact`, anchor `#check-up`)

Two columns, stacked on mobile.

**Left column:** H1 "Get a free tech check-up" and the form.

**Right column:**
- WhatsApp, shown big, and Call
- email, once it's live
- the Cal.com booking embed, only if `calLink` is set
- the address with a Google Maps link, once it's set
- hours and the response promise

**Form fields:**

| Field | Details |
|---|---|
| Name | Required |
| Business name | Required |
| Phone or WhatsApp | Required; accept Indian formats |
| What do you need? | Chips: Website, App, Business software, Automation, Not sure yet |
| Tell us a little | Optional textarea; placeholder "e.g. We take orders on WhatsApp and lose track of payments" |
| City | Optional |
| Email | Optional |

- **Consent line** under the button, for the DPDP Act 2023: "We'll use these details only to reply to your enquiry. We don't share them." followed by a link to the privacy policy.
- **Prefill** the form from a `?service=` parameter and from the estimator.

### 10.8 FAQ, Privacy, Terms, 404, Thanks and Credentials

**`/faq`.** The grouped FAQ from `data/faqs.ts`, with FAQPage JSON-LD.

**`/privacy`.** A plain-language notice in line with India's DPDP Act 2023 and the DPDP Rules 2025. It covers:
- what we collect: form fields, WhatsApp chats the visitor starts, and basic analytics
- why: to reply and to quote
- how long we keep it
- who processes it: Vercel, Resend, Google and the analytics provider
- how to ask for access, correction or deletion
- a named contact for grievances: Kulvir, with the email and phone from `data/site.ts`
- response time: within 90 days at most, aiming for a week

**`/terms`.** Short terms for using the site and how quotes work.

**404.** "This page isn't here. It may have moved when we rebuilt the site." Link to Home, Services, Work and WhatsApp.

**`/thanks`.** The success page for form posts without JavaScript, with "What happens next" in three steps.

**`/credentials`** (noindex). One A4 page with `@media print` styles on a white background. It holds:
- the logo and the one-liner
- the four services with starting prices
- four projects and the process
- Kulvir's credentials
- contact details and a QR code to the homepage (an SVG generated at build time)

A "Save as PDF" button calls `window.print()`.

---

## 11. Content and data (seed these files)

### 11.1 `data/site.ts`
```ts
export const site = {
  name: "Kool Konsulting",
  origin: "https://kool-konsulting.vercel.app", // TODO(kulvir): switch to https://koolkonsulting.com once bought and connected
  oneLiner:
    "Kool Konsulting builds websites, apps, business software and automations for growing Indian businesses. Based in Nagpur. Working across India.",
  phoneDisplay: "+91 88888 21351",
  phoneE164: "+918888821351",
  whatsappNumber: "918888821351",
  whatsappDefault: "Hi Kulvir, I found Kool Konsulting's website. I'd like to talk about my business.",
  email: "hello@koolkonsulting.com",
  emailLive: false, // TODO(kulvir): set to true once the mailbox works
  address: { street: "", locality: "Nagpur", region: "Maharashtra", postalCode: "", country: "IN" }, // TODO(kulvir)
  mapsUrl: "", // TODO(kulvir): Google Maps link to the office
  geo: null as null | { lat: number; lng: number },
  hours: "Mon–Sat, 10 am–7 pm", // TODO(kulvir): confirm
  responsePromise: "within one working day", // never promise anything faster than this
  languages: ["English", "Hindi", "Marathi"], // TODO(kulvir): confirm
  gstin: "", // TODO(kulvir): shown in the footer only if set
  udyam: "", // TODO(kulvir): shown in the footer only if set
  calLink: "", // TODO(kulvir): e.g. "kulvir/30min"
  sameAs: [] as string[], // LinkedIn, Google Business Profile, Instagram once live
  freeFixWindowDays: 30, // TODO(kulvir): confirm
  payments:
    "Projects under ₹2 lakh: 50% to start, 50% at launch. Larger projects: milestones agreed in the quote. UPI or bank transfer.", // TODO(kulvir): confirm
  analytics: { provider: "none" as "none" | "plausible" | "umami" | "ga4", id: "" },
  founder: {
    name: "Kulvir Sharma",
    role: "Founder",
    photo: "/kulvir-sharma.webp",
    credentials: [
      "B.Com in Finance and Management, The University of Melbourne (2022–2026)",
      "Business development, TrakIT (B2B logistics software), Melbourne, 2025",
      "Distributor success (internship), DSP Asset Managers, 2024–25",
      "Founder, KoolKollects, an online and offline footwear and clothing marketplace (2021–22)",
      "Diploma in Digital Marketing, SSCBS, University of Delhi (2021–22)",
    ], // TODO(kulvir): confirm the wording, and add or remove anything
  },
};
```

### 11.2 `data/pricing.ts`

> **Defaults only. Kulvir must confirm every figure before launch.**
>
> Benchmarks from 2026 Indian market pricing guides:
> - agency business websites (5–7 pages): ₹30,000–80,000
> - app MVPs: ₹1.2–2.5 lakh
> - basic custom CRM: ₹2–6 lakh
>
> These defaults sit in the middle of the agency range, with founder-level attention.

| Service | Starting from | Typical timeline | Estimator ranges (Simple / Standard / Advanced) |
|---|---|---|---|
| Websites | ₹40,000 | 2–4 weeks | ₹40k–60k / ₹60k–1.2L / ₹1.2L–2.5L |
| Apps | ₹1,00,000 | 4–10 weeks | ₹1L–2L / ₹2L–4L / ₹4L–8L |
| Business software | ₹1,50,000 | 4–12 weeks | ₹1.5L–2.5L / ₹2.5L–5L / ₹5L–10L |
| Automation & AI | ₹25,000 per automation | 1–4 weeks | ₹25k–50k / ₹60k–1.2L / ₹1L–2L |

**Care plans.**
- **Website care,** from ₹1,500 a month: hosting, backups and small edits.
- **App, software and automation care,** from ₹8,000 a month: monitoring, fixes, small changes and priority support.

**Estimator extras.**

| Extra | Adds |
|---|---|
| Hindi or Marathi interface | 10–15% |
| Tally connection | ₹25,000–60,000 |
| Online payments (UPI/Razorpay) | ₹15,000–30,000 |
| WhatsApp Business API setup | ₹10,000–20,000, plus Meta's message charges |

Every figure excludes GST.

### 11.3 `data/services.ts`

Each service needs: slug, name, H1 promise, lead, examples (shown as chips), deliverables (6–8, with one line each), included, not included, industries, related work slugs, FAQs, a WhatsApp message, and a meta title and description.

**Websites.**
- **H1:** "Websites that bring in enquiries."
- **Lead:** "Fast on phones, easy to find on Google, and every enquiry lands on your WhatsApp."
- **Examples:** business websites, product catalogues, online booking.
- **Deliverables:**
  - design, with help writing the words
  - a mobile-first build
  - WhatsApp and call buttons that track enquiries
  - enquiry forms that reach your phone
  - Google Business Profile setup
  - search basics: titles, structured data and a sitemap
  - analytics you can actually read
  - domain, hosting and email set up in your name
  - training to update text and photos yourself
- **Not included:** managing paid ads, monthly SEO retainers.

**Apps.**
- **H1:** "Apps your staff and customers actually use."
- **Lead:** "Android and iOS from one build, in Hindi, Marathi or English, and quick on budget phones."
- **Examples:** staff attendance and field apps, ordering and booking apps, customer portals.
- **Deliverables:**
  - an app design your staff can learn in a day
  - Android and iOS apps, plus a web version where it helps
  - login by PIN or OTP
  - works on patchy internet where needed
  - PDFs and summaries shared on WhatsApp
  - UPI payment links
  - an admin panel for the owner
  - Play Store and App Store publishing, in your accounts

**Business software.**
- **H1:** "Software shaped around how you already work."
- **Lead:** "Billing, stock, orders and follow-ups in one place, connected to Tally, Excel or Google Sheets."
- **Examples:** billing and inventory, order and dispatch tracking, dealer and distributor portals, owner dashboards.
- **Deliverables:**
  - process mapping with your team before anything is built
  - billing with customer-specific prices
  - stock across shops and godowns
  - orders, dispatch and delivery status
  - follow-ups and payment tracking
  - an owner dashboard on phone and laptop
  - connections to Tally, Excel or Google Sheets
  - roles and permissions for staff
  - daily backups

**Automation & AI.**
- **H1:** "Let software do the repetitive work."
- **Lead:** "WhatsApp replies, payment reminders, daily reports and data entry that run on their own, with a person stepping in when needed."
- **Examples:** WhatsApp order capture, payment reminders, bills read into Tally, demand forecasts, AI cameras.
- **Deliverables:**
  - WhatsApp Business API set up in your name
  - auto-replies and order capture on WhatsApp
  - payment and renewal reminders
  - a daily owner report on WhatsApp
  - bills and invoices read into Tally or Excel
  - social media auto-posting
  - demand forecasts from your own records
  - AI assistants trained on your catalogue and FAQs
  - AI cameras for counting and safety alerts (TODO(kulvir): match this wording to the AI camera work)
- **Note on the page:** "A person can always take over. Every automation has a clear hand-off to your team."

### 11.4 `data/work.ts`

The schema is below. Render only the fields that are filled in.

```ts
type Project = {
  slug: string;
  title: string; // outcome-led, in plain words
  client: string; // named only with written permission; otherwise a descriptor
  place?: string;
  industry: "construction" | "hospitality" | "trading" | "manufacturing" | "healthcare" | "education" | "retail" | "services";
  services: ("websites" | "apps" | "software" | "automation")[];
  status?: "Live" | "In daily use" | "Pilot" | "Prototype" | "Earlier role";
  year?: string;
  problem: string; // the owner's problem, in their words
  built: string[];
  howItWorks?: string[]; // 3–5 steps for the flow diagram
  tools?: string[];
  results?: { value: string; label: string; source: string }[]; // real numbers only
  quote?: { text: string; name: string; role: string }; // real, with permission
  images?: { src: string; alt: string; recreated?: boolean }[];
  liveUrl?: string;
  featured?: boolean;
  group: "client" | "earlier";
  hidden?: boolean; // true until the TODOs are filled
};
```

**Seed entries.** Kulvir fills in the TODOs. Don't add anything beyond what's written here.

1. **`construction-site-app`**
   - **Title:** "Attendance, wages and site cash on the supervisor's phone"
   - **Client:** a building site with 30+ workers. **Industry:** construction. **Service:** apps.
   - **Problem:** "Attendance and site cash were kept in registers, so wages and weekly totals were worked out by hand."
   - **Built:**
     - an Android and iOS app, with PIN login for the supervisor and a backup supervisor
     - daily attendance for 30+ workers
     - wages calculated automatically from attendance
     - cash in and out, by category
     - weekly and monthly summaries as a PDF or image, shared on WhatsApp
     - data synced across phones
   - **Tools:** React Native (Expo), Firebase.
   - **TODO(kulvir):** status, year, place. **Featured.**
2. **`cinema-samosa-forecast`**
   - **Title:** "How many samosas for the 9 pm show? The app works it out."
   - **Client:** a cinema. Name it as Liberty Cinema only if they agree (TODO). **Industry:** hospitality. **Services:** automation, apps.
   - **Problem:** "The canteen had to guess how many samosas to prepare for each show."
   - **Built:**
     - a mobile app that predicts how many samosas each show needs from the expected audience
     - predictions based on ratios learned from a month of the cinema's own paper registers, by show time and type of day
     - the paper records digitised from voice notes and photos
   - **TODO(kulvir):** tools, status. **Featured.**
3. **`movie-promo-autoposting`**
   - **Title:** "New movie posters and trailers, posted automatically"
   - **Client:** a cinema (TODO: confirm). **Industry:** hospitality. **Service:** automation.
   - **Built:** type a movie name into a Google Sheet, and a script finds the official poster and trailer and posts them to the business's Facebook Page and Instagram.
   - **Tools:** Google Sheets, Apps Script, TMDB, Zapier.
4. **`wholesale-shop-billing`**
   - **Title:** "From carbon-copy parchis to stock that matches the shelves"
   - **Client:** an agri-input wholesale and retail shop in a Haryana mandi. **Industry:** trading. **Service:** software.
   - **Problem:** "Every sale was written on a carbon-copy parchi, so stock on the computer rarely matched the shop floor."
   - **Built:** TODO(kulvir).
   - **Framing:** present it as recording every item at the counter so stock is accurate. **Do not mention kaccha/pakka billing, or unbilled sales, anywhere on the site.**
5. **`event-ticketing-onboarding`**
   - **Title:** "Artist sign-ups and ticket requests for live music nights"
   - **Client:** Kool Kalakaars, a Nagpur music community (TODO: confirm this is the platform). **Industry:** hospitality. **Services:** software, automation.
   - **Built:** artists apply with their details and a sample of their performance; audiences request tickets through a web app; everything lands in one sheet for the organisers.
   - **Tools:** Google Forms, Apps Script, Google Sheets.
6. **`ai-cameras`**
   - **Title:** "AI cameras"
   - **TODO(kulvir):** what the cameras detect, where they run, and the status.
   - Set `hidden: true` until this is filled in.
7. **`bachpan-dance-academy`**
   - **Title:** "A website for a Kathak and folk dance academy"
   - **Client:** Bachpan dance academy. **Place:** Lucknow. **Industry:** education. **Service:** websites.
   - **Built:** a multi-page site with class timings, fees and a free first class; enrolment by call or WhatsApp.
   - **Tools:** Next.js, Tailwind CSS.
   - **TODO(kulvir):** the live URL. **Featured.**
8. **`three-marketeers-website`**
   - **Title:** "Website for a marketing agency"
   - **Client:** The Three Marketeers. **Industry:** services. **Service:** websites.
   - **Live URL:** https://the-three-marketeers.netlify.app (TODO: confirm it's still the current address).
9. **`designs-by-deepti`**
   - **Title:** "Portfolio website for a jewellery designer"
   - **Client:** Designs by Deepti. **Place:** London. **Industry:** retail. **Service:** websites.
   - **Live URL:** https://designsbydeepti.vercel.app
10. **Earlier work and experiments** (`group: "earlier"`). Use the existing content in `data/caseStudies.ts`, trimmed:
    - `adlens-ai` (Prototype)
    - `agency-ad-operations` (Prototype)
    - `distributor-workflow-automation` (Earlier role, DSP Asset Managers)
    - `trakit-australian-market-entry` (Earlier role)
    - `finance-data-automation` (Earlier role)
    - `ai-construction-site` (Prototype, unless it's merged into `ai-cameras`)

    Remove `options-trading-agent`; it already has a redirect.

### 11.5 `data/faqs.ts` (seed answers)
- **How much will it cost?** Starting prices are on the pricing page. After a free check-up you get a fixed quote in writing, with milestones. No hourly billing and no surprises.
- **How long does it take?** Websites usually take 2–4 weeks and automations 1–4. Apps and business software take 4–12 weeks, depending on size. You see progress every week.
- **Will my staff be able to use it?** That's the point. We design for the people who use it every day, in Hindi, Marathi or English. We train them at launch and stay close for the first weeks.
- **Does it work with Tally?** In most cases, yes. We can send data to Tally or read from it, or work through Excel and Google Sheets. We'll confirm the right way for your setup during the check-up.
- **Who owns the code, the data and the accounts?** You do. The domain, hosting, app store accounts, WhatsApp Business account and code are all set up in your name.
- **What happens if something breaks after launch?** Bugs in what we built are fixed free for `{freeFixWindowDays}` days after launch. After that, choose a care plan or pay as you go.
- **Do you only work in Nagpur?** We're based in Nagpur and can visit businesses in Nagpur and across Vidarbha. Everything else works over calls and WhatsApp, anywhere in India.
- **Is my data safe?** We use established cloud providers, give access only to people you approve, keep backups, and follow India's DPDP Act.
- **Can you work with what I already use?** Yes. Often the best first step is connecting the tools you already have, like WhatsApp, Excel and Tally, rather than replacing them.
- **Can I start small?** Yes. Many owners start with one automation or a website, and add more once it's working.

---

## 12. Technical requirements

**Stack.**
- **Keep:** Next.js 14 App Router, React 18, Tailwind 3, TypeScript and `lucide-react`.
- **Remove** `framer-motion` unless a component truly needs it; CSS covers most of the motion.
- **Add** `three@0.170`, `@react-three/fiber@8` and `@react-three/drei@9`, for the 3D scene only. If you hit ESM errors, add `transpilePackages: ['three']`.
- **Don't add:** GSAP, smooth-scroll libraries or UI kits.

**Structure.**

| Folder | Holds |
|---|---|
| `app/` | Routes |
| `components/ui`, `components/home`, `components/demos`, `components/three`, `components/work` | Components |
| `data/` | Content |
| `lib/` | Helpers: WhatsApp link builder, `track`, INR formatting, the capability check |
| `scripts/` | Playwright renders |

**Metadata.** Set `metadataBase` from `site.origin`. Give every page a unique title (no more than 60 characters) and description (140–160 characters), written for searches in Nagpur and across India. For example:

| Page | Title |
|---|---|
| Home | "Website, App and Software Development in Nagpur \| Kool Konsulting" |
| Websites | "Website Development Company in Nagpur \| Kool Konsulting" |
| Apps | "Mobile App Development in Nagpur, Android and iOS \| Kool Konsulting" |
| Software | "Custom Business Software in Nagpur: Billing, Stock, CRM \| Kool Konsulting" |
| Automation | "WhatsApp Automation and AI for Businesses \| Kool Konsulting, Nagpur" |

**Structured data (JSON-LD).**

| Where | Schema |
|---|---|
| Every page | `Organization` + `ProfessionalService`: name, url, logo, telephone, `areaServed` (Nagpur, Maharashtra, India), founder, `sameAs`. Add `address` and `geo` only when real values exist. |
| Home | `WebSite` |
| About | `Person` |
| Each service page | `Service`, with `offers.priceSpecification` (minimum price in INR) |
| Pages with breadcrumbs | `BreadcrumbList` |
| Pages with FAQs | `FAQPage` |

**Files.** `app/sitemap.ts` (leave out noindex pages and proposal-mode URLs), `app/robots.ts`, `app/not-found.tsx`, `app/manifest.ts` and the icons.

**OG images.**
- **How:** an `opengraph-image.tsx` per route group, using `next/og`.
- **Design:** a `paper` background, the mirrored-K mark, the page title in Anek Latin, and a carbon underline rule.
- **Font file:** load a static `.woff` from `@fontsource/anek-latin`, because Satori can't read WOFF2 or variable fonts.
- **Test:** they must look sharp as WhatsApp previews, so paste the URLs into WhatsApp to check.

**Analytics.**
- **Page views:** use `@vercel/analytics`.
- **Conversions:** a `lib/track.ts` wrapper sends these events to whichever provider is set in `data/site.ts` (Plausible, Umami or GA4). If none is set, it does nothing.
  - `whatsapp_click` (with location)
  - `call_click`
  - `form_submit`
  - `estimator_complete`
  - `demo_interaction`
  - `checkup_cta`

**Performance budgets** (mobile Lighthouse, throttled 4G).

| Metric | Target |
|---|---|
| LCP | 2.0 s or less |
| CLS | 0.05 or less |
| INP | 200 ms or less |
| Homepage JS, before the 3D chunk | 130 KB gzipped or less |
| Lighthouse | 95+ in Performance, Accessibility, Best Practices and SEO |

Serve images through `next/image` (AVIF/WebP, explicit sizes, lazy-loaded below the fold).

**Accessibility.** Meet WCAG 2.2 AA.
- **Focus and targets:** a visible carbon focus ring (2 px, 2 px offset), and touch targets of at least 44 × 44 px.
- **Forms:** proper labels and clear error messages.
- **Keyboard:** tabs, the accordion and the before/after slider all fully usable by keyboard.
- **Structure:** one H1 per page, headings in order, landmarks and a skip link.

**Security headers.** Keep the headers in `vercel.json`, and add a sensible `Content-Security-Policy` that allows the Cal.com embed only when it's enabled.

---

## 13. Work order and checkpoints

1. **Phase 0** (section 4). Deploy. **Checkpoint 0.**
2. **Foundations.** Build the tokens, fonts, `components/ui`, `Logo`, `Header`, `Footer` and `MobileActionBar`.
   - Render a style-guide page at `/dev/styleguide` (noindex; remove it before launch). It shows the type scale, the colours with their contrast ratios, buttons, chips, tabs, device frames, `LedgerPaper`, `ParchiSlip` and `ChatThread`.
   - **Checkpoint 1:** screenshots at 390 px and 1440 px.
3. **Homepage without 3D** (the poster sits in the stage), including the before/after demos, the WhatsApp demo and the estimator.
   - **Checkpoint 2:** screenshots at 390 px and 1440 px, plus Lighthouse mobile scores.
4. **3D scene,** first with the stand-in model, then with the real GLB when it's ready.
   - **Checkpoint 3:**
     - a short screen recording, or six screenshots at different values of `p`
     - the frame rate measured with 4× CPU throttling
     - the chunk sizes
5. **The remaining pages:** Services, Work, project pages, Pricing, About, Contact, FAQ, legal pages, 404, Thanks, Credentials and proposal mode.
6. **SEO and analytics:** OG images, structured data, sitemap, analytics, and a test of every redirect.
7. **Full QA** against section 14. Fix everything, remove `/dev/styleguide`. **Final checkpoint.**

Before you show any checkpoint, critique your own screenshots:
- alignment, spacing rhythm and line lengths
- headings and the wordmark wrapping where they shouldn't
- contrast
- whether any section looks like a generic template

Fix what you find, then show.

---

## 14. Acceptance checklist

**Leads and links**
- [ ] The contact form delivers a real lead (by email, the sheet, or both) and never shows success when nothing was sent. The WhatsApp fallback carries what the visitor typed.
- [ ] Every URL in the old sitemap and every `/work/*` slug resolves (200 or a permanent redirect). No old proposal link hits a 404.
- [ ] WhatsApp links everywhere carry a message specific to where they are, and the mobile action bar behaves as specified.

**Honesty and copy**
- [ ] No banned words and no unbacked numbers. Every recreated screen says so, and empty data hides its section.

**Design**
- [ ] None of the AI-template tells from section 3.3: no all-caps eyebrows, monospace labels, highlighted headline words, identical card grids, or fade-ups on every section.
- [ ] The hero H1 runs no more than 4 lines at 1440 px and 5 at 390 px. The wordmark never wraps. One primary button per viewport.

**3D and interactive features**
- [ ] 3D: the poster shows on first paint with no layout shift, and the scene loads lazily.
- [ ] 3D: the sequence runs smoothly, at 45 fps or better with 4× CPU throttling, and rendering pauses when the stage is off-screen.
- [ ] 3D: the fallbacks work (reduced motion, Save-Data, low memory, no WebGL2), the chunk is 260 KB gzipped or less, and the GLB is 600 KB or less.
- [ ] The before/after demos, WhatsApp demo, estimator and tabs all work by keyboard and by thumb at 360 px.
- [ ] Proposal mode: `/?for=Agarwal%20Traders&industry=trading` shows the bar and leads with trading. `/credentials` prints to one clean A4 page.

**Performance, SEO and build**
- [ ] Lighthouse mobile scores 95+ in all four categories on Home, one service page, Work and Contact.
- [ ] Metadata, JSON-LD, the sitemap, robots and the OG previews (tested in WhatsApp) are all correct.
- [ ] `npm run build` passes with type checking. No console errors, and no leftover Astro files or dependencies.

**Visual review**
- [ ] Screenshots taken, reviewed and fixed at 360, 390, 768, 1024 and 1440 px for Home, Services, one service page, Work, a project page, Pricing, About and Contact.

---

## Appendix A: About-page story (a draft for Kulvir to edit)

> I'm Kulvir Sharma. I studied finance and management at the University of Melbourne, worked in business development at a logistics software company in Melbourne and with distributors at DSP Asset Managers, and before that built my own marketplace, KoolKollects.
>
> Everywhere I looked, the same thing held businesses back. Good owners were running on registers, Excel sheets and WhatsApp follow-ups, and their software vendors didn't understand how they worked.
>
> Kool Konsulting is my answer. I build websites, apps, business software and automations around how your team already works, and I stay on WhatsApp after launch. You get my number, not a ticket.
>
> TODO(kulvir): add a line about your family's businesses or your Nagpur roots, if you're comfortable sharing it.

## Appendix B: Things only Kulvir can supply

Leave each of these as `TODO(kulvir)` in the code, and list them in the README.

1. Buy `koolkonsulting.com` and set up `hello@koolkonsulting.com`, then set `emailLive` to true.
2. Confirm the prices in `data/pricing.ts`, and the payment terms and free-fix window in `data/site.ts`.
3. For each project: its status, year and place; whether the client can be named; real screenshots; the live URL; and any real numbers or quotes (with written permission first).
4. Details of the AI camera work and the event ticketing platform.
5. The office address and Google Maps link; the GSTIN and Udyam number, if registered; the Cal.com link; and the LinkedIn and Google Business Profile URLs.
6. A natural, well-lit photo in colour: head and shoulders, against a plain wall or a real workplace. Even better: one photo at a client's site with the app on a phone.
7. Two or three real testimonials: a sentence each, with the person's name and business, and their permission in writing.
8. The 3D model, built from `3D-BAHI-KHATA-PROMPT.md`.
