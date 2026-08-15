import "server-only";

import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const MINIMUM_IMAGE_BYTES = 20_000;

export async function getRandomPhotos(
  folder: string[],
  urlPrefix: string,
) {
  const directory = path.join(process.cwd(), "public", ...folder);

  const findImages = (currentDirectory: string, relativeDirectory = ""): string[] =>
    readdirSync(currentDirectory, { withFileTypes: true }).flatMap((entry) => {
      const relativePath = path.join(relativeDirectory, entry.name);

      if (entry.isDirectory()) {
        return findImages(path.join(currentDirectory, entry.name), relativePath);
      }

      const absolutePath = path.join(currentDirectory, entry.name);

      return entry.isFile() &&
        IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) &&
        statSync(absolutePath).size >= MINIMUM_IMAGE_BYTES
        ? [relativePath]
        : [];
    });

  let files: string[];

  try {
    files = findImages(directory);
  } catch {
    return [];
  }

  return Promise.all(
    files
      .map((file) => ({ file, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(async ({ file }) => {
        const dimensions = await sharp(path.join(directory, file)).metadata();

        return {
          src: `${urlPrefix}/${file.split(path.sep).map(encodeURIComponent).join("/")}`,
          alt: path
            .basename(file, path.extname(file))
            .replace(/[-_]+/g, " ")
            .trim(),
          width: dimensions.width,
          height: dimensions.height,
        };
      }),
  );
}
