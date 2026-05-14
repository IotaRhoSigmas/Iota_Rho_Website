export default function PageShell({
    title,
    subtitle,
    children,
}: {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-[#020617] text-white">
            <section className="mx-auto max-w-6xl px-4 py-16">
                {title || subtitle ? (
                    <header className="mb-10">
                        {title ? (
                            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                                {title}
                            </h1>
                        ) : null}
                        {subtitle ? (
                            <p className="mt-3 max-w-3xl text-white/70">{subtitle}</p>
                        ) : null}
                    </header>
                ) : null}

                {children}
            </section>
        </main>
    );
}
