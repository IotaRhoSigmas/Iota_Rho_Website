import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Phi Beta Sigma | Iota Rho Chapter at UCF",
    template: "%s | Iota Rho Chapter",
  },
  description:
    "Official website of the Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. at the University of Central Florida.",
  applicationName: "Iota Rho Chapter",
  keywords: [
    "Phi Beta Sigma",
    "Iota Rho",
    "University of Central Florida",
    "UCF",
    "Brotherhood",
    "Scholarship",
    "Service",
  ],
  icons: {
    icon: "/images/home/pbs-crest.gif",
    apple: "/images/home/pbs-crest.gif",
  },
  openGraph: {
    type: "website",
    siteName: "Phi Beta Sigma — Iota Rho Chapter",
    title: "Phi Beta Sigma | Iota Rho Chapter at UCF",
    description:
      "Brotherhood, Scholarship, and Service at the University of Central Florida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phi Beta Sigma | Iota Rho Chapter at UCF",
    description:
      "Brotherhood, Scholarship, and Service at the University of Central Florida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
