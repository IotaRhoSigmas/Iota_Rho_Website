import { Instagram, Mail, Youtube } from "lucide-react";
import PageShell from "@/components/PageShell";
import ContactForm from "./ContactForm";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@ucfsigmas",
    href: "https://www.instagram.com/ucfsigmas/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    handle: "Iota Rho Sigmas",
    href: "https://www.youtube.com/results?search_query=Iota+Rho+Sigmas",
    icon: Youtube,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Contact & Interest"
      subtitle="Connect with the Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. at the University of Central Florida."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            Send us a message
          </p>
          <h2 className="mt-3 text-2xl font-light text-white">
            We would love to hear from you.
          </h2>
          <p className="mb-7 mt-3 max-w-xl text-sm leading-6 text-white/60">
            Contact us with questions about chapter events, community service,
            partnerships, or interest in Phi Beta Sigma.
          </p>

          <ContactForm />
        </section>

        <aside className="space-y-5">
          <section className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
            <Mail className="h-6 w-6 text-blue-300" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-blue-300">
              Chapter Email
            </p>
            <a
              href="mailto:immortalsigmas@gmail.com"
              className="mt-2 block break-all text-base text-white transition hover:text-blue-300"
            >
              immortalsigmas@gmail.com
            </a>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Follow the chapter
            </p>
            <div className="mt-5 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {social.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-white/50">
                        {social.handle}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </aside>
      </div>
    </PageShell>
  );
}
