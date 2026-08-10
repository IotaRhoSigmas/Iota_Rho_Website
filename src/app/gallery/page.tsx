"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import PageShell from "@/components/PageShell";

const categories = ["All", "Brotherhood", "Service", "Events", "Probate", "Campus Life"];

const photos = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Brotherhood gathering", category: "Brotherhood", title: "Brotherhood" },
  { src: "/images/gallery/service-1.jpg", alt: "Service event", category: "Service", title: "Service" },
  { src: "/images/gallery/events-1.jpg", alt: "Chapter event", category: "Events", title: "Events" },
  { src: "/images/gallery/probate-1.jpg", alt: "Probate night", category: "Probate", title: "Probate" },
  { src: "/images/gallery/campus-1.jpg", alt: "Campus life", category: "Campus Life", title: "Campus Life" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Chapter moment", category: "Brotherhood", title: "Legacy" },
  { src: "/images/gallery/service-2.jpg", alt: "Community service", category: "Service", title: "Impact" },
  { src: "/images/gallery/events-2.jpg", alt: "Campus event", category: "Events", title: "Presence" },
  { src: "/images/gallery/probate-2.jpg", alt: "Probate celebration", category: "Probate", title: "New Lines" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePhotos = useMemo(() => {
    if (activeCategory === "All") return photos;
    return photos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageShell
      title="Gallery"
      subtitle="Capturing brotherhood, service, campus presence, and the legacy of the Iota Rho Chapter."
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-2xl shadow-blue-950/20 backdrop-blur md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_45%)]" />

        <div className="relative">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "border-blue-400 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20"
                    : "border-white/10 bg-white/5 text-white/65 hover:border-blue-300/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {visiblePhotos.map((photo, index) => (
              <article
                key={photo.src}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20"
              >
                <div
                  className={`relative overflow-hidden ${
                    index % 5 === 0
                      ? "aspect-[4/5]"
                      : index % 3 === 0
                        ? "aspect-[1/1]"
                        : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-200/70">
                      {photo.category}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-white">
                      {photo.title}
                    </h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
