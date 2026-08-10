import Image from "next/image";
import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";
import charterPhoto from "../../lineage/lineage-photos/Charter.jpg";

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
        <PageShell
        title="Iota Rho History"
        subtitle="A legacy of Brotherhood, Scholarship, and Service."
        >
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
            {milestones.map((item) => (
                <ThemedCard key={item.year}>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                    {item.year}
                </p>
                <h2 className="mt-3 text-2xl font-light text-white">
                    {item.title}
                </h2>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                </ThemedCard>
            ))}
            </div>

            <figure>
            <div className="relative aspect-[48/35] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl shadow-black/25">
                <Image
                    src={charterPhoto}
                    alt="Iota Rho charter members, June 8, 1978"
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-contain"
                    priority
                />
            </div>
            <figcaption className="px-2 pt-4 text-center text-xs uppercase tracking-[0.2em] text-white/50">
                Iota Rho Charter Members • June 8, 1978
            </figcaption>
            </figure>
        </div>
        </PageShell>
    );
}
