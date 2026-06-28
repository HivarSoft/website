import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050816] text-slate-400 relative overflow-hidden">
      {/* SVG top border line */}
      <svg aria-hidden="true" className="w-full" height="2" viewBox="0 0 1400 2" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footer-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="30%"  stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="70%"  stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="1" x2="1400" y2="1" stroke="url(#footer-line)" strokeWidth="1.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src="/Logo.png" alt="HivarSoft Logo" width={40} height={40} className="rounded-xl" />
              <div className="absolute -inset-1 rounded-2xl bg-purple-500/20 blur-sm" />
            </div>
            <div>
              <span className="text-white font-bold text-lg block">HivarSoft</span>
              <span className="text-xs text-slate-500">Creating Value Through Technology</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            {[
              { label: "About",    href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "GitHub",   href: "https://github.com/HivarSoft", external: true },
              { label: "LinkedIn", href: "https://linkedin.com/company/hivarsoft", external: true },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="hover:text-purple-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Products */}
          <div className="flex gap-3">
            <a href="https://notes-ai.hivarsoft.com/" target="_blank" rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-lg transition-all">
              Notes AI ↗
            </a>
            <a href="https://gitstats.hivarsoft.com/" target="_blank" rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-lg transition-all">
              GitStats ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-xs sm:text-sm">
          <p className="text-slate-400">&copy; {year} HivarSoft. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-slate-500">
            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline italic text-slate-600">Building Software That Works. One Step At a Time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
