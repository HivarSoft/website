import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white min-h-screen flex items-center">

      {/* ── Animated SVG circuit / line background ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
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
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Glow filter for lines */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Gradient orbs */}
        <rect width="100%" height="100%" fill="url(#rg1)" />
        <rect width="100%" height="100%" fill="url(#rg2)" />
        <rect width="100%" height="100%" fill="url(#rg3)" />

        {/* ── Main circuit lines ── */}
        {/* Horizontal spine */}
        <path
          d="M -50 300 L 200 300 L 260 240 L 600 240 L 660 300 L 900 300 L 960 360 L 1400 360"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          filter="url(#glow)"
          className="line-draw"
        />
        {/* Top arc */}
        <path
          d="M 100 100 L 350 100 L 410 160 L 700 160 L 760 100 L 1100 100"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          strokeOpacity="0.5"
          filter="url(#glow)"
          className="line-draw-2"
        />
        {/* Bottom arc */}
        <path
          d="M 0 500 L 150 500 L 210 560 L 500 560 L 560 500 L 850 500 L 910 440 L 1400 440"
          fill="none"
          stroke="#6d28d9"
          strokeWidth="1"
          strokeOpacity="0.4"
          className="line-draw-3"
        />
        {/* Right diagonal */}
        <path
          d="M 800 50 L 900 150 L 900 350 L 1000 450 L 1200 450 L 1300 350 L 1400 350"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          filter="url(#glow)"
          className="line-draw-2"
        />
        {/* Left diagonal */}
        <path
          d="M -50 400 L 100 550 L 100 650 L 200 750"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="1"
          strokeOpacity="0.35"
          className="line-draw-3"
        />
        {/* Center vertical */}
        <path
          d="M 700 -50 L 700 80 L 640 140 L 640 200"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1"
          strokeOpacity="0.4"
          className="line-draw"
        />

        {/* ── Flowing data pulses (animated dashes) ── */}
        <path
          d="M -50 300 L 200 300 L 260 240 L 600 240 L 660 300 L 900 300 L 960 360 L 1400 360"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="2"
          strokeOpacity="0.8"
          filter="url(#glow-strong)"
          className="line-flow"
        />
        <path
          d="M 100 100 L 350 100 L 410 160 L 700 160 L 760 100 L 1100 100"
          fill="none"
          stroke="#e879f9"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          filter="url(#glow)"
          style={{ strokeDasharray: "15 220", animationDelay: "1s" }}
          className="line-flow"
        />

        {/* ── Circuit nodes (dots at junctions) ── */}
        {[
          [200, 300], [260, 240], [600, 240], [660, 300], [900, 300], [960, 360],
          [350, 100], [410, 160], [700, 160], [760, 100],
          [150, 500], [210, 560], [500, 560], [560, 500], [850, 500],
          [900, 150], [900, 350], [1000, 450],
          [700, 80], [640, 140],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#7c3aed"
            fillOpacity="0.8"
            filter="url(#glow)"
            style={{
              animation: `twinkle ${2 + (i % 4) * 0.5}s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}

        {/* ── Small grid dots ── */}
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 80 + 40}
              cy={row * 60 + 30}
              r="1"
              fill="#6d28d9"
              fillOpacity="0.2"
            />
          ))
        )}

        {/* ── Hexagon grid accent (top right) ── */}
        <g opacity="0.12" transform="translate(1050, 30)">
          {[0,1,2,3].map((row) =>
            [0,1,2].map((col) => {
              const x = col * 52 + (row % 2) * 26;
              const y = row * 45;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x},${y+15} ${x+26},${y} ${x+52},${y+15} ${x+52},${y+45} ${x+26},${y+60} ${x},${y+45}`}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1"
                />
              );
            })
          )}
        </g>
      </svg>

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col items-center text-center gap-8 z-10">

        {/* Logo with pulse glow */}
        <div
          className="rounded-2xl p-1"
          style={{ animation: "pulse-glow 3s ease-in-out infinite, fade-up 0.6s ease forwards" }}
        >
          <Image
            src="/Logo.png"
            alt="HivarSoft"
            width={72}
            height={72}
            className="rounded-xl"
            priority
          />
        </div>

        {/* Badge */}
        <div
          className="shimmer inline-flex items-center gap-2 border border-purple-400/30 rounded-full px-5 py-2 text-sm text-purple-200"
          style={{ animation: "fade-up 0.6s ease 0.1s both" }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
          Open Source &bull; Innovation &bull; Simplicity &bull; Community
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl"
          style={{ animation: "fade-up 0.7s ease 0.2s both" }}
        >
          Building{" "}
          <span className="gradient-text">Affordable</span>
          {" "}&amp;{" "}
          <span className="gradient-text">Open Source</span>
          <br />Software for Everyone
        </h1>

        {/* Sub */}
        <p
          className="text-xl text-slate-300 max-w-2xl leading-relaxed"
          style={{ animation: "fade-up 0.7s ease 0.35s both" }}
        >
          We believe powerful software should be accessible, transparent, and
          affordable — for everyone.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          style={{ animation: "fade-up 0.7s ease 0.5s both" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-purple-500/40 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>🚀</span> View Projects
            <span className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-purple-400/50 transition-all" />
          </a>
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
          >
            ⭐ Star on GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-2 mt-8 text-slate-500 text-xs"
          style={{ animation: "fade-in 1s ease 1.2s both" }}
        >
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-linear-to-b from-slate-500 to-transparent" style={{ animation: "float 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
