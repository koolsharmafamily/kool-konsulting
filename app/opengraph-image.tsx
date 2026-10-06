import fs from "node:fs";
import path from "node:path";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Kool Konsulting — Beautiful experiences. Intelligent operations.";
export default function Image() {
  return new Response(
    fs.readFileSync(
      path.join(process.cwd(), "public/brand/applications/social-sharing.png"),
    ),
    { headers: { "Content-Type": "image/png" } },
  );
}
