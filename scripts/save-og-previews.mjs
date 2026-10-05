import http from "http";
import fs from "fs";
import path from "path";

const artifactDir = "C:\\Users\\kulvi\\.gemini\\antigravity\\brain\\289b039b-cbde-467e-9dd2-0e06414d39e8";

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const buffer = Buffer.concat(chunks);
        fs.writeFileSync(dest, buffer);
        console.log(`Saved ${dest} (${buffer.length} bytes)`);
        resolve();
      });
    }).on("error", reject);
  });
}

async function main() {
  await download("http://localhost:3005/opengraph-image", path.join(artifactDir, "og_preview_home.png"));
  await download("http://localhost:3005/services/websites/opengraph-image", path.join(artifactDir, "og_preview_service_websites.png"));
  await download("http://localhost:3005/work/construction-site-app/opengraph-image", path.join(artifactDir, "og_preview_work_construction.png"));
}

main().catch(console.error);
