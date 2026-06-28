"use client";
import { useReveal } from "@/hooks/useReveal";
import { LuGithub, LuRocket, LuGlobe } from "react-icons/lu";

export default function Contributing() {
  const ref = useReveal();

  return (
    <section className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid-dark absolute inset-0 opacity-60 pointer-events-none" />

      {/* Radial tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — text */}
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">Open Source &amp; Commercial</p>
            <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-white leading-tight stagger-1">
              Two ways<br />
              <span className="gradient-text">we build.</span>
            </h2>
            <p className="reveal text-zinc-400 mt-5 text-[15px] leading-relaxed stagger-2">
              We ship polished SaaS products with fair pricing, and we give back to the
              developer community with open source tools anyone can use, fork, and contribute to.
            </p>

            <div className="reveal stagger-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/HivarSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 font-bold px-6 py-3 rounded-xl hover:bg-zinc-100 hover:-translate-y-0.5 transition-all text-[14px] shadow-lg"
              >
                <LuGithub className="w-4 h-4" />
                Star on GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-violet-500 text-white font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all text-[14px]"
              >
                View Products →
              </a>
            </div>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-4">
            <div className="reveal reveal-right stagger-2 bg-zinc-900 border border-zinc-800 hover:border-violet-600/50 rounded-2xl p-6 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <LuRocket className="w-5 h-5 text-violet-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-white mb-1.5">Commercial Products</h3>
                  <p className="text-zinc-500 text-[13.5px] leading-relaxed">
                    Polished SaaS applications with transparent pricing. No bloat,
                    no enterprise lock-in — just software that works.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right stagger-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-600/50 rounded-2xl p-6 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <LuGlobe className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-white mb-1.5">Open Source</h3>
                  <p className="text-zinc-500 text-[13.5px] leading-relaxed">
                    Developer tools and utilities released freely. Learn from the code,
                    fork it, and contribute back — the community makes it better.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right stagger-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3.5">Ways to Contribute</p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {["Fix bugs", "Improve docs", "Suggest features", "Write code"].map((way) => (
                  <div key={way} className="flex items-center gap-2 text-[13px] text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" aria-hidden="true" />
                    {way}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
