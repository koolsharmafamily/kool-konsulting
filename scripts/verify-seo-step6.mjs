import http from "http";

const routes = [
  "/",
  "/services",
  "/services/websites",
  "/services/apps",
  "/services/software",
  "/services/automation",
  "/work",
  "/work/construction-site-app",
  "/about",
  "/pricing",
  "/contact",
  "/faq",
  "/privacy",
  "/terms"
];

async function fetchHtml(route) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3005${route}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, html: data }));
    }).on("error", reject);
  });
}

async function audit() {
  console.log("=== SEO, SHARING & JSON-LD AUDIT (Step 6) ===\n");
  let allPass = true;

  for (const route of routes) {
    const { status, html } = await fetchHtml(route);
    if (status !== 200) {
      console.error(`❌ [${route}] HTTP Status: ${status}`);
      allPass = false;
      continue;
    }

    // Canonical
    const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : null;

    // OG Title
    const ogTitleMatch = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i);
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : null;

    // OG Image
    const ogImageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i);
    const ogImage = ogImageMatch ? ogImageMatch[1] : null;

    // Twitter Card
    const twitterCardMatch = html.match(/<meta[^>]*name="twitter:card"[^>]*content="([^"]+)"/i);
    const twitterCard = twitterCardMatch ? twitterCardMatch[1] : null;

    // JSON-LD scripts
    const jsonLdMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    const jsonLdTypes = [];
    for (const match of jsonLdMatches) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed["@graph"]) {
          for (const item of parsed["@graph"]) {
            jsonLdTypes.push(item["@type"]);
          }
        } else if (parsed["@type"]) {
          jsonLdTypes.push(parsed["@type"]);
        }
      } catch (e) {
        console.error(`Invalid JSON-LD in ${route}:`, e.message);
      }
    }

    const hasCanonical = !!canonical;
    const hasOg = !!ogTitle && !!ogImage;
    const hasTwitter = !!twitterCard;
    const hasJsonLd = jsonLdTypes.length > 0;

    const ok = hasCanonical && hasOg && hasTwitter && hasJsonLd;
    if (!ok) allPass = false;

    console.log(`${ok ? "✓" : "❌"} ${route}`);
    console.log(`   Canonical: ${canonical}`);
    console.log(`   OG Title:  ${ogTitle}`);
    console.log(`   OG Image:  ${ogImage}`);
    console.log(`   Twitter:   ${twitterCard}`);
    console.log(`   JSON-LD:   [${jsonLdTypes.join(", ")}]\n`);
  }

  if (allPass) {
    console.log("🎉 ALL ROUTES PASSED STEP 6 AUDIT REQUIREMENTS!");
  } else {
    console.log("⚠️ Some requirements were not met. Check logs above.");
  }
}

audit().catch(console.error);
