import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

export type GalleryImage = {
  src: string;
  alt: string;
};

export function getImagesFromPublicFolder(folder: string): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public");
  const targetDir = path.join(publicDir, folder);

  if (!fs.existsSync(targetDir)) {
    return [];
  }

  const files = fs
    .readdirSync(targetDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "en"));

  return files.map((name) => {
    const base = path.basename(name, path.extname(name));
    const alt = base.replace(/[-_]+/g, " ");
    return {
      src: `/${folder}/${name}`,
      alt
    };
  });
}
