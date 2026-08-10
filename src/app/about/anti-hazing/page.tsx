    import PageShell from "@/components/PageShell";

    export default function AntiHazingPage() {
    return (
        <PageShell>
            <div className="mb-14 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Phi Beta Sigma • Iota Rho Chapter
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Anti-Hazing Policy
                </h1>

                <div className="mx-auto mt-6 h-px w-24 bg-blue-500" />

                <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">
                Phi Beta Sigma Fraternity, Inc. does not condone hazing or
                pledging of any kind.
                </p>
            </div>
            <p>
            Phi Beta Sigma Fraternity, Inc. does not condone hazing or pledging
            of any kind. Our Fraternity and its Members strongly believe that no
            one seeking membership in our Noble Order shall indulge in any
            physical abuse or undignified treatment (hazing).
            </p>

            <p>
            Hazing is defined as any action taken or situation created,
            intentionally or unintentionally, whether on or off Fraternity
            premises, to produce mental or physical discomfort, embarrassment,
            harassment, or ridicule.
            </p>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-300">
                Prohibited Activities Include
            </p>

            <ul className="space-y-3 text-white/70">
                <li>• Paddling in any form</li>
                <li>• Creation of excessive fatigue</li>
                <li>• Physical or psychological shocks</li>
                <li>• Quests, treasure hunts, or scavenger hunts</li>
                <li>
                • Road trips or activities carried outside the confines of the
                campus or chapter house
                </li>
                <li>
                • Wearing publicly conspicuous apparel not normally in good taste
                </li>
                <li>• Public stunts or buffoonery</li>
                <li>• Morally degrading or humiliating games and activities</li>
                <li>
                • Late work sessions that interfere with academic or work
                responsibilities
                </li>
                <li>
                • Any activities inconsistent with Fraternal Law, Ritual, Policy,
                or university regulations
                </li>
            </ul>
            </div>

            <p>
            Hazing is forbidden by the Fraternity’s Constitution as well as public
            and federal laws.
            </p>

            <p>Florida Hazing Law:</p>

            <a
            href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1006/Sections/1006.63.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-blue-300 transition hover:text-blue-200"
            >
            Florida Statute 1006.63 →
            </a>

            <p>
            Our mission is to recruit men of high moral and ethical values, and we
            firmly believe the only way to truly fulfill the vision and mission of
            our Founders is to respect each and every person for the talents and
            skills they bring to our Chapter and Fraternity.
            </p>
        </PageShell>
    );
    }
