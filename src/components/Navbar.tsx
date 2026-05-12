"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const aboutLinks = [
{ href: "/about/history", label: "Iota Rho History" },
{ href: "/about/executive-board", label: "Executive Board" },
{ href: "/about/pbs-x-zpb", label: "PBS x ZPB" },
{ href: "/about/anti-hazing", label: "Anti-Hazing" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/lineage", label: "Lineage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const aboutActive = pathname.startsWith("/about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);


  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  // Styles change depending on whether we are on the home (silk hero) page
  const headerClass = isHome
    ? "sticky top-0 z-[100] border-b border-white/10 bg-black/25 backdrop-blur"
    : "sticky top-0 z-[100] border-b border-white/10 bg-[#020617]/95 backdrop-blur";

  const linkBase = "text-white/80 hover:text-white";
  const activeLink = "text-white";

   return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white/90" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Phi Beta Sigma</p>
            <p className="text-xs text-white/70">Iota Rho Chapter • UCF</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={[
              "text-sm font-medium transition",
              pathname === "/" ? activeLink : linkBase,
            ].join(" ")}
          >
            Home
          </Link>

          <div className="group relative">
            <Link
              href="/about"
              className={[
                "text-sm font-medium transition",
                aboutActive ? activeLink : linkBase,
              ].join(" ")}
            >
              About ▾
            </Link>

            <div className="invisible absolute left-0 top-full pt-3 w-56 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[#020617]/95 p-2 shadow-2xl backdrop-blur">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "text-sm font-medium transition",
                pathname === link.href ? activeLink : linkBase,
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#020617]/95 backdrop-blur md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4">
            <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-white/80">
              Home
            </Link>

            <button
              type="button"
              onClick={() => setAboutOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-white/80"
            >
              About <span>{aboutOpen ? "−" : "+"}</span>
            </button>

            {aboutOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}