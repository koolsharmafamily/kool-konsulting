import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const out = "docs/verification";
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
const checks = [];
const accessibility = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (
    m.type() === "error" &&
    !m.text().includes("503") &&
    !m.text().includes("404")
  )
    errors.push(m.text());
});
async function run(name, fn) {
  try {
    await fn();
    checks.push({ name, passed: true });
    console.log("PASS", name);
  } catch (error) {
    checks.push({ name, passed: false, error: error.message });
    console.log("FAIL", name, error.message.slice(0, 180));
  }
}
async function go(route) {
  await page.goto(base + route, { waitUntil: "networkidle" });
  await page.locator("h1").first().waitFor();
}
async function overflow() {
  return page.evaluate(() => ({
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    overflow: [...document.querySelectorAll("main *")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
      })
      .slice(0, 8)
      .map((el) => ({ tag: el.tagName, cls: el.className })),
  }));
}
try {
  await go("/");
  await run("Homepage offer and corrected audience", async () => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Beautiful",
    );
    await expect(page.locator(".hero-description")).toContainText(
      "startups, luxury brands and smart SMEs",
    );
    await expect(page.locator(".header-book")).toBeVisible();
  });
  await run("Fold opens, audience changes and closes", async () => {
    await page.getByRole("button", { name: "Unfold the thinking" }).click();
    await expect(page.locator(".unfold-layer")).toHaveCount(3);
    await page
      .locator(".hero-worlds")
      .getByRole("button", { name: "Smart SMEs" })
      .click();
    await expect(page.locator(".unfold-layers")).toContainText(
      "A clear customer enquiry",
    );
    await page.getByRole("button", { name: "Close the fold" }).click();
    await expect(page.locator(".unfold-layers")).toHaveCount(0);
  });
  await run("All audience examples change the explanation", async () => {
    for (const name of ["Luxury brands", "Smart SMEs", "Startups"]) {
      await page.locator(".world-tabs").getByRole("button", { name }).click();
      await expect(
        page.locator(".world-tabs").getByRole("button", { name }),
      ).toHaveAttribute("aria-pressed", "true");
    }
  });
  for (const width of [360, 390, 768, 1024, 1440, 1920]) {
    await run(`Homepage width ${width}`, async () => {
      await page.setViewportSize({ width, height: 900 });
      const o = await overflow();
      if (o.scroll > width) throw Error(JSON.stringify(o));
      await page.screenshot({
        path: `${out}/home-${width}.png`,
        fullPage: width === 390 || width === 1440,
      });
    });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, 0));
  await run("Mobile menu focus, Escape and background inert", async () => {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("main")).toHaveAttribute("inert", "");
    await expect(page.locator("#mobile-menu a").first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
    await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  });
  const routes = [
    "/services",
    "/services/automation",
    "/services/websites",
    "/services/apps",
    "/services/software",
    "/lab",
    "/lab/startup-onboarding",
    "/lab/lifestyle-discovery",
    "/lab/hospitality-concierge",
    "/about",
    "/pricing",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/work",
  ];
  for (const route of routes) {
    await run(`Route and mobile overflow ${route}`, async () => {
      await go(route);
      await expect(page.locator("h1")).toHaveCount(1);
      const o = await overflow();
      if (o.scroll > 390) throw Error(JSON.stringify(o));
      if (/\| Kool Konsulting.*\| Kool Konsulting/.test(await page.title()))
        throw Error("Duplicated title suffix");
    });
    if (
      [
        "/services",
        "/lab/startup-onboarding",
        "/lab/lifestyle-discovery",
        "/lab/hospitality-concierge",
        "/contact",
        "/about",
        "/pricing",
      ].includes(route)
    ) {
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      accessibility.push({
        route,
        violations: result.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await go("/lab/startup-onboarding");
  await run(
    "Startup discovery, changed rule, human branch, permission pause, validation, reset",
    async () => {
      const runButton = () =>
        page.getByRole("button", { name: /Run sample workflow|Run again/ });
      await runButton().click();
      await expect(page.locator(".lab-route-result")).toContainText(
        "Discovery queue",
      );
      await page.getByLabel("Discovery queue: minimum team").selectOption("10");
      await runButton().click();
      await expect(page.locator(".lab-route-result")).toContainText(
        "Guided introduction",
      );
      await page.getByLabel("I would like a person to review this").check();
      await runButton().click();
      await expect(page.locator(".lab-route-result")).toContainText(
        "Human review",
      );
      await page.getByLabel("Sample permission to follow up").uncheck();
      await runButton().click();
      await expect(page.locator(".lab-route-result")).toContainText(
        "Awaiting permission",
      );
      await page.getByLabel("Sample company name").fill("");
      await runButton().click();
      await expect(page.locator(".lab-error")).toBeVisible();
      await page.getByRole("button", { name: "Reset demo" }).click();
      await expect(page.locator(".lab-activity")).toContainText(
        "No actions yet",
      );
      await page.screenshot({
        path: `${out}/startup-desktop.png`,
        fullPage: true,
      });
    },
  );
  await go("/lab/lifestyle-discovery");
  await run(
    "Lifestyle recommendations, unchanged quantity, stock errors, alternative, completion, reset",
    async () => {
      await page.getByLabel("Selected quantity").selectOption("6");
      await page.getByRole("button", { name: "Create sample enquiry" }).click();
      await expect(page.locator(".lab-error")).toContainText("Only 4");
      await expect(page.getByLabel("Selected quantity")).toHaveValue("6");
      await page.getByRole("radio", { name: "Evening", exact: true }).check();
      await page
        .getByRole("radio", { name: "Deep tones", exact: true })
        .check();
      await expect(page.locator(".lab-product-detail")).toContainText(
        "Arc cuff / Graphite",
      );
      await page.getByRole("button", { name: "Create sample enquiry" }).click();
      await expect(page.locator(".lab-error")).toContainText("unavailable");
      await page
        .getByRole("button", { name: /Explore the alternative finish/ })
        .click();
      await expect(page.getByLabel("Selected quantity")).toHaveValue("6");
      await page.getByLabel("Selected quantity").selectOption("2");
      await page
        .getByLabel("Preferred next step")
        .selectOption("An online conversation");
      await page.getByRole("button", { name: "Create sample enquiry" }).click();
      await expect(page.locator(".lab-client-record")).toContainText(
        "2 selected / 3",
      );
      await expect(page.locator(".lab-client-record")).toContainText(
        "An online conversation",
      );
      await expect(page.locator(".lab-complete")).toContainText(
        "no appointment or purchase",
      );
      await page.screenshot({
        path: `${out}/lifestyle-desktop.png`,
        fullPage: true,
      });
      await page.getByRole("button", { name: "Reset demo" }).click();
      await expect(page.getByLabel("Selected quantity")).toHaveValue("1");
    },
  );
  await go("/lab/hospitality-concierge");
  await run(
    "Hospitality unavailable slot, explicit alternative, accurate handoff, unknown question and reset",
    async () => {
      await page
        .getByRole("button", { name: "Check sample availability" })
        .click();
      await expect(page.locator(".lab-result")).toContainText(
        "19:30 is unavailable",
      );
      await page.getByRole("button", { name: /Select 18:30 instead/ }).click();
      await page
        .getByLabel("A preference for the host")
        .selectOption("Quiet table");
      await page
        .getByRole("button", { name: "Check sample availability" })
        .click();
      await page
        .getByLabel("Something you would like to know?")
        .fill("Can a helicopter land here?");
      await page
        .getByRole("button", { name: "Ask the sample venue guide" })
        .click();
      await expect(page.locator(".lab-knowledge-answer")).toContainText(
        "outside this sample venue guide",
      );
      await page
        .getByRole("button", { name: "Create sample host handoff" })
        .click();
      await expect(page.locator(".lab-staff-record")).toContainText(
        "18:30 · 2 guests",
      );
      await expect(page.locator(".lab-staff-record")).toContainText(
        "Quiet table",
      );
      await expect(page.locator(".lab-staff-record")).toContainText(
        "Can a helicopter land here?",
      );
      await expect(page.locator(".lab-complete")).toContainText(
        "no reservation has been made",
      );
      await page.screenshot({
        path: `${out}/hospitality-desktop.png`,
        fullPage: true,
      });
      await page.getByRole("button", { name: "Reset demo" }).click();
      await expect(page.locator(".lab-staff-record")).toContainText(
        "19:30 · 2 guests",
      );
    },
  );
  await go("/contact?service=automation&context=Startup%20workflow");
  await run(
    "Call request context, validation and honest unconfigured delivery",
    async () => {
      await expect(page.locator(".contact-context")).toContainText(
        "Startup workflow",
      );
      await expect(
        page.getByRole("radio", { name: "AI & Automation", exact: true }),
      ).toBeChecked();
      await page.getByRole("button", { name: "Send call request" }).click();
      await expect(page.locator("#enquiry-name")).toBeFocused();
      await page.getByLabel("Your name").fill("Sample Reviewer");
      await page.getByLabel("Email or phone").fill("test@example.com");
      await page
        .getByLabel("Business or website")
        .fill("Fictional test studio");
      await page
        .getByLabel("A little about the project")
        .fill("Local verification of a sample workflow.");
      await page
        .locator('input[name="render-time"]')
        .evaluate((el) => (el.value = String(Date.now() - 5000)));
      await page.waitForTimeout(2600);
      await page.getByRole("button", { name: "Send call request" }).click();
      await expect(page.locator(".contact-delivery-error")).toContainText(
        "Online request delivery is currently unavailable",
      );
      await expect(page.getByLabel("Your name")).toHaveValue("Sample Reviewer");
      await expect(page.locator(".contact-delivery-error a")).toHaveAttribute(
        "href",
        /wa.me/,
      );
      await page.screenshot({
        path: `${out}/contact-desktop.png`,
        fullPage: true,
      });
    },
  );
  await go("/thanks");
  await run("Direct thanks URL never confirms a request", async () => {
    await expect(page.locator("main")).toContainText(
      "does not confirm a submission",
    );
  });
  await go("/");
  await run("200% text zoom reflows", async () => {
    await page.setViewportSize({ width: 720, height: 500 });
    await page.evaluate(
      () => (document.documentElement.style.fontSize = "200%"),
    );
    if ((await overflow()).scroll > 720) throw Error("Overflow at 200%");
    await page.screenshot({ path: `${out}/home-zoom-200.png`, fullPage: true });
    await page.evaluate(() => (document.documentElement.style.fontSize = ""));
  });
  await run(
    "Reduced motion retains artwork and functional controls",
    async () => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.getByRole("button", { name: "Unfold the thinking" }).click();
      await expect(page.locator(".unfold-layer")).toHaveCount(3);
      const duration = await page
        .locator(".unfold-layer")
        .first()
        .evaluate((el) => getComputedStyle(el).animationName);
      if (duration !== "none") throw Error(duration);
    },
  );
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const nojsp = await nojs.newPage();
  await run("No JavaScript core content and contact fallback", async () => {
    await nojsp.goto(base);
    await expect(nojsp.getByRole("heading", { level: 1 })).toContainText(
      "Beautiful",
    );
    await expect(nojsp.locator(".header-book")).toBeVisible();
    await nojsp.goto(base + "/contact");
    await expect(
      nojsp.getByRole("button", { name: "Send call request" }),
    ).toBeVisible();
  });
  await nojs.close();
} finally {
  fs.writeFileSync(
    `${out}/browser-report.json`,
    JSON.stringify({ base, checks, accessibility, errors }, null, 2),
  );
  await browser.close();
}
console.log(
  JSON.stringify(
    {
      checks: checks.length,
      failed: checks.filter((c) => !c.passed).length,
      axeViolations: accessibility.flatMap((a) => a.violations).length,
      errors,
    },
    null,
    2,
  ),
);
if (
  checks.some((c) => !c.passed) ||
  errors.length ||
  accessibility.some((a) => a.violations.length)
)
  process.exitCode = 1;
