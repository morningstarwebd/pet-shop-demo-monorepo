import type { Metadata } from "next";
import { Syne, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import { getSiteContent } from "@/lib/supabase";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naaz Cool Pet Shop — Pets. Reimagined.",
  description:
    "The most curated pet experience in India. Premium breeds, grooming services, and pet products. Certified. Kool. Yours.",
  keywords: [
    "pet shop",
    "premium pets",
    "dog breeds",
    "pet grooming",
    "India",
    "Naaz Cool Pet Shop",
  ],
  openGraph: {
    title: "Naaz Cool Pet Shop — Pets. Reimagined.",
    description:
      "The most curated pet experience in India. Premium breeds, grooming, and products.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteData = await getSiteContent();

  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${playfair.variable}`}
    >
      <body>
        <GrainOverlay />
        <Navbar siteData={siteData} />
        <main>{children}</main>
        <Footer siteData={siteData} />
      </body>
    </html>
  );
}
