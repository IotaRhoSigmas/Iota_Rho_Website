import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

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

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40 text-center text-sm text-white/40">
                Image placeholder:
                <br />
                /images/about/history-hero.jpg
            </div>
            </div>
        </div>
        </PageShell>
    );
}