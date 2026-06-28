import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contributing from "@/components/Contributing";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HivarSoft — Affordable & Open Source Software",
  description:
    "HivarSoft builds modern, scalable software — SaaS platforms and open source tools — for teams and developers who want quality without compromise.",
  alternates: {
    canonical: "https://hivarsoft.com",
  },
  openGraph: {
    url: "https://hivarsoft.com",
    title: "HivarSoft — Affordable & Open Source Software",
    description:
      "Building affordable, open-source, and scalable software solutions for businesses, startups, and individuals.",
  },
  twitter: {
    title: "HivarSoft — Affordable & Open Source Software",
    description:
      "Building affordable, open-source, and scalable software solutions for businesses, startups, and individuals.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contributing />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
