# Kool Konsulting — Website Audit
*20 September 2026 · Audience: owners of small and medium businesses in Nagpur who get this link inside a proposal*

## The verdict in one paragraph

The site is technically sound: static Astro, fast, accessible, good schema, honest pricing. What lets it down is that it **looks like a template and reads like a local-SEO agency**. The layout is one text column on a dark background, repeated on every page. It has no images, diagrams, product visuals or anything interactive. The copy is long, clever and defensive. And the style itself (Instrument Serif headlines, terracotta accent, film grain, uppercase letter-spaced labels, hairline rows) is now the default look of AI-generated "premium" sites, which is exactly the "AI-made" feeling you picked up on. For someone selling AI expertise, the site has to *show* the capability, not describe it.

---

## 1. Critical: fix before any redesign

| # | Issue | Why it matters |
|---|---|---|
| 1.1 | **Source files are missing.** `dist/` (the live site) has `/services`, `/services/*` (15 pages), `/work` and `/og/*.png`, but `src/pages/` has no `services.astro`, `services/[slug].astro`, `work.astro`, `work/[slug].astro` or `og/[...route].ts`. | The next `npm run build` will either fail (Base.astro expects OG routes) or deploy a site where every service link returns 404. That includes links in proposals you've already sent. |
| 1.2 | A stray Vite/React `index.html` in the project root points at `/src/main.tsx`, which doesn't exist. | Leftover from another template. Confusing, and a risk if the build config ever changes. |
| 1.3 | `hello@koolkonsulting.com` is shown on every page, but the domain isn't live yet. | Any prospect who emails you gets a bounce. (You asked me to ignore missing info, but this is a broken function, not missing content.) |
| 1.4 | The site's positioning doesn't match yours. The title tag is "Consulting and Local SEO in Nagpur", the hero is "Get found by customers in Nagpur", and service #1 is Google Business Profile. | A proposal about AI or automation that links here tells the reader "SEO agency". The AI specialism should lead. |

## 2. Positioning and messaging

- **Too many services.** 5 core + 10 "specialisms" = 15 offerings. A specialist does 3–4 things well. Group them into 4 pillars, with AI and automation first.
- **The hero sells the wrong thing.** "Get found by customers… and get the systems to serve them" has two ideas, neither of them AI. Nagpur SMB owners respond to concrete outcomes: hours saved, fewer missed enquiries, faster collections, less manual data entry in Tally or Excel.
- **Defensive copy.** "Kool Konsulting is new. We would rather say so than invent a client list", "Four commitments, and what each one costs us", "Strategy firms hand over a document. Vendors build the wrong thing." These are honest but read as insecure and wordy. Being new should come across as *founding-client* confidence, not an apology.
- **Talking to developers, not owners.** "Statically generated, structured data on every page, payload under 200 KB" means nothing to a textile trader in Itwari. Show them a working WhatsApp bot instead.
- **Signs of AI-written copy.** Em dashes on nearly every page (8 on the homepage alone), matched sentence pairs ("X is worth little if Y"), a "what it costs us" framing, and 60–90 word paragraphs. Cut copy length by about 50%.
- **No local specifics.** Nagpur is only a keyword. Nothing mentions local industries: MIDC Hingna/Butibori manufacturers, Itwari/Gandhibagh traders and distributors, clinics and diagnostic centres, coaching institutes, real estate, MIHAN logistics.
- **Prices on the homepage** ("From ₹18,000 per month" in every row) will clash with custom figures in your proposals. Keep prices on /pricing as engagement models, not per-row stickers.

## 3. Visual design

