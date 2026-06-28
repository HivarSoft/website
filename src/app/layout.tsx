import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Base metadata — individual pages override title, description, and canonical.
export const metadata: Metadata = {
  metadataBase: new URL("https://hivarsoft.com"),
  title: {
    default: "HivarSoft — Affordable & Open Source Software",
    template: "%s | HivarSoft",
  },
  description:
    "HivarSoft delivers affordable, open-source, and scalable software solutions for modern businesses. From custom applications and SaaS platforms to AI/ML Apps.",
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
    siteName: "HivarSoft",
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
