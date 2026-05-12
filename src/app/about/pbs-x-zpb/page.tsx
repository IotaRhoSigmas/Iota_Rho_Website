import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

export default function PBSZPBPage() {
    return (
        <PageShell
        title="PBS x ZPB"
        subtitle="The bond between Phi Beta Sigma Fraternity, Inc. and Zeta Phi Beta Sorority, Inc."
        >
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Blue and White Family
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-5xl">
                A shared commitment to service, scholarship, and community.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/70">
                This section will include the final text about the relationship
                between Phi Beta Sigma Fraternity, Inc. and Zeta Phi Beta Sorority,
                Inc.
            </p>

            <p className="mt-5 text-base leading-8 text-white/70">
                Add your final paragraph here once you are ready.
            </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40 text-center text-sm text-white/40">
                Image placeholder:
                <br />
                /images/pbs-zpb/group-1.jpg
            </div>
            </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
            {[
            "/images/pbs-zpb/collab-1.jpg",
            "/images/pbs-zpb/collab-2.jpg",
            "/images/pbs-zpb/collab-3.jpg",
            ].map((image) => (
            <ThemedCard key={image}>
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40 text-center text-xs text-white/40">
                {image}
                </div>
            </ThemedCard>
            ))}
        </section>
        </PageShell>
    );
}