import { servePhoto } from "@/lib/serve-photo";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params;
  return servePhoto(["gallery", "Gphotos"], filename);
}
