"use client";
import { useReveal } from "@/hooks/useReveal";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";

const links: { Icon: IconType; label: string; href: string; color: string; bg: string }[] = [
  {
    Icon: LuLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/hivarsoft",
    color: "from-blue-500 to-blue-600",
    bg: "hover:bg-blue-50 hover:border-blue-200",
  },
  {
    Icon: LuGithub,
    label: "GitHub",
    href: "https://github.com/HivarSoft",
    color: "from-slate-600 to-slate-800",
    bg: "hover:bg-slate-50 hover:border-slate-300",
  },
  {
    Icon: LuMail,
    label: "Email",
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
                <link.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
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
