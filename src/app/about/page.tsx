import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="About Iota Rho"
      subtitle="Brotherhood, Scholarship, and Service at the University of Central Florida."
    >
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Phi Beta Sigma • Iota Rho Chapter
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-5xl">
            Built on Brotherhood, Scholarship, and Service.
          </h2>

          <div className="mt-6 h-px w-24 bg-blue-500" />

          <p className="mt-8 text-base leading-8 text-white/70">
            The Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. represents
            a legacy of leadership, service, academic excellence, and brotherhood
            at the University of Central Florida. This page will hold the main
            About section text and chapter overview.
          </p>

          <p className="mt-5 text-base leading-8 text-white/70">
            Replace this paragraph with the final About section text once it is
            ready.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40 text-sm text-white/40">
            Image placeholder: /images/about/about-main.jpg
          </div>
        </div>
      </section>
    </PageShell>
  );
}