import Image from "next/image"; 

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-zinc-950 text-white"
      style={{ minHeight: "calc(100dvh - 64px)" }}
    >

      {/* Dot grid on top of aurora */}
      <div
        aria-hidden="true"
        className="dot-grid-dark absolute inset-0 pointer-events-none opacity-60"
      />

      {/* Top border line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-16 sm:pt-28 sm:pb-24 flex flex-col items-center text-center gap-5 sm:gap-6">

        {/* Logo */}
        <div style={{ animation: "fade-up 0.5s ease forwards" }}>
          <div className="inline-flex p-2.5 rounded-2xl bg-white/8 border border-white/12">
            <Image
              src="/Logo.png"
              alt="HivarSoft"
              width={44}
              height={44}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Badge — wraps gracefully on small screens */}
        <div
          className="shimmer-badge inline-flex items-center gap-2 border border-violet-400/25 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-violet-300 max-w-[90vw] text-center leading-snug"
          style={{ animation: "fade-up 0.5s ease 0.1s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" aria-hidden="true" />
          <span>Software Products · Open Source · Built to Last</span>
        </div>

        {/* Headline */}
        <h1
          className="text-[2rem] sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] w-full"
          style={{ animation: "fade-up 0.55s ease 0.18s both" }}
        >
          Building software
          <br />
          <span className="gradient-text">that actually works.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-[15px] sm:text-lg text-zinc-400 max-w-md sm:max-w-xl leading-relaxed"
          style={{ animation: "fade-up 0.55s ease 0.26s both" }}
        >
          From proprietary SaaS to open source tools — we ship software that
          solves real problems, at prices that make sense.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1"
          style={{ animation: "fade-up 0.55s ease 0.34s both" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 text-[15px]"
          >
            View Products
          </a>
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/6 hover:bg-white/12 border border-white/14 hover:border-white/28 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5 text-[15px]"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            Star on GitHub
          </a>
        </div>

        {/* Stats strip */}
        {/* <div
          className="pt-4 sm:pt-6 flex flex-col items-center gap-3"
          style={{ animation: "fade-in 0.6s ease 0.7s both" }}
        >
          <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
            Trusted by developers worldwide
          </p>
          <div className="flex items-center gap-8 sm:gap-10">
            {[
              { label: "2+",  sub: "Live Products" },
              { label: "OSS", sub: "Open Source"   },
              { label: "∞",   sub: "Community"     },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white">{s.label}</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-500 font-medium mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(9,9,11,0.6))" }}
      />

      {/* Scroll indicator — desktop only */}
      <div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-600"
        style={{ animation: "fade-in 0.6s ease 1.2s both" }}
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true" className="opacity-50">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="5" width="2" height="6" rx="1" fill="currentColor"
            style={{ animation: "float 1.8s ease-in-out infinite" }} />
        </svg>
      </div>
    </section>
  );
}
