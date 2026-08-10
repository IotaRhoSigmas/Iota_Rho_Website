import type { Metadata } from "next";
import { GraduationCap, HandHeart, Users } from "lucide-react";
import PageShell from "@/components/PageShell";
import TimedFadeCarousel from "@/components/TimedFadeCarousel";
import { getRandomPhotos } from "@/lib/photo-folder";

export const metadata: Metadata = {
  title: "Phi Beta Sigma and Zeta Phi Beta",
  description:
    "Learn about the constitutional bond between Phi Beta Sigma and Zeta Phi Beta and the UCF partnership of Iota Rho and Sigma Epsilon.",
};

const photos = getRandomPhotos(
  ["images", "dove-love"],
  "/images/dove-love",
  5,
);

const sharedValues = [
  {
    title: "Scholarship",
    text: "Encouraging academic excellence and lifelong growth across our campus community.",
    icon: GraduationCap,
  },
  {
    title: "Service",
    text: "Working together to create meaningful, lasting impact for the people we serve.",
    icon: HandHeart,
  },
  {
    title: "Family",
    text: "Honoring a constitutional bond grounded in mutual respect and shared purpose.",
    icon: Users,
  },
];

export default function PBSZPBPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-2xl shadow-blue-950/30 md:px-10 md:py-12 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.22),transparent_38%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-blue-400">
              Our Blue and White Family
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-light leading-tight tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              A historic bond. A shared purpose.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Zeta Phi Beta Sorority, Inc. was founded at Howard University on
              January 16, 1920, with encouragement and support from members of Phi
              Beta Sigma Fraternity, Inc. Their relationship became the first
              constitutional bond of its kind between a National Pan-Hellenic
              Council sorority and fraternity.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Since Zeta&apos;s inception, both organizations have collaborated
              through service, shared programs, and a commitment to uplifting
              communities while remaining distinct organizations.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-2xl shadow-black/30">
            <TimedFadeCarousel
              photos={photos}
              emptyLabel="Phi Beta Sigma and Zeta Phi Beta photo placeholder"
              sizes="(min-width: 1024px) 45vw, 100vw"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
          Blue and White at UCF
        </p>
        <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-4xl">
          Iota Rho and Sigma Epsilon
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65">
          At the University of Central Florida, the Iota Rho Chapter of Phi Beta
          Sigma is paired with the Sigma Epsilon Chapter of Zeta Phi Beta.
          Together, we carry the Blue and White Family bond forward through
          scholarship, campus engagement, community service, and mutual support.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Shared values">
        {sharedValues.map((value) => {
          const Icon = value.icon;

          return (
            <article
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{value.text}</p>
            </article>
          );
        })}
      </section>
    </PageShell>
  );
}
