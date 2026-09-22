# Redesign prompt: Kool Konsulting website

> Paste everything below the line into Claude Code, opened in this project folder.

---

You are a senior product designer and front-end engineer. Redesign the **Kool Konsulting** website in this repo (Astro 5, static output, deployed on Vercel). The goal: make it look and read like a site built by a **tech-savvy AI and automation specialist**, with polish in the league of Linear, Vercel, Raycast or Resend. The audience is owners of **small and medium businesses in Nagpur and Maharashtra** who open the link from a proposal I've sent them. They are not technical. In 30 seconds they should be able to see: this person builds real AI systems, understands my kind of business, and is safe to hire.

Read `WEBSITE-AUDIT.md` first. It lists every problem this redesign has to fix.

## 0. Before any design work: repair the repo

1. `src/pages/` is missing routes that exist in the live `dist/` build: `services.astro`, `services/[slug].astro`, `work.astro`, `work/[slug].astro` and `og/[...route].ts`. Rebuild them from the data files (`src/data/services.js`, `work.js`), using `dist/*.html` as the reference for structure. Confirm with `npm run build` that every URL in `dist/sitemap-0.xml` still builds. **No existing URL may 404.** Links in sent proposals depend on them. Where a service is merged into a pillar (see §3), add a 301 in `vercel.json` instead of deleting the page.
2. Delete the stray root `index.html` (Vite/React leftover pointing to `/src/main.tsx`).
3. Keep: static output, zero client framework, JSON-LD, sitemap, canonical URLs, accessibility (WCAG AA, focus rings, 44px targets, skip link, `prefers-reduced-motion`), data-driven content in `src/data/`. Keep the "no fabricated testimonials or results" rule in `work.js`.

## 1. Positioning (rewrite all copy against this)

- **Who:** Kool Konsulting, a founder-led AI and automation consultancy in Nagpur, run by Kulvir Sharma (finance and M&A background, University of Melbourne; builds the systems himself).
- **Primary promise:** AI agents, automation and custom software that take repetitive work off an SMB owner's plate. Strategy, finance and growth marketing are supporting pillars, not the headline.
- **Tone:** confident, plain, specific. Indian English. Short sentences (aim under 18 words). Use no more than one em dash per page. No apologising for being new, no meta-commentary about how the site is built, no clever antithesis headlines ("X does A. Y does B. We do both."). Talk in outcomes: hours saved, enquiries answered, errors removed, rupees recovered. Use ₹ with Indian grouping (₹1,50,000, "₹1.5 lakh").
- **Cut all existing body copy by at least 50%.** No paragraph over 45 words on marketing pages.
- **Hero headline:** write 3 options and pick the strongest for the build, in this spirit:
  - "AI that does the busywork, so your team can do the business."
  - "Your business, running on autopilot where it should."
  - "Practical AI and automation for Nagpur's growing businesses."
- **Title tag (home):** "AI Automation and Business Systems Consultant in Nagpur | Kool Konsulting"

## 2. Design system (replace `src/styles/global.css` tokens)

Move from "editorial serif boutique" to "precise technical studio". Dark-first, crisp, with one signal accent and real depth.

**Colour tokens**
```
--bg:        #07080A   /* page */
--bg-2:      #0C0E12   /* alt sections */
--surface:   #111419   /* cards */
--surface-2: #171B22   /* raised / hover */
--line:      rgba(255,255,255,0.08)
--line-2:    rgba(255,255,255,0.14)
--text:      #F4F5F7
--text-2:    #A4ABB8
--text-3:    #6E7684   /* only ≥14px, check AA */
--accent:    #FF9F1C   /* "signal saffron": the one brand colour, a quiet nod to India */
--accent-2:  #FFB84D
--accent-glow: rgba(255,159,28,0.18)
--ok:        #3DDC97   /* live/success indicators only */
```
Check every text/background pair for WCAG AA and note the ratios in comments, as the current file does. Drop film grain and the cream "invert" blocks. Build rhythm with `--bg` / `--bg-2` alternation, a subtle dot or grid background pattern (CSS only, masked with radial fades), and a soft accent radial glow behind the hero visual.

**Typography**
- Display and UI: **Geist Sans** (self-host via the `geist` npm package or `@fontsource`; no Google Fonts request). Headlines weight 600, tight tracking (−0.03em), sizes via `clamp()`: hero 44→76px, H2 32→52px, H3 20→26px.
- Mono: **Geist Mono** for labels, eyebrow tags, metrics, code-like chips (e.g. `→ automation`, `₹ / month`). This replaces the uppercase tracked Inter labels.
- Body 16–18px, line-height 1.6, max 62ch.
- Optional accent: allow a single word per headline in a gradient (`--text` → `--accent`). Use it sparingly.

