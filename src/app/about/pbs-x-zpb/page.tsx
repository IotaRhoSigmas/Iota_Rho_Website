import PageShell from "@/components/PageShell";
import TimedFadeCarousel from "@/components/TimedFadeCarousel";
import { getRandomPhotos } from "@/lib/photo-folder";

const photos = getRandomPhotos(
  ["about", "pbs-x-zpb", "dove_love_photos"],
  "/about/pbs-x-zpb/dove_love_photos",
  5,
);

export default function PBSZPBPage() {
  return (
    <PageShell
      title="PBS x ZPB"
      subtitle="The bond between Phi Beta Sigma Fraternity, Inc. and Zeta Phi Beta Sorority, Inc."
    >
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Blue and White Family
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-5xl">
            A shared commitment to service, scholarship, and community.
          </h2>

          <p className="mt-8 text-base leading-8 text-white/70">
            This section will include the final text about the relationship
            between Phi Beta Sigma Fraternity, Inc. and Zeta Phi Beta Sorority,
            Inc.
          </p>

          <p className="mt-5 text-base leading-8 text-white/70">
            Add your final paragraph here once you are ready.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <TimedFadeCarousel
            photos={photos}
            emptyLabel="PBS and ZPB photo placeholder"
            sizes="(min-width: 1024px) 50vw, 100vw"
            aspectClassName="aspect-[4/3]"
          />
        </div>
      </section>
    </PageShell>
  );
}
