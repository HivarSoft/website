import Image from "next/image";

/* Floating particle positions — deterministic, no random */
const PARTICLES = [
  { x: "15%", y: "20%", size: 4, dur: "6s",  delay: "0s",   color: "#a78bfa" },
  { x: "80%", y: "15%", size: 3, dur: "8s",  delay: "1s",   color: "#ec4899" },
  { x: "70%", y: "70%", size: 5, dur: "7s",  delay: "2s",   color: "#a78bfa" },
  { x: "25%", y: "75%", size: 3, dur: "9s",  delay: "0.5s", color: "#f97316" },
  { x: "50%", y: "10%", size: 4, dur: "5s",  delay: "1.5s", color: "#ec4899" },
  { x: "90%", y: "50%", size: 3, dur: "10s", delay: "3s",   color: "#a78bfa" },
  { x: "10%", y: "50%", size: 2, dur: "7s",  delay: "2.5s", color: "#f97316" },
  { x: "60%", y: "85%", size: 3, dur: "6s",  delay: "4s",   color: "#ec4899" },
  { x: "40%", y: "30%", size: 2, dur: "8s",  delay: "1s",   color: "#a78bfa" },
  { x: "85%", y: "80%", size: 4, dur: "9s",  delay: "0s",   color: "#f97316" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#050816] text-white flex items-center"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── Animated SVG circuit background ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="rg1" cx="20%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rg2" cx="80%" cy="20%" r="40%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rg3" cx="60%" cy="80%" r="35%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Gradient orbs */}
        <rect width="100%" height="100%" fill="url(#rg1)" />
        <rect width="100%" height="100%" fill="url(#rg2)" />
        <rect width="100%" height="100%" fill="url(#rg3)" />

        {/* Circuit lines — drawn on load */}
        <path d="M -50 300 L 200 300 L 260 240 L 600 240 L 660 300 L 900 300 L 960 360 L 1400 360"
          fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.6" filter="url(#glow)" className="line-draw" />
        <path d="M 100 100 L 350 100 L 410 160 L 700 160 L 760 100 L 1100 100"
          fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.5" filter="url(#glow)" className="line-draw-2" />
        <path d="M 0 500 L 150 500 L 210 560 L 500 560 L 560 500 L 850 500 L 910 440 L 1400 440"
          fill="none" stroke="#6d28d9" strokeWidth="1" strokeOpacity="0.4" className="line-draw-3" />
        <path d="M 800 50 L 900 150 L 900 350 L 1000 450 L 1200 450 L 1300 350 L 1400 350"
          fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.5" filter="url(#glow)" className="line-draw-2" />

        {/* Flowing data pulses — infinite */}
        <path d="M -50 300 L 200 300 L 260 240 L 600 240 L 660 300 L 900 300 L 960 360 L 1400 360"
          fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeOpacity="0.9" filter="url(#glow-strong)" className="line-flow" />
        <path d="M 100 100 L 350 100 L 410 160 L 700 160 L 760 100 L 1100 100"
          fill="none" stroke="#e879f9" strokeWidth="2" strokeOpacity="0.7" filter="url(#glow)"
          style={{ strokeDasharray: "15 220", animationDelay: "1.2s" }} className="line-flow" />
        <path d="M 0 500 L 150 500 L 210 560 L 500 560 L 560 500 L 850 500 L 910 440 L 1400 440"
          fill="none" stroke="#818cf8" strokeWidth="2" strokeOpacity="0.6" filter="url(#glow)"
          style={{ strokeDasharray: "12 240", animationDelay: "2.4s" }} className="line-flow" />

        {/* Junction nodes — twinkling */}
        {[
          [200,300],[260,240],[600,240],[660,300],[900,300],[960,360],
          [350,100],[410,160],[700,160],[760,100],
          [150,500],[210,560],[500,560],[560,500],[850,500],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#a78bfa" fillOpacity="0.85" filter="url(#glow)"
            style={{ animation: `twinkle ${1.8+(i%4)*0.5}s ease-in-out ${i*0.18}s infinite` }} />
        ))}

        {/* Dot grid */}
        {Array.from({length:10}).map((_,row) =>
          Array.from({length:18}).map((_,col) => (
            <circle key={`${row}-${col}`} cx={col*80+40} cy={row*60+30} r="1" fill="#6d28d9" fillOpacity="0.18" />
          ))
        )}

        {/* Hexagon accent */}
        <g opacity="0.1" transform="translate(1050,30)">
          {[0,1,2,3].map(row=>[0,1,2].map(col=>{
            const x=col*52+(row%2)*26, y=row*45;
            return <polygon key={`${row}-${col}`}
              points={`${x},${y+15} ${x+26},${y} ${x+52},${y+15} ${x+52},${y+45} ${x+26},${y+60} ${x},${y+45}`}
              fill="none" stroke="#a78bfa" strokeWidth="1" />;
          }))}
        </g>
      </svg>

      {/* ── Floating particles ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size * 2,
              height: p.size * 2,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animation: `particle-${(i % 3) + 1} ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Orbiting rings around logo ── */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ top: "calc(50% - 140px)" }}
      >
        {/* Outer ring */}
        <div className="absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20"
          style={{ animation: "pulse-ring 3s ease-out infinite" }} />
        <div className="absolute w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/15"
          style={{ animation: "pulse-ring 3s ease-out 1.5s infinite" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center text-center gap-5 sm:gap-6 z-10">

        {/* Logo with pulse glow */}
        <div
          className="rounded-2xl p-1"
          style={{ animation: "pulse-glow 3s ease-in-out infinite, fade-up 0.6s ease forwards" }}
        >
          <Image src="/Logo.png" alt="HivarSoft" width={72} height={72} className="rounded-xl" priority />
        </div>

        {/* Shimmer badge */}
        <div
          className="shimmer inline-flex items-center gap-2 border border-purple-400/30 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-purple-200 text-center max-w-xs sm:max-w-none"
          style={{ animation: "fade-up 0.6s ease 0.15s both" }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 inline-block"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
          Software Products &bull; Open Source &bull; Innovation &bull; Community
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl"
          style={{ animation: "fade-up 0.7s ease 0.25s both" }}
        >
          Building{" "}
          <span className="gradient-text">Modern Software</span>
          <br />That{" "}
          <span className="gradient-text">Actually Works</span>
        </h1>

        {/* Sub */}
        <p
          className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed px-2"
          style={{ animation: "fade-up 0.7s ease 0.4s both" }}
        >
          From proprietary SaaS products to open source tools —
          we build software that solves real problems, at prices that make sense.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto px-4 sm:px-0"
          style={{ animation: "fade-up 0.7s ease 0.55s both" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-purple-500/40 hover:shadow-xl hover:-translate-y-1"
          >
            🚀 View Projects
            <span className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-purple-400/50 transition-all" />
          </a>
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-1"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator — pinned bottom */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs z-10"
        style={{ animation: "fade-in 1s ease 1.4s both" }}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true"
          style={{ animation: "float 2s ease-in-out infinite" }}>
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="#6d28d9" strokeWidth="1.5" strokeOpacity="0.5"/>
          <rect x="9" y="5" width="2" height="6" rx="1" fill="#a78bfa"
            style={{ animation: "float 2s ease-in-out infinite" }}/>
        </svg>
      </div>
    </section>
  );
}
