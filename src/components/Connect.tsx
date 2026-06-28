"use client";
import { useReveal } from "@/hooks/useReveal";

const links = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/company/hivarsoft",
    href: "https://linkedin.com/company/hivarsoft",
    color: "from-blue-500 to-blue-600",
    bg: "hover:bg-blue-50 hover:border-blue-200",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/HivarSoft",
    href: "https://github.com/HivarSoft",
    color: "from-slate-600 to-slate-800",
    bg: "hover:bg-slate-50 hover:border-slate-300",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Email",
    value: "hitesh.k.83080@gmail.com",
    href: "mailto:hitesh.k.83080@gmail.com",
    color: "from-pink-500 to-rose-600",
    bg: "hover:bg-pink-50 hover:border-pink-200",
  },
];

export default function Connect() {
  const ref = useReveal();

  return (
    <section id="connect" className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* SVG — diagonal lines */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="conn-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 600 L300 0" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.15" className="line-draw" />
        <path d="M200 600 L500 0" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.1" className="line-draw-2" />
        <path d="M1400 600 L1100 0" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.15" className="line-draw" />
        <path d="M1200 600 L900 0" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.1" className="line-draw-2" />
        {/* Horizontal center line */}
        <line x1="0" y1="300" x2="1400" y2="300" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.1" className="line-draw-3" />
      </svg>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Get in Touch
          </p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 stagger-1">
            Connect With <span className="gradient-text">Us</span>
          </h2>
          <p className="reveal text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto stagger-2">
            Whether you want to collaborate, contribute, or just say hi — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-3xl mx-auto">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`reveal stagger-${i + 2} group flex sm:flex-col flex-row items-center gap-4 sm:gap-3 bg-white border border-slate-100 rounded-2xl p-4 sm:p-7 sm:text-center card-glow ${link.bg} transition-all`}
            >
              <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-linear-to-br ${link.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0`}>
                {link.icon}
              </div>
              <div className="flex-1 sm:flex-none">
                <div className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                  {link.label}
                </div>
              </div>
              <span className="text-slate-300 group-hover:text-purple-500 transition-all group-hover:translate-x-1 text-sm ml-auto sm:ml-0">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
