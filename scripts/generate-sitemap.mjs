import fs from "fs";
import path from "path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const routes = [
  "/no/",
  "/no/product/original/",
  "/no/process/",
  "/no/origin/",
  "/en/",
  "/en/product/original/",
  "/en/process/",
  "/en/origin/",
  "/de/",
  "/de/product/original/",
  "/de/process/",
  "/de/origin/"
];

const urls = routes
  .map((route) => `${basePath}${route}`)
  .map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outPath, sitemap);
console.log(`Sitemap written to ${outPath}`);
