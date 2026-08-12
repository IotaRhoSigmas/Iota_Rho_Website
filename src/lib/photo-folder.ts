import "server-only";

import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const MINIMUM_IMAGE_BYTES = 20_000;

export function getRandomPhotos(
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

  return files
    .map((file) => ({ file, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ file }) => ({
      src: `${urlPrefix}/${file.split(path.sep).map(encodeURIComponent).join("/")}`,
      alt: path
        .basename(file, path.extname(file))
        .replace(/[-_]+/g, " ")
        .trim(),
    }));
}