| Area | Current state | Problem |
|---|---|---|
| **Hero layout** | Text column uses about 45% of the width at 1440px; the right half is empty black | This is the biggest reason it looks basic. The most valuable space on the site holds nothing. |
| **Section rhythm** | Every section is label → serif headline → grey paragraph → hairline rows | Monotonous. Nothing changes in scale, density or media. |
| **Imagery** | None apart from a 56px founder thumbnail. No icons, diagrams, UI mockups or data visuals | An AI consultant's site with no visual proof of systems looks like a brochure. |
| **Typography** | Instrument Serif display + Inter body, uppercase tracked labels | Elegant, but reads as an editorial or boutique-agency template, not a technologist. Serif-on-black is the most common AI-generated "premium" look of 2025–26. |
| **Colour** | Warm charcoal + terracotta + cream inverted blocks + film grain | Muted and moody. Lacks the precision, contrast and "signal" colour that says technology. The cream block breaks the dark flow awkwardly. |
| **Components** | Square buttons, 1px hairlines, plain text rows | No depth, no card system, no hover richness, no micro-interactions. It feels unfinished rather than minimal. |
| **Founder photo** | Suit, office, a TV behind reading "Sales chart" | Looks staged or stock. Undermines the "real person" proof it is meant to provide. |
| **Logo** | Mirrored-K diamond mark, serif wordmark | The mark is good. Keep it. The serif wordmark should move to the new type system. |
| **OG images** | Auto-generated title cards | These are what people see when the link is shared on WhatsApp. They should be designed brand cards. |

## 4. Layout and UX, page by page

**Header**: fine, but the "Services" link should open a small mega-menu of the 4 pillars. On mobile, the menu is a small dropdown at 62% of the screen width. Replace it with a full-screen sheet.

**Homepage**
- Hero: see above. There is no visual, and the two CTAs have different visual weights and widths on mobile.
- Service list: five text rows with prices. Needs a bento/card grid with an icon or mini-visual for each pillar.
- "Why this firm": long three-column paragraphs on a cream block. Needs 3 short principle cards.
- "Where we are": an apology section. Replace it with "Founding client programme" plus demo builds.
- Scorecard: a GBP-only lead magnet. Replace or pair it with a **free AI opportunity audit**.
- Missing sections: how it works, industries/use cases, demos, ROI, tech stack, FAQ preview.

**Services hub (/services)**: the headline "Everything a growing business needs, under one roof" is generalist positioning, the opposite of a specialist. Like the homepage, the hero leaves the right half of the screen empty, and the page is a text list of 5 rows.

**Service pages**: one long-form template with walls of text (problem / approach / example paragraphs). Needs a visual process, a deliverables grid and a sample-output mockup. The page for 1 of the 15 services ends up weaker than a single, well-built pillar page would be.

**About**: "One person you can reach" draws attention to being a one-person firm. Reframe it as founder-led with a builder mindset. The credentials table is fine but plain; show it as a timeline.

**Pricing**: an honest table, but it lists 9 services. Replace it with 3 engagement models (AI Audit / Fixed-scope build / Monthly retainer) and "starting from" guidance.

**Contact**: the Cal.com embed is conditional and currently off, so booking isn't possible. The form is fine.

**Conversion clutter**: the header CTA, a floating WhatsApp button, a sticky cream bottom bar and an in-page CTA all compete at once. On mobile, the floating WhatsApp button and bottom bar overlap content (visible in the "What we do" heading).

**Footer**: 4 dense columns with 20+ links. Simplify to 4 service pillars + company + contact.

## 5. Proposal-specific gaps

The site is going to be opened *from a proposal*. That reader already knows your name and wants to check three things: are you credible, how do you work, and what will it cost. The site currently has no:
- personalised welcome ("Prepared for {Company}") driven by a link parameter
- deep-linkable anchors for Process / Engagement models / About to cite in proposals
- printable one-page credentials sheet (a print stylesheet that saves as a PDF)
- demo gallery showing what a delivered system actually looks like
- clear next-steps flow ("Proposal accepted? Here's what happens in week 1")

## 6. What's already good (keep it)

- Astro static build, very small JS, fast load
- Accessibility work: focus states, contrast ratios, tap targets, skip link, reduced motion
- JSON-LD (Organisation, Person, Breadcrumb, FAQ), sitemap, canonical URLs
- Data-driven content in `src/data/*.js` (easy to edit)
- Honest handling of case studies (no fake testimonials). Keep that rule. Label demos as demos.
- WhatsApp as a primary channel, which is right for Nagpur SMBs
- Ownership promises (your code, your accounts), which are a strong trust point

---
See **REDESIGN-PROMPT.md** for the build prompt.
