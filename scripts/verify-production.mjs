import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const report = {
  matrix: [],
  links: [],
  accessibility: [],
  performance: [],
  webglIndependent: false,
  errors: [],
};
try {
  const ctx = await browser.newContext();
  const p = await ctx.newPage();
  p.on("pageerror", (e) => report.errors.push(e.message));
  const paths = new Set([
    "/",
    "/services",
    "/lab",
    "/about",
    "/contact",
    "/pricing",
    "/privacy",
    "/terms",
    "/faq",
    "/work",
    "/sitemap.xml",
    "/robots.txt",
    "/opengraph-image",
    "/services/automation/opengraph-image",
    "/dev/brand",
  ]);
  const routes = [
    "/",
    "/services",
    "/lab",
    "/lab/startup-onboarding",
    "/lab/lifestyle-discovery",
    "/lab/hospitality-concierge",
    "/contact",
    "/pricing",
    "/about",
  ];
  for (const route of routes) {
    await p.goto(base + route, { waitUntil: "networkidle" });
    for (const href of await p
      .locator("a[href]")
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
      if (href?.startsWith("/") && !href.startsWith("//"))
        paths.add(href.split("?")[0].split("#")[0]);
    }
    for (const width of [360, 390, 768, 1024, 1440, 1920]) {
      await p.setViewportSize({ width, height: 900 });
      await p.evaluate(() => scrollTo(0, 0));
      const overflow = await p.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      report.matrix.push({ route, width, overflow });
    }
    await p.setViewportSize({ width: 1440, height: 1000 });
    if (["/", "/lab", "/contact"].includes(route)) {
      report.accessibility.push({
        route,
        viewport: "desktop",
        violations: (
          await new AxeBuilder({ page: p })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
            .analyze()
        ).violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
    }
    if (route === "/") {
      await p.screenshot({
        path: "docs/verification/final-home-desktop.png",
        fullPage: true,
      });
      await p.screenshot({ path: "docs/verification/final-hero-desktop.png" });
      await p.setViewportSize({ width: 390, height: 844 });
      await p.screenshot({
        path: "docs/verification/final-home-mobile.png",
        fullPage: true,
      });
      await p.screenshot({ path: "docs/verification/final-hero-mobile.png" });
      report.accessibility.push({
        route,
        viewport: "mobile",
        violations: (
          await new AxeBuilder({ page: p })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
            .analyze()
        ).violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
    }
  }
  for (const path of paths) {
    const r = await ctx.request.get(base + path);
    report.links.push({
      path,
      status: r.status(),
      type: r.headers()["content-type"],
    });
  }
  const notFound = await ctx.request.get(base + "/not-a-real-page");
  report.links.push({
    path: "/not-a-real-page",
    status: notFound.status(),
    expected: 404,
  });
  await p.goto(base + "/work");
  for (const href of await p
    .locator('a[href^="/work/"]')
    .evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
    const r = await ctx.request.get(base + href);
    report.links.push({ path: href, status: r.status() });
  }
  await p.goto(base + "/contact");
  await p.setViewportSize({ width: 390, height: 844 });
  await p.getByRole("button", { name: "Open menu" }).click();
  const first = p.locator("#mobile-menu a").first(),
    last = p.locator("#mobile-menu a").last();
  await expect(first).toBeFocused();
  await last.focus();
  await p.keyboard.press("Tab");
  await expect(p.getByRole("button", { name: "Close menu" })).toBeFocused();
  await p.keyboard.press("Shift+Tab");
  await expect(last).toBeFocused();
  await p.keyboard.press("Escape");
  await expect(p.getByRole("button", { name: "Open menu" })).toBeFocused();
  const noWebGL = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  await noWebGL.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type.includes("webgl")) return null;
      return original.call(this, type, ...args);
    };
  });
  const np = await noWebGL.newPage();
  await np.goto(base);
  await expect(np.locator(".fold-art>img")).toBeVisible();
  report.webglIndependent = await np
    .locator(".fold-art>img")
    .evaluate((img) => img.complete && img.naturalWidth > 0);
  await noWebGL.close();
  await ctx.close();
  for (const sample of [
    { label: "desktop-local", width: 1440, height: 1000, throttled: false },
    { label: "mobile-4G-4xCPU", width: 390, height: 844, throttled: true },
  ]) {
    const context = await browser.newContext({
      viewport: { width: sample.width, height: sample.height },
      deviceScaleFactor: sample.throttled ? 2 : 1,
      isMobile: sample.throttled,
      hasTouch: sample.throttled,
    });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send("Network.enable");
    await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
    if (sample.throttled) {
      await cdp.send("Network.emulateNetworkConditions", {
        offline: false,
        latency: 150,
        downloadThroughput: (1.6 * 1024 * 1024) / 8,
        uploadThroughput: (750 * 1024) / 8,
      });
      await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    }
    await page.addInitScript(() => {
      window.__metrics = { lcp: 0, cls: 0, events: [] };
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__metrics.lcp = e.startTime;
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries())
          if (!e.hadRecentInput) window.__metrics.cls += e.value;
      }).observe({ type: "layout-shift", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries())
          if (e.interactionId) window.__metrics.events.push(e.duration);
      }).observe({ type: "event", buffered: true, durationThreshold: 16 });
    });
    const response = await page.goto(base, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    await page.getByRole("button", { name: "Unfold the thinking" }).click();
    await page.waitForTimeout(800);
    const metric = await page.evaluate(() => ({
      metrics: window.__metrics,
      resources: performance
        .getEntriesByType("resource")
        .map((r) => ({
          name: r.name.split("/").pop(),
          encoded: r.encodedBodySize,
          transferred: r.transferSize,
          type: r.initiatorType,
        })),
      navigation: performance
        .getEntriesByType("navigation")
        .map((r) => ({
          ttfb: r.responseStart,
          encoded: r.encodedBodySize,
          transferred: r.transferSize,
        })),
    }));
    report.performance.push({
      ...sample,
      status: response.status(),
      ...metric,
    });
    await context.close();
  }
} finally {
  await browser.close();
  fs.writeFileSync(
    "docs/verification/production-report.json",
    JSON.stringify(report, null, 2),
  );
}
console.log(
  JSON.stringify(
    {
      matrixChecks: report.matrix.length,
      overflow: report.matrix.filter((r) => r.overflow),
      brokenLinks: report.links.filter((l) => l.status !== (l.expected || 200)),
      axeViolations: report.accessibility.filter((a) => a.violations.length),
      webglIndependent: report.webglIndependent,
      performance: report.performance.map((p) => ({
        label: p.label,
        lcp: p.metrics.lcp,
        cls: p.metrics.cls,
        observedInteractionMaxMs: Math.max(0, ...p.metrics.events),
        resourceBytes:
          p.resources.reduce((sum, r) => sum + r.encoded, 0) +
          p.navigation[0].encoded,
      })),
      errors: report.errors,
    },
    null,
    2,
  ),
);
if (
  report.matrix.some((r) => r.overflow) ||
  report.links.some((l) => l.status !== (l.expected || 200)) ||
  report.accessibility.some((a) => a.violations.length) ||
  report.errors.length
)
  process.exitCode = 1;
