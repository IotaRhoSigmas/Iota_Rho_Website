import { Component } from "@/components/ui/silk-background-animation";
import shield from "@/images/home/PBS crest.gif";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Component shieldSrc={shield} />

      {/* ── Welcome Section ── */}
      <section className="relative w-full bg-[#020617] overflow-hidden">

        {/* Top edge glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(60,130,255,0.45) 50%, transparent 100%)",
          }}
        />

        {/* Faint radial ambient behind content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(10,40,160,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">

          {/* Section rule + label */}
          <div className="mt-2 mb-12 flex items-center gap-3 opacity-20">
            <div className="h-px flex-1 bg-blue-500" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="h-px w-8 bg-blue-500" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="h-px flex-1 bg-blue-500" />
          </div>
          
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[-0.02em] leading-tight mb-10">
            Welcome
          </h2>

          {/* Body */}
          <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed font-light">
            <p>
              On behalf of the men of Phi Beta Sigma Fraternity, Inc. Iota Rho
              Chapter at the University of Central Florida, we bid you greeting.
              Thank you for visiting our website. We hope that your visit is
              informative. It is our pleasure to welcome all brothers, sisters,
              and visitors to information about the history of our national
              organization and undergraduate chapter.
            </p>
            <p>
              The Iota Rho chapter became part of the University of Central
              Florida on{" "}
              <span className="text-blue-300 font-normal">June 8, 1978</span>.
              For over 40 years the men of Iota Rho continue to exemplify the
              high ideals of{" "}
              <span className="text-white/85 font-normal">
                Brotherhood, Scholarship, and Service
              </span>
              . We are working diligently every day to make the UCF and Orlando
              community stronger with the motto{" "}
              <span className="text-white/80 font-normal italic">
                &ldquo;Culture for Service and Service for Humanity.&rdquo;
              </span>
            </p>
            <p>
              Again, on behalf of all the Brothers of the Immortal Iota Rho
              Chapter, thank you for visiting our website and please feel free
              to contact us.
            </p>
            <p></p>
          </div>

          {/* Signature */}
          <div className="space-y-1">
            <p className="text-white/35 text-sm font-light tracking-wide">
              Fraternally,
            </p>
            <p className="text-white/80 text-base font-light tracking-wide">
              The Brothers of The Iota Rho Chapter
            </p>
            <p className="text-blue-400/60 text-xs tracking-[0.3em] uppercase font-light">
              Phi Beta Sigma Fraternity, Inc.
            </p>
          </div>

          {/* Bottom ornament */}
          <div className="mt-20 flex items-center gap-3 opacity-20">
            <div className="h-px flex-1 bg-blue-500" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="h-px w-8 bg-blue-500" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="h-px flex-1 bg-blue-500" />
          </div>

        </div>
      </section>
    </>
  );
}