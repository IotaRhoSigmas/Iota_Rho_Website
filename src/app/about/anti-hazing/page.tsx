import type { Metadata } from "next";
import { ExternalLink, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Anti-Hazing Policy",
  description:
    "Review the Iota Rho Chapter and Phi Beta Sigma Fraternity anti-hazing policy and prohibited activities.",
};

const prohibitedActivities = [
  "Paddling in any form",
  "Creation of excessive fatigue",
  "Physical or psychological shocks",
  "Quests, treasure hunts, or scavenger hunts",
  "Unauthorized road trips or off-campus activities",
  "Publicly conspicuous apparel not normally in good taste",
  "Public stunts or buffoonery",
  "Morally degrading or humiliating games and activities",
  "Late work sessions that interfere with academic or work responsibilities",
  "Activities inconsistent with Fraternal Law, Ritual, Policy, or university regulations",
];

export default function AntiHazingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 text-center shadow-2xl shadow-blue-950/30 md:px-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_48%)]" />
        <div className="relative mx-auto max-w-4xl">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/15 text-blue-300">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-7 text-xs uppercase tracking-[0.32em] text-blue-400">
            Phi Beta Sigma • Iota Rho Chapter
          </p>
          <h1 className="mt-5 text-4xl font-light tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
            Zero tolerance for hazing.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
            Phi Beta Sigma Fraternity, Inc. does not condone hazing or pledging
            of any kind. Every person seeking membership deserves dignity,
            respect, and a safe experience.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
          Our standard
        </p>
        <div className="mt-7 space-y-5 text-base leading-8 text-white/65">
          <p>
            Our Fraternity and its members strongly believe that no one seeking
            membership in our Noble Order shall experience physical abuse or
            undignified treatment.
          </p>
          <p>
            Hazing includes any action taken or situation created, intentionally
            or unintentionally, on or off Fraternity premises, that produces
            mental or physical discomfort, embarrassment, harassment, or ridicule.
          </p>
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
        <div className="border-b border-white/10 p-7 md:p-9">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            Prohibited activities
          </p>
          <h2 className="mt-3 text-2xl font-light text-white md:text-3xl">
            Hazing has no place in our brotherhood.
          </h2>
        </div>

        <ul className="grid md:grid-cols-2">
          {prohibitedActivities.map((activity, index) => (
            <li
              key={activity}
              className="flex gap-4 border-b border-white/10 p-6 md:odd:border-r"
            >
              <span className="mt-0.5 text-xs font-medium text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-6 text-white/65">{activity}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 flex flex-col gap-6 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7 md:flex-row md:items-center md:justify-between md:p-9">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
            Know the law
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
            Hazing is forbidden by Fraternity policy and applicable law. Our
            chapter is committed to recruiting and developing men of high moral
            and ethical character.
          </p>
        </div>
        <a
          href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1006/Sections/1006.63.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/15 px-5 py-2.5 text-sm text-blue-100 transition hover:border-blue-300/60 hover:bg-blue-500/25"
        >
          Florida Statute 1006.63
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    </PageShell>
  );
}