**Shape and depth**
- Radius: 12px cards, 10px buttons, 999px pills/chips.
- Cards: `--surface`, 1px `--line` border, inner top highlight (`inset 0 1px 0 rgba(255,255,255,0.04)`), and on hover a border glow that follows the cursor (radial gradient positioned with CSS vars from a ~15-line inline script, disabled on touch and with reduced motion).
- Buttons: primary is solid `--accent` with dark text and an arrow icon that nudges on hover. Secondary is a ghost with a `--line-2` border. Plus a WhatsApp variant.
- Icons: **Lucide** as inline SVGs (copy the paths; no icon font), 1.5px stroke.

**Motion (subtle, fast, optional)**
- Scroll reveal: fade + 12px rise, 400ms, staggered 60ms, via IntersectionObserver. Content must be visible with JS off.
- Hero system diagram animation (see §4.1).
- Number count-ups on metrics.
- Everything off under `prefers-reduced-motion`.
- Total inline JS budget: under 15 KB. No GSAP, React or Framer.

**Logo:** keep the mirrored-K diamond mark (`Logo.astro`, `favicon.svg`). Set the wordmark in Geist Sans 600. Add an accent-coloured variant for the favicon and OG cards.

## 3. Information architecture

Consolidate 15 services into **4 pillars**. Each pillar gets a rich landing page; the old focus pages become sections or 301 redirects.

1. **AI Agents and Automation** (lead pillar): WhatsApp/website enquiry agents, document and invoice extraction, follow-up and reminder automation, report generation, workflow automation (n8n/Make/Zapier), AI for Tally/Zoho/Excel workflows. ← `automation-ai`, `ai-agents-for-business`, `workflow-automation`
2. **Custom Software and Internal Tools**: dashboards, CRMs, inventory/order tools, web apps, business websites. ← `software-development`, `internal-tools`, `web-development`
3. **Growth and Local Visibility**: Google Business Profile, local SEO, reputation, performance marketing. ← `local-visibility`, `google-business-profile-management`, `local-seo-nagpur`, `reputation-management`, `digital-marketing`
4. **Strategy and Financial Planning**: business plans, financial models, market entry. ← `strategy-planning`, `business-plan-writing`, `financial-modelling`, `market-entry-strategy`

**Navigation:** Services (mega-menu showing the 4 pillars, each with an icon and one line) · Use cases · Work · Pricing · About · **[Book a call]** button · a small "Free AI audit" pill.
**Mobile:** full-screen sheet menu with large tap rows and Call / WhatsApp / Book buttons pinned at the bottom.

## 4. Homepage, section by section

**4.1 Hero (split layout, 55/45 on desktop, stacked on mobile)**
- Left: mono eyebrow chip (`● Nagpur · AI & automation studio`, green live dot), headline, a subline of at most 25 words, primary CTA "Book a free 30-min call", secondary "See what I can automate →" (anchors to the ROI calculator), and a trust row: founder avatar (40px round) + "Kulvir Sharma, Founder · Ex-M&A advisory · UniMelb Finance".
- Right: an **animated live-system diagram** built in inline SVG + CSS, not an image. Node cards: `WhatsApp enquiry` → `AI agent` (glowing) → `Tally / Zoho / Sheets` and `Owner dashboard`. Small light "packets" travel along the connector paths (`offset-path` or SVG `animateMotion`), and a tiny log panel types lines like `12:04 Enquiry qualified · sent quote PDF` and `12:05 Payment reminder sent · ₹42,300`. Put it in a glass card with the accent glow behind. With reduced motion, show it static.
- Behind the hero: faint grid pattern with a radial fade.

**4.2 Credibility strip**: "Built with tools your business already trusts". A monochrome logo row (WhatsApp Business API, Google Workspace, Zoho, Tally, OpenAI, Claude, n8n, Razorpay, Excel). Use a marquee on mobile and a static row on desktop. Label it as the tool stack. It must not imply these are partners or clients.

**4.3 The problem, quantified**: "Where your team's week actually goes". Four stat cards with mono figures and count-up: e.g. `~9 hrs/wk` answering the same enquiries, `~6 hrs/wk` re-typing invoices into Tally, `~23%` of leads never followed up, `~5 days` to chase a payment. Put a footnote under the grid: "Typical figures from SMB studies; your audit gives your real numbers." Keep the figures clearly marked as indicative in a data file.

