"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { FadePhoto } from "@/components/TimedFadeCarousel";

type MasonryGalleryProps = {
  photos: FadePhoto[];
};

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
  const [availablePhotos, setAvailablePhotos] = useState(photos);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + availablePhotos.length) % availablePhotos.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % availablePhotos.length,
    );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + availablePhotos.length) % availablePhotos.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % availablePhotos.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, availablePhotos.length]);

  const skipMissingPhoto = (src: string) => {
    setAvailablePhotos((current) => current.filter((photo) => photo.src !== src));
    closeLightbox();
  };

  if (availablePhotos.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 px-6 py-24 text-center text-sm text-white/50">
        Gallery photos will appear here.
      </div>
    );
  }

  const activePhoto = activeIndex === null ? null : availablePhotos[activeIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3" role="list">
        {availablePhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black text-left shadow-lg shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${photo.alt || "gallery photo"}`}
            role="listitem"
          >
            {/* Native image dimensions preserve each photo's original aspect ratio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt || "Iota Rho chapter event"}
              loading={index < 4 ? "eager" : "lazy"}
              decoding="async"
              onError={() => skipMissingPhoto(photo.src)}
              className="h-auto w-full transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery photo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/50 p-3 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-blue-400 md:right-7 md:top-7"
            aria-label="Close photo"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {availablePhotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 z-20 rounded-full border border-white/15 bg-black/50 p-3 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-blue-400 md:left-7"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 z-20 rounded-full border border-white/15 bg-black/50 p-3 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-blue-400 md:right-7"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}

          <div
            className="relative h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt || "Iota Rho chapter event"}
              fill
              sizes="100vw"
              unoptimized
              priority
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
            {(activeIndex ?? 0) + 1} / {availablePhotos.length}
          </p>
        </div>
      )}
    </>
  );
}
