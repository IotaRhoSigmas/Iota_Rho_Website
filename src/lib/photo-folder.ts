import "server-only";

import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

export function getRandomPhotos(
  folder: string[],
  urlPrefix: string,
  maximum: number,
) {
  const directory = path.join(process.cwd(), "src", "app", ...folder);

  let files: string[] = [];

  try {
    files = readdirSync(directory, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
      )
      .map((entry) => entry.name);
  } catch {
    return [];
  }

  return files
    .map((file) => ({ file, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, maximum)
    .map(({ file }) => ({
      src: `${urlPrefix}/${encodeURIComponent(file)}`,
      alt: file
        .replace(path.extname(file), "")
        .replace(/[-_]+/g, " ")
        .trim(),
    }));
}