**4.4 What I build (bento grid of the 4 pillars)**: asymmetric grid. The AI pillar is the large 2×2 tile, with a mini chat mockup inside (WhatsApp-style bubbles: customer asks for a price, the agent replies with a quote and a PDF chip). The other tiles have mini visuals: a dashboard sparkline card (Software), a map pin with a star-rating card (Growth), a small spreadsheet/scenario chart (Strategy). Each tile: icon, title, one line, three bullets, "Explore →".

**4.5 Use cases by industry (tabs)**: tabs for Manufacturing (MIDC), Traders and Distributors, Clinics and Diagnostics, Coaching Institutes, Real Estate, Retail and Restaurants. Each tab has 3 automation cards (trigger → action → outcome) and a one-line "typical result" in mono. Tabs are accessible (roving tabindex, `aria-selected`) and work as plain stacked sections without JS. Keep the data in `src/data/usecases.js`.

**4.6 Automation ROI calculator** (the interactive centrepiece): inputs are team members doing repetitive work, hours per week each, and monthly cost per person (₹). Output: hours freed per month and ₹ value per month/year, animated, with a "Get my AI audit" CTA pre-filled with the numbers (query string to /contact). Vanilla JS, under 3 KB, accessible labels, sensible defaults (3 people · 8 hrs · ₹25,000).

**4.7 Demo builds**: "See what a delivered system looks like". Three cards with *HTML/CSS-built* UI mockups (no stock screenshots): a WhatsApp lead agent, an invoice → Tally extraction screen, a sales and collections dashboard. Each has a clear `DEMO BUILD` badge and a "Walk me through this" link to /contact. This replaces the "we are new, no case studies" apology section.

**4.8 How an engagement works**: horizontal timeline (vertical on mobile), 4 steps with week markers in mono: `Week 0` Free AI audit call → `Week 1` Opportunity map + fixed quote → `Week 2–4` Build and test with your team → `Ongoing` Run, monitor, improve. Give it an anchor `#process` so proposals can deep-link.

**4.9 Founder block**: two columns. Large photo (placeholder slot, 4:5, rounded 16px, subtle border; see note), name, role, a 60-word bio, a credentials timeline as mono chips, and a signature-style line: "You work with me directly, from the first call to go-live." Give it an anchor `#about`.

**4.10 Principles (3 small cards)**: "You own everything" (code, accounts, data) · "Fixed quotes, no surprises" · "Built for your team, not for a demo". At most 2 lines each.

**4.11 Founding-client offer band**: accent-bordered card: "Founding client programme · Q4 2026. Limited slots. Founder-level attention and introductory pricing, in exchange for a case study once results are in." This replaces the old "we're new" section with a confident version of the same message.

**4.12 FAQ preview**: 5 questions in an accordion (`<details>`), linking to /faq. Keep the FAQ JSON-LD.

**4.13 Final CTA**: large centred panel with the grid pattern and accent glow: "Let's find the first thing to automate." Buttons: Book a call · WhatsApp. Small line: "Reply within one working day."

## 5. Other pages

- **Pillar pages** (`/services/[pillar]`): hero with pillar mini-visual → "Problems this solves" (icon list) → "What I build" (card grid of sub-services, each anchored) → a demo mockup → process (reuse component) → engagement models + starting prices → FAQs → related pillars → CTA. Plus a `Not the right fit if…` note (keep this; it builds trust).
- **/use-cases**: a full version of the industry tabs as sections, each with its own anchor.
- **/work**: demo builds gallery (clearly labelled) + "Case studies publish here as founding-client projects complete." Keep the automatic case-study pipeline from `work.js`.
- **/pricing**: 3 engagement-model cards: **AI Opportunity Audit** (free or low fixed fee, 1 week), **Fixed-scope Build** (from ₹X), **Run and Improve retainer** (from ₹X/month). Mark the middle card "Most common". Below: an "Every engagement includes / never includes" comparison (keep the current content, shortened) and a GST note. Anchor `#engagement-models`. Leave prices as placeholders from `site.js`.
- **/about**: story (at most 150 words), photo, credentials timeline, principles, "How I work with your team", CTA.
- **/contact**: 2-column layout. Left: form (name, business, industry select, "What do you want to automate?", phone/WhatsApp, prefilled ROI numbers if present). Right: WhatsApp, call, email and location cards, plus the Cal.com embed slot (keep the conditional logic). Add a Google Maps link for the Nagpur address once it exists.
- **/scorecard** → rename to **/ai-audit**: "Free AI Opportunity Audit" form (business, industry, top 3 time-wasting tasks, tools used). Keep the GBP scorecard as a secondary option inside the Growth pillar. 301 `/scorecard` → `/ai-audit`.
- **404 / thanks**: restyle to the new system. Thanks page: "What happens next" 3-step list.

## 6. Proposal companion features

