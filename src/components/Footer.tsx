import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="HivarSoft Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-lg">HivarSoft</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="https://github.com/HivarSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/company/hivarsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} HivarSoft. All rights reserved.
          </p>
          <p className="text-slate-500 italic">
            Building Software That Works. Pricing That Makes Sense.
          </p>
        </div>
      </div>
    </footer>
  );
}
