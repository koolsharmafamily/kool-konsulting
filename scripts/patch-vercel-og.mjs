import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/index.node.js");
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, "utf8");

  content = content.replace(
    /var fontData = fs\.readFileSync\(fileURLToPath\(.*?\)\);/,
    'var fontData = fs.readFileSync(fileURLToPath(new URL("./noto-sans-v27-latin-regular.ttf", import.meta.url)));'
  );
  content = content.replace(
    /var yoga_wasm = fs\.readFileSync\(fileURLToPath\(.*?\)\);/,
    'var yoga_wasm = fs.readFileSync(fileURLToPath(new URL("./yoga.wasm", import.meta.url)));'
  );
  content = content.replace(
    /var resvg_wasm = fs\.readFileSync\(fileURLToPath\(.*?\)\);/,
    'var resvg_wasm = fs.readFileSync(fileURLToPath(new URL("./resvg.wasm", import.meta.url)));'
  );

  fs.writeFileSync(file, content, "utf8");
  console.log("✓ Patched @vercel/og index.node.js successfully");
} else {
  console.log("File not found:", file);
}
