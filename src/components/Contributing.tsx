"use client";
import { useReveal } from "@/hooks/useReveal";

const ways = [
  { icon: "🐛", text: "Fixing bugs",               color: "from-red-500 to-orange-500" },
  { icon: "📖", text: "Improving documentation",   color: "from-blue-500 to-cyan-500" },
  { icon: "💡", text: "Suggesting features",        color: "from-yellow-500 to-amber-500" },
  { icon: "💻", text: "Contributing code",          color: "from-purple-500 to-violet-500" },
];

export default function Contributing() {
  const ref = useReveal();

  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Animated SVG background — large circuit ring */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="contrib-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="contrib-rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#contrib-rg)" />

        {/* Outer ring */}
        <ellipse cx="700" cy="300" rx="500" ry="220" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25"
          strokeDasharray="1600" strokeDashoffset="1600"
          style={{ animation: "draw 4s cubic-bezier(0.4,0,0.2,1) 0.3s forwards" }} />
        {/* Inner ring */}
        <ellipse cx="700" cy="300" rx="350" ry="150" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2"
          strokeDasharray="1200" strokeDashoffset="1200"
          style={{ animation: "draw 3.5s cubic-bezier(0.4,0,0.2,1) 0.6s forwards" }} />

        {/* Radial spokes */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 700 + 350 * Math.cos(rad);
          const y1 = 300 + 150 * Math.sin(rad);
          const x2 = 700 + 500 * Math.cos(rad);
          const y2 = 300 + 220 * Math.sin(rad);
          return (
            <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3"
              strokeDasharray="100" strokeDashoffset="100"
              filter="url(#contrib-glow)"
              style={{ animation: `draw 1.5s ease ${0.8 + i * 0.1}s forwards` }}
            />
          );
        })}

        {/* Node dots on ring */}
        {[0,60,120,180,240,300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle key={angle}
              cx={700 + 500 * Math.cos(rad)}
              cy={300 + 220 * Math.sin(rad)}
              r="4" fill="#a78bfa" fillOpacity="0.7"
              filter="url(#contrib-glow)"
              style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }}
            />
          );
        })}

        {/* Flow pulses on ring */}
        <ellipse cx="700" cy="300" rx="500" ry="220" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeOpacity="0.6"
          filter="url(#contrib-glow)"
          style={{ strokeDasharray: "30 1570", animation: "flow 4s linear infinite" }} />
      </svg>

      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="reveal inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-4xl mb-8 mx-auto"
          style={{ animation: "float 4s ease-in-out infinite" }}>
          🤝
        </div>

        <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3 stagger-1">
          Open Source
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-bold text-white mb-6 stagger-2">
          Built with the <span className="gradient-text">Community</span>
        </h2>
        <p className="reveal text-lg text-slate-400 max-w-2xl mx-auto mb-12 stagger-3">
          We welcome contributions from developers around the world. Many of our
          tools and projects are open source — learn from them, adapt them, build
          upon them.
        </p>

        <div className="reveal flex flex-wrap justify-center gap-4 mb-12 stagger-4">
          {ways.map((w) => (
            <div key={w.text}
              className="group flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-purple-500 rounded-xl px-5 py-3.5 transition-all hover:-translate-y-1 card-glow"
            >
              <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${w.color} flex items-center justify-center text-sm shrink-0 group-hover:scale-110 transition-transform`}>
                {w.icon}
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{w.text}</span>
            </div>
          ))}
        </div>

        <p className="reveal text-slate-500 mb-8 stagger-5">
          Your contributions help make software better for everyone.
        </p>

        <div className="reveal stagger-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold px-8 py-3.5 rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            ⭐ Star our repositories
          </a>
        </div>
      </div>
    </section>
  );
}
