import fs from "fs";
import path from "path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const inputPath = path.join(process.cwd(), "logo_orginal.png");
const outDir = path.join(process.cwd(), "public", "assets", "brand");

const sizes = {
  header: 320,
  hero: 720,
  large: 1024
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildAlphaMask(data, width, height, invert = false) {
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i += 1) {
    const idx = i * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const lum = (r + g + b) / (3 * 255);
    let alpha = Math.pow(lum, 1.1) * 255;
    if (alpha < 10) alpha = 0;
    const channel = invert ? 0 : 255;
    out[idx] = channel;
    out[idx + 1] = channel;
    out[idx + 2] = channel;
    out[idx + 3] = Math.min(255, Math.max(0, Math.round(alpha)));
  }
  return out;
}

async function buildMarks() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const whiteRaw = buildAlphaMask(data, info.width, info.height, false);
  const darkRaw = buildAlphaMask(data, info.width, info.height, true);

  const base = sharp(whiteRaw, {
    raw: { width: info.width, height: info.height, channels: 4 }
  });

  const baseDark = sharp(darkRaw, {
    raw: { width: info.width, height: info.height, channels: 4 }
  });

  const whiteLarge = await base
    .resize({ width: sizes.large, fit: "inside" })
    .png()
    .toBuffer();

  const whiteHeader = await base
    .resize({ width: sizes.header, fit: "inside" })
    .png()
    .toBuffer();

  const whiteHero = await base
    .resize({ width: sizes.hero, fit: "inside" })
    .png()
    .toBuffer();

  const darkLarge = await baseDark
    .resize({ width: sizes.large, fit: "inside" })
    .png()
    .toBuffer();

  return {
    whiteLarge,
    whiteHeader,
    whiteHero,
    darkLarge
  };
}

async function buildIcons(markBuffer) {
  const canvas = sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).composite([
    {
      input: await sharp(markBuffer).resize({ width: 700, fit: "inside" }).png().toBuffer(),
      gravity: "center"
    }
  ]);

  const icon1024 = await canvas.png().toBuffer();
  const icon512 = await sharp(icon1024).resize(512, 512).png().toBuffer();
  const icon192 = await sharp(icon1024).resize(192, 192).png().toBuffer();
  const icon180 = await sharp(icon1024).resize(180, 180).png().toBuffer();
  const icon32 = await sharp(icon1024).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(icon1024).resize(16, 16).png().toBuffer();

  const ico = await pngToIco([icon16, icon32]);

  return {
    icon512,
    icon192,
    icon180,
    icon32,
    icon16,
    ico
  };
}

async function run() {
  ensureDir(outDir);

  const { whiteLarge, whiteHeader, whiteHero, darkLarge } = await buildMarks();

  fs.writeFileSync(path.join(outDir, "logo-sognasalt-white-1024.png"), whiteLarge);
  fs.writeFileSync(path.join(outDir, "logo-sognasalt-white.png"), whiteHeader);
  fs.writeFileSync(path.join(outDir, "logo-sognasalt-white-hero.png"), whiteHero);
  fs.writeFileSync(path.join(outDir, "logo-sognasalt-dark.png"), darkLarge);

  const icons = await buildIcons(darkLarge);

  fs.writeFileSync(path.join(process.cwd(), "public", "favicon.ico"), icons.ico);
  fs.writeFileSync(path.join(process.cwd(), "public", "favicon-16x16.png"), icons.icon16);
  fs.writeFileSync(path.join(process.cwd(), "public", "favicon-32x32.png"), icons.icon32);
  fs.writeFileSync(path.join(process.cwd(), "public", "apple-touch-icon.png"), icons.icon180);
  fs.writeFileSync(path.join(process.cwd(), "public", "android-chrome-192x192.png"), icons.icon192);
  fs.writeFileSync(path.join(process.cwd(), "public", "android-chrome-512x512.png"), icons.icon512);

  const manifest = {
    name: "Sognasalt",
    short_name: "Sognasalt",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    theme_color: "#0b0b0b",
    background_color: "#0b0b0b",
    display: "standalone"
  };

  fs.writeFileSync(
    path.join(process.cwd(), "public", "site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("Brand assets generated in public/assets/brand and public/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
