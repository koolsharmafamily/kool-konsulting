# Kool Konsulting: corrections prompt (v3.1)

> **How to use.** Open this folder in Claude Code (or Antigravity) and send:
> *"Read REDESIGN-CORRECTIONS-V3.1.md in full and apply it in order. It overrides REDESIGN-PROMPT-V3.md wherever the two disagree. Stop at each checkpoint with screenshots at 390 px and 1440 px."*
>
> Based on an audit of https://kool-konsulting.vercel.app on 3 October 2026 (commit `dbde552`).

---

## 0. What changes, in one paragraph

The v3 rebuild got the structure right (pages, routes, redirects, a real enquiry endpoint, the before/after demo, the WhatsApp demo, the estimator). What's still wrong:
- **The logo** is weak and inconsistent.
- **The 3D hero** looks broken: grey flaps, a blank stage before it loads, and no cards.
- **The page** is full of uppercase "eyebrow" labels and numbered tags.
- **Several case studies show invented numbers.**
- **Social sharing, structured data and icons** are missing.

Kulvir has also refined the direction: the firm must look **modern, "kool" and visibly tech-savvy**. So the warm "paper ledger" feel moves to a **cooler, crisper tech look**: cool white, electric indigo, an ice-cyan signal colour, live product UI, and one dark "engine room" section. The bahi-khata stays as the single warm, Indian moment in an otherwise sharp tech interface: the old world, turning into the new.

---

## 1. Fix first: honesty (launch blockers)

`data/work.ts` and the homepage demo show results nobody has confirmed. These must not be live:

| Where | Problem | Fix |
|---|---|---|
| `construction-site-app` results | "0 manual wage calculation errors", "4 hrs saved per supervisor weekly", "Field time audit" | Delete `results` until Kulvir supplies real figures |
| `cinema-samosa-forecast` results | "35% reduction in evening snack wastage", "Canteen inventory reports" | Delete `results` |
| Before/after demo, construction tab | "Replaced 32-worker…", "supervisor saves 4 hours every Saturday" | Use plain descriptions of what was built: "One-tap attendance on the supervisor's phone", "Wages and overtime calculated automatically", "Petty cash logged with a photo of the receipt". No numbers. |
| `place` fields | "Nagpur, Maharashtra" on the construction, cinema, movie-promo and event projects; "Mandi Industrial Area" on the wholesale shop | Leave `place` empty unless Kulvir confirms it. The wholesale shop is in a Haryana mandi, so use "Haryana" if a place is needed at all. |
| `status` fields | "In daily use" and "Live" on every client project | Default every client project to empty (no badge). Kulvir sets each status himself. |
| Problem statements | "often leading to disputes", "massive delays", "stockouts during weekend blockbusters" | Remove the dramatisation and keep the plain problem from REDESIGN-PROMPT-V3 §11.4 |
| `tools` | "Python Fast-API, PostgreSQL" for the cinema app, "Cloud Functions, WhatsApp Integration" for the construction app | Keep only tools Kulvir confirms. Construction: React Native (Expo) and Firebase. Cinema: leave empty. |
| Demo copy | "HAZIRI REGISTER — OKTOBER SITE #2" | Fix the spelling: "Haziri register, October, Site 2" |

Add a code comment at the top of `data/work.ts`: *"Every number, place, status, tool and quote here must come from Kulvir. Never fill these in yourself."*

---

## 2. The logo (highest design priority)

### 2.1 What's wrong now
- **Two different geometries.** `components/ui/Logo.tsx` stretches the mark to 100×100 with paths at y = 12–88. `public/favicon.svg` uses a translated 100×88 version. They don't match.
- **Weak at small sizes.** Thin strokes (8 units, about 1.6 px at the header size) with `stroke-linecap: square`, so the caps overlap and blot where the diagonals meet the bars and at the top and bottom points. At 16–24 px the mark turns to mush.
- **Nothing says "tech".** It's a static outline in a box.
- **Missing assets.** No apple-touch-icon, no manifest icons, no OG image using the mark.
- **Generic chat icon.** The WhatsApp buttons use Lucide's `MessageSquare`, not the WhatsApp glyph.

### 2.2 The new mark ("facing K's with a signal node")

Two vertical bars and one diamond: the left K and the mirrored right K share their arms, and the arms form the diamond. At the centre of the diamond sits a small square **signal node**: the data point, the connection between business and tech. This is the version Kulvir has locked.

