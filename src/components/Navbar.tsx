"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Products" },
  { href: "#connect",  label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/Logo.png"
            alt="HivarSoft"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="text-[15px] font-bold tracking-tight text-zinc-900">HivarSoft</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13.5px] font-medium text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50 px-3.5 py-1.5 rounded-lg transition-all"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-5 py-3 flex flex-col gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-zinc-600 border border-zinc-200 rounded-lg"
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}