1. **Personalised welcome:** if the URL has `?for=Company+Name` (sanitise: letters, numbers and spaces only, max 40 characters, set via `textContent`), show a slim bar above the hero reading "Prepared for **Company Name** · Proposal companion" with links to #process, #engagement-models and #about. Store it in sessionStorage (in try/catch) so it persists across pages in that visit. Never index these URLs (canonical stays clean).
2. **/credentials**: a one-page printable capability sheet (logo, positioning, 4 pillars, process, founder credentials, contact, QR code to the site as inline SVG). Give it a proper `@media print` stylesheet (A4, white background, dark text) and a "Download as PDF" button that calls `window.print()`. `noindex`.
3. **/next-steps**: "Proposal accepted? Here's week one": kickoff checklist, what I need from you (access, data), timeline, payment milestones. `noindex`, linked from proposals.
4. Stable anchors on every key section (`#process`, `#engagement-models`, `#about`, `#use-cases`, `#demo-builds`, `#faq`).

## 7. Conversion UI clean-up

- Remove the desktop sticky bottom bar. On mobile only, use one slim bottom action bar with three equal buttons (Call · WhatsApp · Book) after scrolling 60% of the first screen, and hide it when the footer is in view.
- Remove the separate floating WhatsApp bubble (it's in the mobile bar and the header). On desktop, put WhatsApp in the header as an icon button.
- Maximum of one primary CTA visible per viewport.
- Keep the `data-track` attributes and Plausible hook.

## 8. Footer

Four columns: logo + one-line positioning + email/phone/WhatsApp · Services (4 pillars) · Company (About, Work, Use cases, Pricing, FAQ) · Resources (Free AI audit, Credentials, Privacy, Terms). Bottom row: © year, "Made in Nagpur", LinkedIn icon slot. Add a large faded wordmark watermark across the bottom (CSS, `aria-hidden`).

## 9. SEO, performance and technical

- Update every title and meta description to the AI-first positioning. Keep the Nagpur modifiers.
- Update Organisation JSON-LD `description` and `knowsAbout` (AI agents, workflow automation, business process automation, custom software). Add `Service` schema per pillar and `FAQPage` where FAQs render.
- Redesign the OG cards (`og/[...route].ts`): dark background, grid pattern, accent glow, logo, page title in Geist 600, `koolkonsulting.com`. They must look sharp as WhatsApp previews.
- Self-host fonts with `font-display: swap` and preload the display weight.
- Images: AVIF/WebP via `astro:assets`, explicit dimensions, lazy below the fold.
- Budgets: LCP < 2.0s on throttled 4G, CLS < 0.05, total JS < 15 KB, CSS < 40 KB per page. Run Lighthouse on mobile and target 95+ in all four categories.
- Split `global.css` into `tokens.css`, `base.css` and `components.css`. Build reusable components: `Button`, `Card`, `Chip`, `SectionHeader`, `Bento`, `Tabs`, `Timeline`, `StatCard`, `ChatMock`, `DashboardMock`, `SystemDiagram`, `RoiCalculator`, `PricingCard`, `MobileActionBar`, `MegaMenu`, `ProposalBar`.

## 10. Placeholders

Where information from me is missing (address, final prices, domain, email, LinkedIn, Cal.com link, real photo, client logos), leave clearly marked `TODO(kulvir)` values in `src/data/site.js`. Render tasteful fallbacks, never "Lorem ipsum" or fake data. For the founder photo, keep the current file but design the slot to suit a relaxed, natural-light portrait. (Note in the README that the current image looks staged and should be replaced.)

## 11. Acceptance checklist (verify before you finish)

- [ ] `npm run build` passes; every URL from the old sitemap resolves (200 or 301)
- [ ] Hero shows a working animated system diagram on desktop; stacks cleanly at 390px
- [ ] No section is just "label + headline + paragraph"; every section has a visual element
- [ ] Copy is at least 50% shorter than before; at most one em dash per page; no "we are new" apology
- [ ] AI and automation are the first thing named in the title, hero, nav and services
- [ ] ROI calculator works with keyboard only and pre-fills the contact form
- [ ] `?for=Test Co` shows the proposal bar; `/credentials` prints to a clean one-page A4 PDF
- [ ] All text passes WCAG AA; full keyboard navigation; reduced motion respected
- [ ] Lighthouse mobile ≥ 95 in all four categories; JS < 15 KB
- [ ] Screenshots taken at 1440px and 390px of Home, one pillar page, Pricing, About and Contact, then reviewed for spacing and alignment issues and fixed

Work in this order: repair (§0) → tokens and components → homepage → pillar pages → remaining pages → proposal features → SEO/OG → checklist. Show me the homepage at 1440px and 390px before building the rest.