Use this exact SVG (a 100×100 viewBox, all strokes) as the single source for every use:

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kool Konsulting">
  <g fill="none" stroke="currentColor" stroke-width="11" stroke-linejoin="miter" stroke-miterlimit="10">
    <path d="M19 12V88M81 12V88"/>                 <!-- the two K stems -->
    <path d="M24 50L50 24L76 50L50 76Z"/>          <!-- the shared arms, forming the diamond -->
  </g>
  <rect class="kk-node" x="43" y="43" width="14" height="14"
        transform="rotate(45 50 50)" fill="var(--kk-signal, #22C3EE)"/>
</svg>
```

**Geometry rules:**
- **Keep the diamond's side tips inside the stems.** Its left and right corners sit at x = 24 and x = 76, so the mitred tips land inside the stems (which span 13.5–24.5 and 75.5–86.5) and never poke out. Check this at 512 px.
- **Use butt caps on the stems and mitred joins on the diamond.** No round or square caps anywhere.
- **Small-size variant** (`LogoMarkSmall`, used for 16 and 32 px favicons): stroke width 15, stems at x = 17 and 83, the diamond at `M22 50L50 22L78 50L50 78Z`, and **no node**.

**Colours** (the node is always the signal colour):

| Context | Stems and diamond | Node |
|---|---|---|
| On a light background | `--kk-indigo` `#3D35E0` | `--kk-signal` `#22C3EE` |
| On a dark background | `#F6F7FB` | `#22C3EE` |
| App icon / favicon | White, on a rounded square (24% radius) filled with a 145° gradient from `#4B42FF` to `#2A23B8` | `#22C3EE` (from 64 px up) |
| Monochrome (print, stamps) | One colour, node included | Same colour as the strokes |

**The wordmark.** "Kool Konsulting" in Anek Latin, weight 680, `font-stretch: 106%`, letter-spacing −0.02em, sentence case, never wrapping (`white-space: nowrap`).

**Lockups:**
- **Horizontal (default):** the mark at a height equal to 1.3× the wordmark's cap height, with a gap of 0.35× the mark's width.
- **Mark only:** for the mobile header on screens narrower than 360 px, avatars and favicons.
- **Stacked:** the mark above the wordmark, for the `/credentials` sheet and the OG image.

**Clear space:** the width of one stem on every side. **Minimum sizes:** the full mark at 20 px; the small-size variant below that.

**Don't:**
- outline the mark inside a box in the header (no indigo tile in the header; tiles are only for app icons)
- stretch it
- add a gradient to the strokes
- rotate it
- give the node any colour but signal cyan
- put the old `KK` text box anywhere

### 2.3 Build it as a component system
- **`components/brand/LogoMark.tsx`:** the SVG above, with `currentColor` for the strokes and props for `size`, `tone` (`indigo | light | mono`) and `animated`.
- **`components/brand/LogoMarkSmall.tsx`:** the small-size variant.
- **`components/brand/Logo.tsx`:** the lockup (mark plus wordmark, with a `markOnly` option), wrapped in the home link.
- **Static files**, generated from those components by a script (`scripts/build-brand-assets.mjs`, using `sharp` or Playwright):

  | File | Contents |
  |---|---|
  | `app/icon.svg` | Small variant on the gradient tile |
  | `app/apple-icon.png` | 180 px, full mark with node |
  | `public/icons/icon-192.png`, `public/icons/icon-512.png` | Full mark with node, plus a `maskable` 512 version with 20% padding |
  | `app/manifest.ts` | Name, `short_name` "Kool Konsulting", `theme_color` `#3D35E0`, `background_color` `#F6F7FB` |
  | `public/brand/` | `kk-logo-horizontal.svg`, `kk-logo-horizontal-dark.svg`, `kk-mark.svg`, `kk-mark-small.svg`, so Kulvir can use them in proposals and on social media |
- **Delete** the old `public/favicon.svg` geometry, and any `KK` text tile anywhere in the codebase.

### 2.4 Logo motion (subtle, and it shows the tech)
- **On first load** (header mark only, once per session, ~900 ms, skipped under reduced motion):
  1. the stems draw upwards (stroke-dashoffset)
  2. the diamond draws closed
  3. the node appears with one soft pulse
