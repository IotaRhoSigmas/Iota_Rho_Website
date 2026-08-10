import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import charterPhoto from "../../lineage/lineage-photos/Charter.jpg";

export const metadata: Metadata = {
  title: "Iota Rho History",
  description:
    "Explore the history and legacy of the Iota Rho Chapter at the University of Central Florida since 1978.",
};

const milestones = [
  {
    year: "1978",
    title: "Chapter Founded",
    text: "The Iota Rho Chapter became part of the University of Central Florida on June 8, 1978.",
  },
  {
    year: "40+ Years",
    title: "Continuing the Legacy",
    text: "For over 40 years, the men of Iota Rho have continued to uphold Brotherhood, Scholarship, and Service.",
  },
  {
    year: "Today",
    title: "Service and Leadership",
    text: "The chapter continues to serve the UCF and Orlando community through leadership, programming, and brotherhood.",
  },
];

export default function HistoryPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-2xl shadow-blue-950/30 md:px-10 md:py-12 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.22),transparent_38%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-blue-400">
              Iota Rho • University of Central Florida
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-light leading-tight tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              A legacy more than four decades strong.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Since June 8, 1978, Iota Rho has advanced Brotherhood,
              Scholarship, and Service throughout UCF and the Orlando community.
            </p>
          </div>

          <figure>
            <div className="relative aspect-[48/35] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/30">
              <Image
                src={charterPhoto}
                alt="Iota Rho charter members, June 8, 1978"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 text-right text-xs uppercase tracking-[0.18em] text-white/35">
              Iota Rho Charter Members • June 8, 1978
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
          Our chapter journey
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65">
          From its founding at UCF to its continued presence today, Iota Rho has
          remained committed to developing leaders, strengthening brotherhood,
          and creating meaningful impact through service.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Iota Rho milestones">
        {milestones.map((milestone, index) => (
          <article
            key={milestone.year}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                {milestone.year}
              </p>
              <span className="text-xs text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-medium text-white">
              {milestone.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/55">
              {milestone.text}
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
