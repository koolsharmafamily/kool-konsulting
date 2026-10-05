import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const iconsDir = path.join(publicDir, "icons");
const brandDir = path.join(publicDir, "brand");
const appDir = path.join(root, "app");

// Ensure directories exist
for (const dir of [iconsDir, brandDir, appDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Naked mark per §2.1 & §2.2
// Stems: M17 12V88 and M83 12V88, width 15, butt caps, in #3D35E0
// Diamond: M22 50L50 22L78 50L50 78Z, width 15, miter join, in #3D35E0
// Node: square at centre (x=45, y=45, w=10, h=10) in #22C3EE
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="Kool Konsulting">
  <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
    <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
    <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
  </g>
  <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
</svg>`;

// 2. Favicon SVG per §2.3: 16px viewbox, two 2px vertical bars at x=4 and x=12, with a 2px square dot at centre
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <rect x="3" y="1" width="2" height="14" fill="#3D35E0"/>
  <rect x="11" y="1" width="2" height="14" fill="#3D35E0"/>
  <path d="M4 8 L8 4 L12 8 L8 12 Z" fill="none" stroke="#3D35E0" stroke-width="2"/>
  <rect x="7" y="7" width="2" height="2" fill="#22C3EE"/>
</svg>`;

// 3. Apple Touch Icon SVG per §2.3: 180², white square with 36px radius, mark in kk-indigo with kk-signal node
const appleTouchIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#FFFFFF"/>
  <g transform="translate(35, 35) scale(1.1)">
    <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
      <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
      <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
    </g>
    <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
  </g>
</svg>`;

// 4. PWA Icon SVG: 512x512 on #F6F7FB background
const pwaIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="104" fill="#FFFFFF" stroke="#E3E6EF" stroke-width="8"/>
  <g transform="translate(96, 96) scale(3.2)">
    <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
      <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
      <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
    </g>
    <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
  </g>
</svg>`;

// 5. Maskable Icon with 20% safe zone padding
const pwaMaskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#F6F7FB"/>
  <g transform="translate(136, 136) scale(2.4)">
    <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
      <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
      <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
    </g>
    <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
  </g>
</svg>`;

async function build() {
  console.log("Writing SVG brand and icon files...");
  fs.writeFileSync(path.join(appDir, "icon.svg"), markSvg, "utf-8");
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg, "utf-8");
  fs.writeFileSync(path.join(brandDir, "kk-mark.svg"), markSvg, "utf-8");

  // kk-mark-small.svg (16px viewbox for favicons / small stamps)
  fs.writeFileSync(path.join(brandDir, "kk-mark-small.svg"), faviconSvg, "utf-8");

  // kk-logo-horizontal.svg (light background)
  const horizontalSvgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 48" width="300" height="48">
  <g transform="translate(4, 6) scale(0.36)">
    <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
      <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
      <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
    </g>
    <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
  </g>
  <text x="52" y="32" font-family="'Anek Latin', system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" letter-spacing="-0.02em" fill="#0E0F1A">Kool Konsulting</text>
</svg>`;
  fs.writeFileSync(path.join(brandDir, "kk-logo-horizontal.svg"), horizontalSvgLight, "utf-8");

  // kk-logo-horizontal-dark.svg (dark background)
  const horizontalSvgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 48" width="300" height="48">
  <g transform="translate(4, 6) scale(0.36)">
    <g fill="none" stroke="#3D35E0" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10">
      <path d="M17 12V88M83 12V88" stroke-linecap="butt"/>
      <path d="M22 50L50 22L78 50L50 78Z" stroke-linecap="butt"/>
    </g>
    <rect x="45" y="45" width="10" height="10" fill="#22C3EE"/>
  </g>
  <text x="52" y="32" font-family="'Anek Latin', system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" letter-spacing="-0.02em" fill="#F6F7FB">Kool Konsulting</text>
</svg>`;
  fs.writeFileSync(path.join(brandDir, "kk-logo-horizontal-dark.svg"), horizontalSvgDark, "utf-8");

  console.log("Rendering PNG icons via sharp...");
  // Apple touch icon (180x180)
  await sharp(Buffer.from(appleTouchIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  await sharp(Buffer.from(appleTouchIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  // PWA icons
  await sharp(Buffer.from(pwaIconSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, "icon-192.png"));

  await sharp(Buffer.from(pwaIconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, "icon-512.png"));

  await sharp(Buffer.from(pwaMaskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, "icon-maskable-512.png"));

  console.log("✓ Brand assets generated successfully per §2 geometry and tokens.");
}

build().catch((err) => {
  console.error("Error generating brand assets:", err);
  process.exit(1);
});