- **On hover** (desktop): the node pulses once, 300 ms.
- **While a form is submitting**, the node in the submit button's spinner rotates. The node is the brand's "working" indicator, so reuse it as the site-wide loading indicator instead of a generic spinner.

### 2.5 Checkpoint L
Render `/dev/brand` (noindex, removed at launch) showing:
- the mark at 16, 24, 32, 48, 64, 128 and 512 px on light, on dark, and as the app tile
- the three lockups
- the motion

Screenshot it and check the joints at 512 px. Show Kulvir before rolling the new mark out across the site.

> **Optional comparison:** Kulvir is keeping the back-to-back version (a mirrored K, then a K, with the stems in the middle) to compare later. On `/dev/brand`, also render it with the same stroke weight, at the same sizes:
>
> `M41 12V88M59 12V88` with arms `M12 14L41 50L12 86M88 14L59 50L88 86`, and a square node at the centre.
>
> Don't use it on the site.

---

## 3. The "modern and kool" design shift

Keep the layout, components, copy structure, fonts and light base from v3. Change the feel from "warm paper" to **"cool, precise, live tech"**.

### 3.1 New colour tokens (replace `paper`, `carbon` and the `carbon-*` family)

| Token | Hex | Use |
|---|---|---|
| `bg` | `#F6F7FB` | Page background: cool near-white, not cream |
| `surface` | `#FFFFFF` | Cards and device screens |
| `ink` | `#0E0F1A` | Text and primary buttons |
| `ink-2` | `#4A4D63` | Secondary text |
| `ink-3` | `#6B6F86` | Captions (check ≥ 4.5:1 on `bg`) |
| `line` | `#E3E6EF` | Borders |
| `kk-indigo` | `#3D35E0` | Brand: logo, links, active tabs, focus rings |
| `kk-indigo-600` | `#2F28B8` | Hover |
| `kk-indigo-050` | `#EEEDFF` | Selected and tinted states |
| `kk-signal` | `#22C3EE` | "Kool" ice cyan: the logo node, live/sync indicators, the 3D digitise scan line, data highlights in mockups. **Never body text on white.** |
| `engine` | `#0B0C16` | The one dark "engine room" section (§3.3) |
| `bahi` | `#B3261E` | The 3D bahi-khata and the "before" ledger illustrations only |
| `leaf` | `#16A34A`-ish, verified for AA | Success states |
| `whatsapp` | `#25D366` | WhatsApp buttons only, with `ink` text |

Rename the tokens in `tailwind.config.ts` and `globals.css`, and replace every `carbon` usage.

