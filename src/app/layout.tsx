import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HivarSoft — Affordable & Open Source Software",
  description:
    "HivarSoft delivers affordable, open-source, and scalable software solutions for modern businesses. From custom applications and SaaS platforms to AI/ML Apps.",
  metadataBase: new URL("https://hivarsoft.com"),
  keywords: [
    "open source software",
    "affordable software",
    "SaaS",
    "web development",
    "cloud solutions",
    "AI automation",
    "HivarSoft",
  ],
  authors: [{ name: "HivarSoft", url: "https://hivarsoft.com" }],
  creator: "HivarSoft",
  publisher: "HivarSoft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hivarsoft.com",
    siteName: "HivarSoft",
    title: "HivarSoft — Affordable & Open Source Software",
    description:
      "Building affordable, open-source, and scalable software solutions for businesses, startups, and individuals.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "HivarSoft Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HivarSoft — Affordable & Open Source Software",
    description:
      "Building affordable, open-source, and scalable software solutions for businesses, startups, and individuals.",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hivarsoft.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-white text-zinc-900 font-sans">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
