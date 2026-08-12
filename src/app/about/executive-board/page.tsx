import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Executive Board",
  description: "Meet the executive board of the Iota Rho Chapter at UCF.",
};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const board = [
  { name: "Dharnel Leonard", role: "President", photo: "/images/Eboard/Dharnel_headshot.jpeg" },
  { name: "Malachi Paulin", role: "1st Vice President", photo: "/images/Eboard/Malachi_headshot_studio.jpeg" },
  { name: "Alfred Washington III", role: "2nd Vice President", photo: "/images/Eboard/AJ_Headshot.PNG" },
  { name: "Adrian Griner", role: "Secretary", photo: "/images/Eboard/Adrian_headshot.JPG" },
  { name: "Roberto Gilbert", role: "Treasurer", photo: "/images/Eboard/Roberto_headshot.JPG" },
  { name: "Justin Suriel", role: "Historian", photo: "/images/Eboard/Justin_Headshot.JPG" },
  { name: "Jalen Brooks", role: "Parliamentarian", photo: "/images/Eboard/Jalen_headshot.JPG" },
];
function BoardCard({
  name,
  role,
  photo,
  eager = false,
}: {
  name: string;
  role: string;
  photo?: string;
  eager?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="relative aspect-[4/5] w-full bg-black">
        {photo ? (
          <Image
            src={photo}
            alt={`${name}, ${role}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 88vw"
            loading={eager ? "eager" : "lazy"}
          />
        ) : (
          <div
            className="absolute inset-0"
            role="img"
            aria-label={`${name} photo placeholder`}
          />
        )}
      </div>

      <div className="px-6 py-6 text-center">
        <h2 className="text-xl font-light text-white">{name}</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-blue-400">
          {role}
        </p>
      </div>
    </article>
  );
}

export default function ExecutiveBoardPage() {
  return (
    <PageShell
      title="Executive Board"
      subtitle="Leadership of The Iota Rho Chapter."
    >
      <section aria-label="Executive board members">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-6xl px-1 sm:px-12"
        >
          <CarouselContent className="-ml-5">
            {board.map((member, index) => (
              <CarouselItem
                key={member.role}
                className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <BoardCard {...member} eager={index === 0} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 hidden border-white/20 bg-black/70 text-white hover:bg-blue-700 hover:text-white sm:inline-flex" />
          <CarouselNext className="right-0 hidden border-white/20 bg-black/70 text-white hover:bg-blue-700 hover:text-white sm:inline-flex" />
        </Carousel>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-white/40">
          Swipe or use the arrows to meet the board
        </p>
      </section>
    </PageShell>
  );
}
