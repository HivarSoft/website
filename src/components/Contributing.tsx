"use client";
import { useReveal } from "@/hooks/useReveal";
import { LuBug, LuBookOpen, LuLightbulb, LuCode, LuRocket, LuGlobe, LuGithub } from "react-icons/lu";
import type { IconType } from "react-icons";

const ways: { Icon: IconType; text: string; color: string }[] = [
  { Icon: LuBug,       text: "Fixing bugs",             color: "from-red-500 to-orange-500" },
  { Icon: LuBookOpen,  text: "Improving documentation", color: "from-blue-500 to-cyan-500" },
  { Icon: LuLightbulb, text: "Suggesting features",     color: "from-yellow-500 to-amber-500" },
  { Icon: LuCode,     text: "Contributing code",       color: "from-purple-500 to-violet-500" },
];

export default function Contributing() {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-28 bg-slate-950 relative overflow-hidden">
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="contrib-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="contrib-rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#contrib-rg)" />
        <ellipse cx="700" cy="300" rx="500" ry="220" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"
          strokeDasharray="1600" strokeDashoffset="1600"
          style={{ animation: "draw 4s cubic-bezier(0.4,0,0.2,1) 0.3s forwards" }} />
        <ellipse cx="700" cy="300" rx="350" ry="150" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2"
          strokeDasharray="1200" strokeDashoffset="1200"
          style={{ animation: "draw 3.5s cubic-bezier(0.4,0,0.2,1) 0.6s forwards" }} />
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 700 + 350 * Math.cos(rad), y1 = 300 + 150 * Math.sin(rad);
          const x2 = 700 + 500 * Math.cos(rad), y2 = 300 + 220 * Math.sin(rad);
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3"
            strokeDasharray="100" strokeDashoffset="100"
            filter="url(#contrib-glow)"
            style={{ animation: `draw 1.5s ease ${0.8 + i * 0.1}s forwards` }} />;
        })}
        {[0,60,120,180,240,300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return <circle key={angle} cx={700 + 500 * Math.cos(rad)} cy={300 + 220 * Math.sin(rad)}
            r="4" fill="#a78bfa" fillOpacity="0.7" filter="url(#contrib-glow)"
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }} />;
        })}
        <ellipse cx="700" cy="300" rx="500" ry="220" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeOpacity="0.6"
          filter="url(#contrib-glow)" style={{ strokeDasharray: "30 1570", animation: "flow 4s linear infinite" }} />
      </svg>

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Animated icon container */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 mx-auto"
            style={{ animation: "float 4s ease-in-out infinite, pulse-glow 4s ease-in-out infinite" }}>
            <LuGlobe className="w-8 h-8 sm:w-9 sm:h-9 text-purple-400" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ animation: "orbit 4s linear infinite" }} className="w-3 h-3 rounded-full bg-purple-400 shadow-lg" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ animation: "orbit-reverse 6s linear infinite" }} className="w-2 h-2 rounded-full bg-pink-400 shadow-lg" />
          </div>
        </div>

        <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3 stagger-1">
          Open Source &amp; Commercial
        </p>
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 stagger-2">
          Two Ways We <span className="gradient-text">Build</span>
        </h2>
        <p className="reveal text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 stagger-3">
          We ship <strong className="text-white">proprietary SaaS products</strong> with pricing that makes sense,
          and we give back with <strong className="text-white">open source tools</strong> the community can use, adapt, and contribute to.
        </p>

        <div className="reveal stagger-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-8 sm:mb-12 text-left">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-purple-500 transition-all card-glow">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3"
              style={{ animation: "float 3.5s ease-in-out infinite" }}>
              <LuRocket className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">Commercial Products</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Polished SaaS applications with fair, transparent pricing. No bloat, no enterprise lock-in — just software that works.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-purple-500 transition-all card-glow">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-3"
              style={{ animation: "float 4s ease-in-out 0.5s infinite" }}>
              <LuGlobe className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">Open Source</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Developer tools and utilities released freely. Learn from the code, fork it, contribute back — the community makes it better.
            </p>
          </div>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 stagger-5">
          {ways.map(({ Icon, text, color }) => (
            <div key={text} className="group flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-purple-500 rounded-xl px-5 py-3.5 transition-all hover:-translate-y-1 card-glow">
              <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{text}</span>
            </div>
          ))}
        </div>

        <p className="reveal text-slate-500 text-sm sm:text-base mb-6 sm:mb-8 stagger-6">
          Want to contribute to our open source projects?
        </p>

        <div className="reveal stagger-7 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/HivarSoft" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-slate-900 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto">
            <LuGithub className="w-5 h-5" />
            Star our repositories
          </a>
        </div>
      </div>
    </section>
  );
}
