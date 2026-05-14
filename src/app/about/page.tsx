import Image from "next/image";
import PageShell from "@/components/PageShell";
import imageAlpha from "./imagesAbout/achap1914.gif";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            About Iota Rho
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-white/70">
            Brotherhood, Scholarship, and Service at the University of Central
            Florida.
          </p>
        </header>

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Phi Beta Sigma • Iota Rho Chapter
        </p>

        <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-5xl">
          Built on Brotherhood, Scholarship, and Service.
        </h2>

        <div className="mt-6 h-px w-24 bg-blue-500" />

        <div className="mt-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40">
            <Image
              src={imageAlpha}
              alt="Iota Rho chapter historical image"
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 space-y-5 text-base leading-8 text-white/70">
          <p>
            Phi Beta Sigma Fraternity Incorporated was founded at Howard
            University in Washington, D.C., on January 9, 1914, by three young
            African-American male students. Our Founders, Honorable A. Langston
            Taylor, Honorable Leonard F. Morse, and Honorable Charles I. Brown,
            wanted to organize a Greek letter fraternity that would truly
            exemplify the ideals of brotherhood, scholarship, and service.
          </p>

          <p>
            The Founders deeply wished to create an organization that viewed
            itself as a part of the general community rather than apart from the
            general community. They believed that each potential member should be
            judged by his own merits, rather than his family background or
            affluence; without regard to his race, nationality, skin complexion
            or even the texture of his hair. Taylor, Morse and Brown desired for
            their fraternity to exist as part of an even greater brotherhood
            which would be devoted to the “inclusive we” rather than the
            “exclusive we”.
          </p>

          <p>
            From its inception, our founders also conceived Phi Beta Sigma as a
            mechanism to deliver services to the general community. Rather than
            gaining skills to be utilized exclusively for themselves and their
            immediate families, they held a deep conviction that they should
            return their newly acquired skills to the communities from which they
            had come. This deep conviction was mirrored in our Fraternity’s
            motto, “Culture For Service and Service For Humanity”.
          </p>

          <p>
            Today, Phi Beta Sigma has blossomed into an international
            organization of leaders. No longer a single entity, members of the
            Fraternity have been instrumental in the establishment of the Phi
            Beta Sigma National Foundation, the Phi Beta Sigma Federal Credit
            Union, and The Sigma Beta Club Foundation. Zeta Phi Beta Sorority
            Inc., founded in 1920 with the assistance of Phi Beta Sigma, is the
            sister organization of the Fraternity.
          </p>

          <p>National Site: www.phibetasigma1914.org</p>
        </div>

        <h3 className="mt-14 text-3xl font-light tracking-tight text-white md:text-5xl">
          Mission Statement
        </h3>

        <div className="mt-5 space-y-5 text-base leading-8 text-white/70">
          <p>
            The brothers of Phi Beta Sigma are the Fraternity’s most valuable
            resource and strength. They are the primary means by which the Phi
            Beta Sigma objectives will be achieved. In order to accomplish the
            Fraternity’s objectives, it is essential that systems are instituted
            that effectively embody “Culture For Service and Service For
            Humanity” and promote brotherhood, scholarship, and service.
          </p>

          <p>To optimize Phi Beta Sigma’s effectiveness, the Fraternity will:</p>

          <ul className="mx-auto max-w-3xl list-disc space-y-3 pl-6 text-left">
            <li>
              Strengthen and serve proactively the brotherhood, as a supportive
              resource that positively impacts the Fraternity’s growth and
              financial solvency.
            </li>
            <li>
              Reaffirm and maintain a strong commitment to brotherhood,
              scholarship, and service.
            </li>
            <li>
              Ensure that the Fraternity programs are focused and committed to
              serving humanity.
            </li>
            <li>
              Create an environment that respects the dignity and worth of each
              brother.
            </li>
            <li>
              Exhibit integrity and ethical behavior in conducting the
              Fraternity’s business, serving as a model for all Greek-letter
              organizations.
            </li>
            <li>
              Maintain and improve the Fraternity’s technological literacy, in
              order to better service its members and the community at large.
            </li>
            <li>
              Foster and nurture our constitutional bond with Zeta Phi Beta
              Sorority, Inc.
            </li>
            <li>
              Encourage a closer and mutually beneficial working relationship
              with fellow Greek-letter organizations, other community service
              organizations, businesses, and government.
            </li>
            <li>
              Select leaders who are committed and have demonstrated their
              ability to lead.
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
