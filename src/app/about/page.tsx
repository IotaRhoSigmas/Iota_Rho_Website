import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, HandHeart, Users } from "lucide-react";
import PageShell from "@/components/PageShell";
import imageAlpha from "./imagesAbout/achap1914.gif";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Phi Beta Sigma Fraternity, Inc., its founding principles, mission, and the Iota Rho Chapter at UCF.",
};

const pillars = [
  {
    title: "Brotherhood",
    text: "An inclusive bond built on dignity, character, and mutual support.",
    icon: Users,
  },
  {
    title: "Scholarship",
    text: "A lifelong commitment to knowledge, growth, and academic excellence.",
    icon: GraduationCap,
  },
  {
    title: "Service",
    text: "Using our talents to strengthen the communities that shaped us.",
    icon: HandHeart,
  },
];

const commitments = [
  "Strengthen and proactively serve the brotherhood.",
  "Maintain a strong commitment to brotherhood, scholarship, and service.",
  "Focus Fraternity programs on serving humanity.",
  "Respect the dignity and worth of every brother.",
  "Model integrity and ethical leadership in Fraternity business.",
  "Advance technological literacy to better serve members and the community.",
  "Nurture our constitutional bond with Zeta Phi Beta Sorority, Inc.",
  "Build mutually beneficial relationships with fellow organizations, businesses, and government.",
  "Select leaders who are committed and have demonstrated the ability to lead.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-2xl shadow-blue-950/30 md:px-10 md:py-12 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.22),transparent_38%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-blue-400">
              Phi Beta Sigma • Iota Rho Chapter
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-light leading-tight tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              A legacy designed to serve humanity.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              At the University of Central Florida, Iota Rho carries forward a
              tradition of leadership rooted in Brotherhood, Scholarship, and
              Service.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://phibetasigma1914.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm text-blue-100 transition hover:border-blue-300/60 hover:bg-blue-500/20"
              >
                Visit the national site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/30">
              <Image
                src={imageAlpha}
                alt="Historic members of Phi Beta Sigma"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/45 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-3 text-right text-xs uppercase tracking-[0.18em] text-white/35">
              Culture for Service • Service for Humanity
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3" aria-label="Fraternity pillars">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-medium text-white">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">{pillar.text}</p>
            </article>
          );
        })}
      </section>

      <section className="mx-auto mt-20 max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
          Our foundation
        </p>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/65">
          <p>
            Phi Beta Sigma Fraternity, Inc. was founded at Howard University in
            Washington, D.C., on January 9, 1914, by Honorable A. Langston Taylor,
            Honorable Leonard F. Morse, and Honorable Charles I. Brown. They
            envisioned a Greek-letter fraternity that would truly exemplify
            brotherhood, scholarship, and service.
          </p>
          <p>
            The Founders created an organization that viewed itself as part of the
            general community rather than apart from it. Each potential member was
            to be judged by his own merits—not family background, affluence, race,
            nationality, complexion, or hair texture. Their fraternity would be
            devoted to the “inclusive we” rather than the “exclusive we.”
          </p>
          <p>
            From its inception, Phi Beta Sigma was conceived as a mechanism for
            service. The Founders believed newly acquired skills should return to
            the communities from which members came, a conviction reflected in
            the motto “Culture for Service and Service for Humanity.”
          </p>
          <p>
            Today, Phi Beta Sigma is an international organization of leaders.
            Its members helped establish the Phi Beta Sigma National Foundation,
            Phi Beta Sigma Federal Credit Union, and Sigma Beta Club Foundation.
            Zeta Phi Beta Sorority, Inc., founded in 1920 with the assistance of
            Phi Beta Sigma, is the Fraternity’s sister organization.
          </p>
        </div>
      </section>

      <section className="mt-20 overflow-hidden rounded-[2rem] border border-blue-400/15 bg-blue-950/20">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">Mission</p>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-4xl">
              Our brothers are our greatest strength.
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/60">
              Through systems that embody Culture for Service and Service for
              Humanity, the Fraternity advances its objectives and strengthens
              brotherhood, scholarship, and service.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <li
                key={commitment}
                className="flex gap-4 border-b border-white/10 p-6 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="mt-0.5 text-xs font-medium text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6 text-white/65">{commitment}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