### 3.2 Tech texture, used with restraint
- **Dot grid.** A faint dot grid (1 px dots, 22 px spacing, `#D9DCE8` on light, `#23253A` on dark) behind the hero and the engine room only, faded out with a radial mask. Not on every section.
- **Live UI.** Product mockups get a small "Live" pill with a pulsing `kk-signal` dot, sync ticks, timestamps that update and numbers that tick (the WhatsApp demo's typing, the attendance counter going 27 → 28 present). These are user-visible proofs of real software. Run them only while in view and stop under reduced motion.
- **Glass.** Use it only on cards that float over the 3D stage or the engine room (12–16 px blur, 1 px white/10% border). Nowhere else.
- **Headings.** Keep them in Anek Latin, but tighten the hero: `font-stretch: 108%`, weight 720, line-height 1.0.
- **Not allowed:** neon-green terminal styling, monospace UI text, glow blobs, gradient text in headlines, or cursor effects. Tech is shown through real UI, motion and speed, not costume.

### 3.3 Add one dark "engine room" section
Move **"Try an automation"** onto a full-bleed `engine` background with the dot grid, and set the WhatsApp phone mockup inside a soft indigo/cyan rim light.

Beside the phone, show a minimal **live flow strip** of three nodes (`WhatsApp message → Kool automation → Tally / Sheet updated`), with the `kk-signal` node travelling along the connector each time the visitor taps a reply.

This section is the site's "how it works under the hood" moment. It's the only dark section.

### 3.4 Header and buttons
- **Header:**
  - `bg` at 80% opacity with a backdrop blur, and a 1 px `line` border once scrolled
  - the logo per §2: no tile around the mark
  - nav items in Mukta 500, 16 px
  - the WhatsApp button uses the real WhatsApp glyph (an inline SVG), not `MessageSquare`
- **Buttons:**
  - **Primary:** `ink` background, white text. On hover the background shifts to `kk-indigo` with a 150 ms transition.
  - **WhatsApp:** official glyph, `#25D366` background, `ink` text.
  - **Secondary:** white with a `line` border.
  - **Pressed:** buttons press in by 1 px.

---

## 4. Fix the 3D hero

What's live now: on desktop a closed book with a crude flat cover pattern. On mobile:
- the stage is **blank white** until three.js loads
- when it opens, the cover shows a **grey underside** and the pages are flat beige paddles flying apart
- there are **no cards, no digitise effect** and no labels on the cards
- the stage shows "Drag to Rotate 3D", which contradicts the scroll-driven spec

Fix all of the following:

1. **Poster first.** Render `public/3d/bahi-poster.avif` (closed book, transparent background) and `bahi-poster-open.avif` from the scene with Playwright. Show the poster in the stage at the same size before the canvas loads, then cross-fade. The stage must never be blank.
2. **Remove "Drag to Rotate 3D"** and any OrbitControls. Interaction is scroll (desktop) or play-on-view (mobile), plus a ±5° pointer tilt on desktop. Replace the label with the caption "From registers to real-time." in sentence case (not uppercase).
3. **Materials.** Give the inside of the covers `M_Cloth_Inner` (pale yellow endpaper), not grey. Give the pages `M_Paper_White` / `M_Paper_Yellow` with the fold texture. If the GLB lacks these, fix the GLB (see `3D-BAHI-KHATA-PROMPT.md` §4.6) rather than overriding them in code with flat colours.
4. **Build the missing payoff** from REDESIGN-PROMPT-V3 §7.4. Pages lift (−0.35π), detach, turn to face the camera, the **digitise** shader sweeps a `kk-signal` cyan line across, and the paper becomes the UI texture with rounded corners. The cards then settle as Website, App, Business software and Automation, each with an HTML label linking to its service. Without this, the 3D is a book opening and nothing more.
5. **Card textures.** Render the four 512×1024 WebP card textures from the real mockup components (`scripts/render-card-textures.mjs`). The construction attendance screen, WhatsApp chat, billing dashboard and the Bachpan website must match the 2D demos.
6. **Labels.** Under the stage, use plain links "Websites · Apps · Business software · Automation" in a 2×2 grid. Remove the "1. 2. 3. 4." numbering (it isn't a sequence).
7. **Lighting.** Use a cooler studio light to match the new palette (a neutral-cool key light, an ice-cyan rim from the right at low intensity) so the red bahi pops against the cool background.
8. **Budgets and fallbacks** exactly as in V3 §7.6, and verify them: chunk ≤ 260 KB gzipped, at least 45 fps with 4× CPU throttling, and paused when off-screen.

**Checkpoint 3D:** six screenshots across the sequence (p = 0, 0.15, 0.35, 0.55, 0.8, 1) at 1440 px, and the mobile play-through at 390 px.

---

## 5. Remove the AI-template tells still on the page

The audit found 40+ uppercase labels. Remove the `uppercase` / letter-spacing styles and either delete the label or rewrite it as sentence case where it carries meaning:

| Now | Change to |
|---|---|
| "FROM REGISTERS TO REAL-TIME" pill | Caption under the stage, sentence case |
| "ON PAPER (BEFORE)" / "MANUAL" / "WITH CUSTOM APP (AFTER)" / "AUTOMATED" | A segmented toggle reading "On paper" / "With the app" |
| "DELIVERABLE HIGHLIGHT" ×4 | Delete the label; keep the sentence |
| "INTERACTIVE DEMO", "CHOOSE AN EVERYDAY SCENARIO:" | Delete; the tabs speak for themselves |
| "THE BOTTLENECK" / "TYPICAL BUILDS" ×7 | Small sentence-case labels "The problem" / "What we build", in `ink-3` |
| "STEP 01"… beside numbered circles 1–5 | Delete the "STEP 0x" text (it repeats the numbers) |
| "COMPARISON" table header cell | Leave it empty |
| "FOUNDER-LED PRACTICE", "BACKGROUND & CREDENTIALS", "START WITH ZERO RISK" | Delete |
| "STEP 1: WHAT DO YOU NEED BUILT?" etc. in the estimator | "What do you need?", "How big?", "Extras", in sentence case |
| Service index numbers "01–04" | Delete (it isn't a sequence) |
| Industry/service tags on project cards ("APPS", "AUTOMATION, APPS") | Sentence-case chips: "App", "Automation" |

Also:
- **Remove the "→" arrows** from text links ("View all 10 common questions and answers →", "View all 4 services overview →"). Keep arrow icons only on buttons whose action is navigation, if at all.
- **"Google Business Profile optimization"** in Shops and showrooms → "Google profile setup" (setup is part of a website, not a marketing retainer).
- **"local SEO architecture"** in the estimator → "set up to be found on Google".

---

## 6. SEO, sharing and technical fixes

The audit found no Open Graph tags, no canonical, no JSON-LD and no apple icon on any page.

1. **Metadata per page.** Set `openGraph` (title, description, url, siteName, locale `en_IN`, type) and `twitter` card on every route, plus `alternates.canonical`.
2. **OG images.** Add `opengraph-image.tsx` for the root and for `services/[slug]` and `work/[slug]`:
   - `bg` with the dot grid
   - the stacked logo
   - the page title in Anek Latin (load a static `.woff` from `@fontsource/anek-latin`)
   - a `kk-signal` node accent

   Test by pasting the URL into WhatsApp.
3. **JSON-LD.** `Organization` + `ProfessionalService` sitewide, `WebSite` on home, `Service` (with INR `minPrice`) on service pages, `Person` on About, `BreadcrumbList`, and `FAQPage` on `/faq`. Use REDESIGN-PROMPT-V3 §12 for the fields.
4. **Icons and manifest** per §2.3.
5. **Founder photo.** It's served at `w=3840`. Give `next/image` a proper `sizes` prop (e.g. `"(min-width:1024px) 360px, 80vw"`) and the head-and-shoulders crop from V3 §6.4.
6. **Lead delivery.** The `/api/enquiry` logic is right, but `.env.local` has no `RESEND_API_KEY` or `LEAD_WEBHOOK_URL`.
   - Kulvir must add them in Vercel → Settings → Environment Variables and redeploy.
   - Then send one test enquiry from the live site, and confirm the alert email and/or sheet row arrive.
   - Until then, the form correctly shows the WhatsApp fallback. Don't change that behaviour.
7. **Housekeeping.** Remove the stray root file `bahi-khata-glb.glb` (a duplicate of `public/3d/bahi-khata.glb`), and add `*.glb` outside `public/` to `.gitignore`.

---

## 7. Work order

1. §1 honesty fixes. Deploy immediately.
2. §2 logo system, then **Checkpoint L**.
3. §3 colour tokens and the design shift across all pages, plus §5 template-tell clean-up, then a checkpoint: screenshots of Home, a service page, Work, Pricing and Contact at 390 px and 1440 px.
4. §4 3D hero, then **Checkpoint 3D**.
5. §6 SEO, sharing and technical fixes.
6. A final pass against the checklist below.

Before showing any checkpoint, critique your own screenshots: alignment, wrapping, contrast, anything that looks templated. Fix what you find, then show.

## 8. Acceptance checklist
- [ ] No invented numbers, places, statuses or tools anywhere (search `data/` and the demo components).
- [ ] One logo geometry used everywhere: header, footer, favicon, apple icon, manifest, OG images, `/credentials`. The diamond tips stay inside the stems at 512 px. The 16 px favicon is legible.
- [ ] The logo draw-in plays once per session and is skipped under reduced motion. The node is reused as the loading indicator.
- [ ] Cool palette applied. No `carbon`/`paper` tokens remain. `kk-signal` is never used for body text.
- [ ] Exactly one dark section (the engine room), with the live flow strip working.
- [ ] Zero uppercase/letter-spaced labels. No "STEP 0x", no 01–04 numbering on non-sequences, no trailing "→" on text links.
- [ ] 3D: never blank (poster first). No "drag to rotate". Correct materials. Cards with the digitise effect and linked labels. Budgets met.
- [ ] Real WhatsApp glyph on every WhatsApp button.
- [ ] OG, Twitter, canonical, JSON-LD and icons present. The WhatsApp link preview checked.
- [ ] Founder image served at a sensible size.
- [ ] A test lead delivered from the live site once Kulvir has added the keys.
- [ ] Lighthouse mobile ≥ 95 in all four categories on Home and one service page.
