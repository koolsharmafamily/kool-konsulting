import fs from "node:fs";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import ts from "typescript";
const require = createRequire(import.meta.url);
function load(
  file,
  env = {},
  fetchMock = () => {
    throw Error("Unexpected external request");
  },
  cache = new Map(),
) {
  if (cache.has(file)) return cache.get(file);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  cache.set(file, module.exports);
  const resolver = (name) =>
    name.startsWith("@/")
      ? load(name.slice(2) + ".ts", env, fetchMock, cache)
      : require(name);
  new Function("require", "module", "exports", "process", "fetch", source)(
    resolver,
    module,
    module.exports,
    { env },
    fetchMock,
  );
  return module.exports;
}
const results = [];
async function test(name, fn) {
  try {
    await fn();
    results.push({ name, passed: true });
    console.log("PASS", name);
  } catch (e) {
    results.push({ name, passed: false, error: e.message });
    console.log("FAIL", name, e.message);
  }
}
const lab = load("data/lab.ts");
await test("Unavailable dining keeps input and offers explicit alternative", () => {
  const chosen = { ...lab.initialDining };
  const r = lab.checkDiningAvailability(chosen);
  assert.equal(r.status, "unavailable");
  assert.equal(r.alternative, "18:30");
  assert.equal(chosen.time, "19:30");
});
await test("Dining covers available, invalid and no-alternative states", () => {
  assert.equal(
    lab.checkDiningAvailability({ ...lab.initialDining, time: "18:30" }).status,
    "available",
  );
  assert.equal(
    lab.checkDiningAvailability({ ...lab.initialDining, date: "invalid" })
      .status,
    "error",
  );
  const r = lab.checkDiningAvailability({
    ...lab.initialDining,
    date: "2026-11-13",
    time: "19:30",
    party: 8,
  });
  assert.equal(r.alternative, "18:30");
});
await test("Unknown knowledge and allergy require a person; blank input is an error", () => {
  assert.equal(lab.lookupDiningKnowledge("What is the weather?").kind, "human");
  assert.equal(
    lab.lookupDiningKnowledge("Can you accommodate an allergy?").kind,
    "human",
  );
  assert.equal(lab.lookupDiningKnowledge("").kind, "error");
});
await test("All six product preference combinations are meaningful and inventory distinct", () => {
  const ids = new Set();
  for (const occasion of ["Everyday", "Evening", "A weekend away"])
    for (const finish of ["Warm neutrals", "Deep tones"])
      ids.add(lab.recommendProduct(occasion, finish).id);
  assert.equal(ids.size, 6);
  const product = lab.recommendProduct("Everyday", "Warm neutrals");
  assert.match(lab.validateProductEnquiry(product, 6), /Only 4/);
  assert.equal(product.stock, 4);
  assert.equal(lab.validateProductEnquiry(product, 2), null);
  assert.match(
    lab.validateProductEnquiry(
      lab.recommendProduct("Evening", "Deep tones"),
      1,
    ),
    /unavailable/,
  );
});
await test("Routing honours consent and human control before qualification", () => {
  const i = lab.initialOnboarding,
    r = lab.initialRule;
  assert.equal(lab.qualifyOnboarding(i, r).route, "qualified");
  assert.equal(
    lab.qualifyOnboarding(i, { ...r, minimumTeam: 10 }).route,
    "guided",
  );
  assert.equal(
    lab.qualifyOnboarding({ ...i, needsReview: true }, r).route,
    "human",
  );
  assert.equal(
    lab.qualifyOnboarding({ ...i, goal: "Not sure yet" }, r).route,
    "human",
  );
  assert.equal(
    lab.qualifyOnboarding({ ...i, consent: false, needsReview: true }, r).route,
    "paused",
  );
  assert.equal(lab.qualifyOnboarding({ ...i, company: "" }, r).route, "error");
});
const body = {
  name: "Sample Reviewer",
  contact: "test@example.com",
  business: "Fictional studio",
  service: "AI & Automation",
  description: "A bounded sample workflow for verification.",
  budget: "Not sure yet",
  timing: "Not sure yet",
  context: "Startup workflow",
  "render-time": Date.now() - 5000,
};
const { NextRequest } = require("next/server");
const req = (data = body, extra = {}) =>
  new NextRequest("https://local.example/api/enquiry", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      origin: "https://local.example",
      ...extra,
    },
    body: JSON.stringify(data),
  });
const unconfigured = load("app/api/enquiry/route.ts");
await test("No provider yields 503 and preserves useful WhatsApp fallback", async () => {
  const r = await unconfigured.POST(req());
  assert.equal(r.status, 503);
  const j = await r.json();
  assert.equal(j.ok, false);
  assert.match(j.whatsappUrl, /wa.me/);
  assert.match(decodeURIComponent(j.whatsappUrl), /Startup workflow/);
});
await test("Validation, honeypot, origin and body limits reject bad requests", async () => {
  assert.equal(
    (await unconfigured.POST(req({ ...body, contact: "invalid" }))).status,
    400,
  );
  assert.equal(
    (await unconfigured.POST(req({ ...body, "company-website": "bot" })))
      .status,
    400,
  );
  assert.equal(
    (await unconfigured.POST(req(body, { origin: "https://other.example" })))
      .status,
    403,
  );
  assert.equal(
    (await unconfigured.POST(req({ ...body, description: "x".repeat(40000) })))
      .status,
    413,
  );
  assert.equal(
    (await unconfigured.POST(req({ ...body, "render-time": Date.now() })))
      .status,
    429,
  );
});
const env = {
  RESEND_API_KEY: "mock-only",
  LEAD_FROM: "sender@example.com",
  LEAD_INBOX: "inbox@example.com",
  NODE_ENV: "production",
};
await test("Provider acknowledgement confirms request only; receipt and rate limit work", async () => {
  let calls = 0;
  const api = load("app/api/enquiry/route.ts", env, async () => {
    calls++;
    return new Response(JSON.stringify({ id: "mock-provider-id" }), {
      status: 200,
    });
  });
  const r = await api.POST(req());
  assert.equal(r.status, 200);
  const j = await r.json();
  assert.equal(j.status, "received");
  assert.match(j.message, /time still needs/);
  assert.match(r.headers.get("set-cookie"), /HttpOnly/);
  assert.equal((await api.POST(req())).status, 429);
  assert.equal(calls, 1);
});
await test("Missing provider receipt or failed delivery never produces success", async () => {
  for (const response of [
    new Response("{}", { status: 200 }),
    new Response("error", { status: 500 }),
  ]) {
    const api = load("app/api/enquiry/route.ts", env, async () => response);
    const r = await api.POST(req());
    assert.equal(r.status, 502);
    assert.equal(r.headers.get("set-cookie"), null);
  }
});
await test("Webhook fallback accepts only successful HTTP acknowledgement", async () => {
  const api = load(
    "app/api/enquiry/route.ts",
    { LEAD_WEBHOOK_URL: "https://mock.example/lead" },
    async () => new Response(null, { status: 204 }),
  );
  assert.equal((await api.POST(req())).status, 200);
});
await test("Native form path returns truthful fallback HTML without JavaScript", async () => {
  const r = await unconfigured.POST(
    new NextRequest("https://local.example/api/enquiry", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body).toString(),
    }),
  );
  assert.equal(r.status, 503);
  assert.match(await r.text(), /No calendar appointment has been booked/);
});
fs.mkdirSync("docs/verification", { recursive: true });
fs.writeFileSync(
  "docs/verification/core-report.json",
  JSON.stringify(results, null, 2),
);
if (results.some((r) => !r.passed)) process.exitCode = 1;
