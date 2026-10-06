import fs from "node:fs";
import sharp from "sharp";
const dir = "public/brand";
fs.mkdirSync(`${dir}/applications`, { recursive: true });
export const mark =
  '<path d="M43 5h11v54H43zM38 29 17 5H2l25 27L2 59h15l21-24zM60 5h11v54H60zM76 29 97 5h15L87 32l25 27H97L76 35z"/>';
const glyphs = {
  k: [18, "M3 2v24M16 8 4 17l13 9"],
  o: [20, "M10 8C0 8 0 26 10 26S20 8 10 8Z"],
  l: [9, "M3 2v24"],
  n: [20, "M3 26V9m0 7c0-11 14-11 14 0v10"],
  s: [18, "M16 10C3 3-2 16 9 17s11 13-7 7"],
  u: [20, "M3 9v10c0 10 14 10 14-1V9m0 10v7"],
  t: [13, "M6 3v18q0 7 7 4M1 9h12"],
  i: [8, "M4 9v17M4 2v.1"],
  g: [20, "M17 9v20c0 8-12 8-14 3M17 17C17 4 3 5 3 17s14 12 14 0"],
};
function word(text, x, y, scale = 1) {
  let cursor = 0;
  let out = `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">`;
  for (const c of text) {
    if (c === " ") {
      cursor += 10;
      continue;
    }
    const [w, d] = glyphs[c];
    out += `<path transform="translate(${cursor} 0)" d="${d}"/>`;
    cursor += w + 2;
  }
  return out + "</g>";
}
const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`;
for (const [suffix, color] of [
  ["", "#0E1016"],
  ["-dark", "#F3F2EE"],
  ["-violet", "#5145E5"],
]) {
  fs.writeFileSync(
    `${dir}/kk-mark${suffix}.svg`,
    svg(114, 64, `<g fill="${color}">${mark}</g>`),
  );
  fs.writeFileSync(
    `${dir}/kk-logo-horizontal${suffix}.svg`,
    svg(
      365,
      44,
      `<g color="${color}"><g fill="currentColor" transform="translate(0 3) scale(.58)">${mark}</g>${word("kool konsulting", 84, 6, 0.99)}</g>`,
    ),
  );
  fs.writeFileSync(
    `${dir}/kk-logo-stacked${suffix}.svg`,
    svg(
      210,
      132,
      `<g color="${color}"><g fill="currentColor" transform="translate(62 0) scale(.75)">${mark}</g>${word("kool", 73, 58, 0.9)}${word("konsulting", 15, 94, 0.9)}</g>`,
    ),
  );
}
fs.copyFileSync(`${dir}/kk-mark.svg`, `${dir}/kk-mark-small.svg`);
const icon = svg(
  128,
  128,
  `<rect width="128" height="128" rx="27" fill="#5145E5"/><g fill="#fff" transform="translate(14 36) scale(.88)">${mark}</g>`,
);
fs.writeFileSync("public/favicon.svg", icon);
fs.writeFileSync("app/icon.svg", icon);
for (const size of [16, 24, 32, 192, 512]) {
  await sharp(Buffer.from(icon))
    .resize(size)
    .png()
    .toFile(
      size < 100 ? `${dir}/mark-${size}.png` : `public/icons/icon-${size}.png`,
    );
}
await sharp(Buffer.from(icon))
  .resize(512)
  .png()
  .toFile("public/icons/icon-maskable-512.png");
await sharp(Buffer.from(icon))
  .resize(180)
  .png()
  .toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(icon)).resize(180).png().toFile("app/apple-icon.png");
await sharp(Buffer.from(icon))
  .resize(800)
  .png()
  .toFile(`${dir}/social-avatar.png`);
const applications = [
  [
    "proposal-cover",
    900,
    1200,
    `<rect width="900" height="1200" fill="#F3F2EE"/><g color="#0E1016">${word("kool konsulting", 70, 65, 1.7)}</g><text x="70" y="390" font-family="sans-serif" font-size="76" fill="#0E1016">A considered</text><text x="70" y="480" font-family="sans-serif" font-size="76" fill="#5145E5">next chapter.</text><path d="M70 550h760" stroke="#b8b3a9"/><text x="70" y="600" font-family="monospace" font-size="20">PROJECT PROPOSAL / [CLIENT NAME]</text><g transform="translate(225 730) scale(4)" fill="#5145E5">${mark}</g><text x="70" y="1120" font-family="sans-serif" font-size="22">Experience design · Intelligent operations</text>`,
  ],
  [
    "social-post",
    1080,
    1080,
    `<rect width="1080" height="1080" fill="#0E1016"/><g transform="translate(330 100) scale(3.5)" fill="#7DDCF2">${mark}</g><text x="90" y="525" font-family="sans-serif" font-size="88" fill="#F3F2EE">Beautiful</text><text x="90" y="625" font-family="sans-serif" font-size="88" fill="#F3F2EE">experiences.</text><text x="90" y="755" font-family="sans-serif" font-size="88" fill="#8F89F6">Intelligent</text><text x="90" y="855" font-family="sans-serif" font-size="88" fill="#8F89F6">operations.</text><g color="#F3F2EE">${word("kool konsulting", 90, 973, 1.3)}</g>`,
  ],
  [
    "business-card",
    1000,
    580,
    `<rect width="1000" height="580" fill="#5145E5"/><g color="#fff">${word("kool konsulting", 62, 60, 1.6)}</g><g transform="translate(685 62) scale(2)" fill="#fff">${mark}</g><text x="62" y="355" font-family="sans-serif" font-size="46" fill="white">Kulvir Sharma</text><text x="62" y="405" font-family="sans-serif" font-size="25" fill="white">Founder · Nagpur, India</text><path d="M62 446h876" stroke="#9c95ef"/><text x="62" y="505" font-family="sans-serif" font-size="25" fill="white">+91 88888 21351</text><text x="938" y="505" text-anchor="end" font-family="sans-serif" font-size="25" fill="white">Let’s make it work beautifully.</text>`,
  ],
  [
    "social-sharing",
    1200,
    630,
    `<rect width="1200" height="630" fill="#F3F2EE"/><g color="#0E1016">${word("kool konsulting", 70, 55, 1.3)}</g><text x="70" y="240" font-family="sans-serif" font-size="67" fill="#0E1016">Beautiful experiences.</text><text x="70" y="328" font-family="sans-serif" font-size="67" fill="#5145E5">Intelligent operations.</text><text x="70" y="550" font-family="sans-serif" font-size="24" fill="#0E1016">An independent technology studio · Nagpur, India</text><g transform="translate(862 416) scale(2.3)" fill="#5145E5">${mark}</g>`,
  ],
];
for (const [name, w, h, body] of applications) {
  const output = svg(w, h, body);
  fs.writeFileSync(`${dir}/applications/${name}.svg`, output);
  await sharp(Buffer.from(output))
    .resize({ width: Math.min(w, 1200) })
    .png()
    .toFile(`${dir}/applications/${name}.png`);
}
console.log(
  "Built outward-facing ꓘK mark, outlined wordmarks, icons and four editable brand applications.",
);
