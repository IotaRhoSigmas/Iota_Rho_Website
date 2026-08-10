import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

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
  { name: "Dharnel Leonard", role: "President" },
  { name: "Malachi Paulin", role: "1st Vice President" },
  { name: "Alfred Washington III", role: "2nd Vice President" },
  { name: "Adrian Griner", role: "Secretary" },
  { name: "Roberto Gilbert", role: "Treasurer" },
  { name: "Justin Suriel", role: "Historian" },
  { name: "Jeremiah Williams", role: "Parliamentarian" },
];

function BoardCard({ name, role }: { name: string; role: string }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur">
      <div
        className="aspect-[4/5] w-full bg-black"
        role="img"
        aria-label={`${name} photo placeholder`}
      />

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
      subtitle="Leadership of the Iota Rho Chapter."
    >
      <section aria-label="Executive board members">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-6xl px-1 sm:px-12"
        >
          <CarouselContent className="-ml-5">
            {board.map((member) => (
              <CarouselItem
                key={member.role}
                className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <BoardCard {...member} />
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
