"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type PhotoSlideshowProps = {
  photos: string[];
};

const MAX_PHOTOS = 5;
const SLIDE_DURATION_MS = 5000;

export default function PhotoSlideshow({ photos }: PhotoSlideshowProps) {
  const initialPhotos = useMemo(
    () => photos.filter((photo) => photo.trim().length > 0).slice(0, MAX_PHOTOS),
    [photos],
  );
  const [availablePhotos, setAvailablePhotos] = useState(initialPhotos);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (availablePhotos.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % availablePhotos.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [availablePhotos.length]);

  const skipMissingPhoto = (photo: string) => {
    setAvailablePhotos((current) => current.filter((item) => item !== photo));
    setActiveIndex(0);
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
      {availablePhotos.map((photo, index) => (
        <Image
          key={photo}
          src={photo}
          alt="Phi Beta Sigma and Zeta Phi Beta event"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          onError={() => skipMissingPhoto(photo)}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {availablePhotos.length === 0 && (
        <div
          className="absolute inset-0 bg-black"
          role="img"
          aria-label="PBS and ZPB photo placeholder"
        />
      )}
    </div>
  );
}
