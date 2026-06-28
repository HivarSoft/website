"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const links = [
    { href: "#about",    label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#connect",  label: "Connect" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/Logo.png"
              alt="HivarSoft Logo"
              width={36}
              height={36}
              className="rounded-lg transition-transform group-hover:scale-110 duration-200"
              priority
            />
            <div className="absolute -inset-1 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
          </div>
          <span className="text-xl font-bold text-slate-900">HivarSoft</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all group ${
                active === l.href
                  ? "text-purple-700 bg-purple-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/HivarSoft"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-1.5 rounded-lg opacity-70 hover:opacity-100 hover:bg-slate-100 transition-all"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
      </div>
    </header>
  );
}
