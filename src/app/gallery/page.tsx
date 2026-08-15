import type { Metadata } from "next";
import MasonryGallery from "@/components/MasonryGallery";
import PageShell from "@/components/PageShell";
import { getRandomPhotos } from "@/lib/photo-folder";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Iota Rho brotherhood, service, events, and campus life at UCF.",
};

export default async function GalleryPage() {
  const photos = await getRandomPhotos(
    ["images", "gallery"],
    "/images/gallery",
  );

  return (
    <PageShell
      title="Gallery"
      subtitle="Capturing brotherhood, service, campus presence, and the legacy of the Iota Rho Chapter."
    >
      <section
        className="relative mx-auto max-w-7xl"
        aria-label="Chapter photo gallery"
      >
        <MasonryGallery photos={photos} />
      </section>
    </PageShell>
  );
}
