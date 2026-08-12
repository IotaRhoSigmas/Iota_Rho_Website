"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type FadePhoto = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type TimedFadeCarouselProps = {
  photos: FadePhoto[];
  emptyLabel: string;
  sizes: string;
  aspectClassName?: string;
};

const SLIDE_DURATION_MS = 5000;

export default function TimedFadeCarousel({
  photos,
  emptyLabel,
  sizes,
  aspectClassName = "aspect-[4/3] md:aspect-[16/9]",
}: TimedFadeCarouselProps) {
  const [availablePhotos, setAvailablePhotos] = useState(photos);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (availablePhotos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % availablePhotos.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [availablePhotos.length]);

  const skipMissingPhoto = (src: string) => {
    setAvailablePhotos((current) => current.filter((photo) => photo.src !== src));
    setActiveIndex(0);
  };

  return (
    <div className={`relative overflow-hidden rounded-[1.4rem] bg-black ${aspectClassName}`}>
      {availablePhotos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          unoptimized
          onError={() => skipMissingPhoto(photo.src)}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {availablePhotos.length === 0 && (
        <div className="absolute inset-0 bg-black" role="img" aria-label={emptyLabel} />
      )}

      {availablePhotos.length > 1 && (
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-10"
          aria-label="Slideshow progress"
        >
          {availablePhotos.map((photo, index) => (
            <span
              key={photo.src}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeIndex ? "w-8 bg-blue-400" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
