# Kool Konsulting

A founder-led technology studio site, redesigned around the outward-facing **ꓘK** fold: beautiful experiences and intelligent operations. Primary audiences: **startups, luxury brands and smart SMEs**. Hospitality is a secondary Lab application.

## Local development

```sh
npm install
npm run dev
```

Next.js 14 App Router, React 18, TypeScript and Tailwind. Manrope and IBM Plex Mono are self-hosted from installed, OFL-licensed packages. No external font calls or live AI dependency.

```sh
npm run typecheck
npm run test:core
npm run build
npm run start
# With the local server running and Google Chrome installed:
npm run test:browser
```

Set `TEST_BASE_URL` to test a different local port. Browser checks use Playwright and axe. Provider checks use mocked responses; they never send live enquiries.

## Content and configuration

- `data/brand-content.ts`: service families, indicative investments, FAQs, process and proof-readiness gates.
- `data/site.ts`: studio identity, canonical origin, existing historical founder data. TODO credentials are not used as public proof.
- `data/contact.ts`, `.env.example`: public contact and optional server integrations.
- `data/lab.ts`: fictional, deterministic scenarios and pure simulation rules.
- `data/work.ts`, `data/caseStudies.ts`: preserved project records, with distinct role/prototype/concept status.
- `data/assets.ts`: provenance and readiness register.

The website does not have a configured scheduler or delivery provider by default. The call-request API returns an honest unavailable response and WhatsApp fallback until a provider is configured. See [booking configuration](docs/BOOKING-CONFIG.md).

## Identity

Run `npm run brand:build` to regenerate the new vector identity, icon family and application templates. The older `scripts/build-brand-assets.mjs` belongs to the previous identity and should not be used for this redesign.

- [Brand guide](docs/BRAND-GUIDE.md)
- Internal direction board and applications: `/dev/brand` (noindex)
- Editable logo set and templates: `public/brand`
- [Delivery and verification report](docs/DELIVERY-REPORT.md)

Existing URLs remain available. Equivalent aliases `/studio` and `/investment` redirect to `/about` and `/pricing`. New Lab pages are indexable; development previews and confirmation pages are not.

## Launch

This is a local redesign, not a production deployment. Confirm commercial ranges, taxes, privacy retention and provider settings before launch. Audit reports remaining inherited Next.js/Tailwind dependency advisories requiring a separately tested version upgrade; do not treat this build as cleared for public production.

