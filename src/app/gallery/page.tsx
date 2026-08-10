import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import TimedFadeCarousel from "@/components/TimedFadeCarousel";
import { getRandomPhotos } from "@/lib/photo-folder";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Iota Rho brotherhood, service, events, and campus life at UCF.",
};

const photos = getRandomPhotos(
  ["images", "gallery"],
  "/images/gallery",
  10,
);

export default function GalleryPage() {
  return (
    <PageShell
      title="Gallery"
      subtitle="Capturing brotherhood, service, campus presence, and the legacy of the Iota Rho Chapter."
    >
      <section
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-blue-950/30 backdrop-blur md:p-5"
        aria-label="Chapter photo gallery"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_50%)]" />
        <div className="relative">
          <TimedFadeCarousel
            photos={photos}
            emptyLabel="Gallery photo placeholder"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </div>
      </section>
    </PageShell>
  );
}
