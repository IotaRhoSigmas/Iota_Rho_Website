import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function servePhoto(folder: string[], requestedFilename: string) {
  const filename = path.basename(requestedFilename);
  const extension = path.extname(filename).toLowerCase();

  if (filename !== requestedFilename || !CONTENT_TYPES[extension]) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await readFile(
      path.join(process.cwd(), "src", "app", ...folder, filename),
    );

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": "inline",
        "Content-Type": CONTENT_TYPES[extension],
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
