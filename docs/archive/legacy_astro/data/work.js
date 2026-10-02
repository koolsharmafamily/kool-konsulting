/**
 * CASE STUDIES AND TESTIMONIALS
 *
 * These arrays are intentionally EMPTY.
 *
 * Kool Konsulting has no completed client engagements yet, so there are no real
 * results to publish. Inventing a client name, a quote or a percentage would put
 * fabricated evidence in front of real prospects, so the site instead handles the
 * empty state honestly: /work explains that the first engagements are under way
 * and points at the founder's background, and no testimonial section renders
 * anywhere until this file has entries.
 *
 * ---------------------------------------------------------------------------
 * HOW TO PUBLISH YOUR FIRST CASE STUDY
 *
 * Add one object to CASE_STUDIES below. A page appears automatically at
 * /work/<slug>, it is linked from /work and the homepage, it enters sitemap.xml,
 * and the "no case studies yet" state disappears on its own. Nothing else to edit.
 *
 * Get the client's written permission first. If they prefer not to be named, use
 * a descriptive anonymised title — "a four-clinic dental group in Nagpur" — and
 * set `client` to that. Anonymised is fine. Invented is not.
 *
 * Every `result` needs a real measured number with the period it covers.
 * ---------------------------------------------------------------------------
 *
 * {
 *   slug: "dental-group-local-visibility",
 *   client: "A four-clinic dental group in Nagpur",
 *   sector: "Healthcare",
 *   service: "local-visibility",              // must match a services.js slug
 *   headline: "From 11 to 240 monthly calls in five months",
 *   summary: "One line for the /work listing card.",
 *   problem: "What was wrong, in the client's terms, with the numbers that showed it.",
 *   built: [
 *     "What you actually did — one item per line",
 *   ],
 *   results: [
 *     { figure: "240", label: "monthly calls from the profile", note: "up from 11, over five months" },
 *   ],
 *   quote: {
 *     text: "What the client actually said.",
 *     name: "Full Name",
 *     role: "Practice Manager",
 *     company: "Company Name",
 *     photo: null,                            // "/clients/name.webp" when available
 *   },
 *   period: "March 2026 – August 2026",
 * }
 */

export const CASE_STUDIES = [];

/**
 * Standalone testimonials from clients whose work is not written up as a full
 * case study. Same rule: real, attributed, permitted. Shape:
 *
 * { text: "...", name: "...", role: "...", company: "...", photo: null }
 */
export const TESTIMONIALS = [];

/**
 * Outcome statistics for the homepage. The brief calls for three client-result
 * figures. Until real engagements produce them, this stays empty and the
 * homepage shows a credentials band instead of inventing numbers.
 *
 * { figure: "240", label: "monthly calls generated", note: "dental group, 5 months" }
 */
export const OUTCOME_STATS = [];

export const hasWork = CASE_STUDIES.length > 0;
export const hasTestimonials = TESTIMONIALS.length > 0;
export const hasStats = OUTCOME_STATS.length > 0;
