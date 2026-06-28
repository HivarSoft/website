"use client";
import { useReveal } from "@/hooks/useReveal";

const values = [
  { icon: "✅", label: "Affordable Solutions",         color: "from-green-500 to-emerald-500" },
  { icon: "🌐", label: "Open Source Innovation",       color: "from-blue-500 to-cyan-500" },
  { icon: "⚙️", label: "Modern Technologies",          color: "from-purple-500 to-violet-500" },
  { icon: "🛡️", label: "Reliable Support",             color: "from-orange-500 to-amber-500" },
  { icon: "🤝", label: "Community-Driven Development", color: "from-pink-500 to-rose-500" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Background SVG — animated connection graph */}
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 w-1/2 h-full opacity-40 pointer-events-none"
        viewBox="0 0 600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="about-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Web of lines */}
        <line x1="300" y1="350" x2="100" y2="150" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" className="line-draw" filter="url(#about-glow)" />
        <line x1="300" y1="350" x2="500" y2="150" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" className="line-draw-2" filter="url(#about-glow)" />
        <line x1="300" y1="350" x2="100" y2="550" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4" className="line-draw" filter="url(#about-glow)" />
        <line x1="300" y1="350" x2="500" y2="550" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4" className="line-draw-2" filter="url(#about-glow)" />
        <line x1="300" y1="350" x2="550" y2="350" stroke="#6d28d9" strokeWidth="1.5" strokeOpacity="0.5" className="line-draw-3" filter="url(#about-glow)" />
        <line x1="100" y1="150" x2="500" y2="150" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2" />
        <line x1="100" y1="550" x2="500" y2="550" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2" />
        <line x1="100" y1="150" x2="100" y2="550" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25" className="line-draw-3" />
        <line x1="500" y1="150" x2="500" y2="550" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.25" className="line-draw-3" />
        {/* Nodes */}
        {[[300,350],[100,150],[500,150],[100,550],[500,550],[550,350]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r={i===0?8:5} fill="#7c3aed" fillOpacity={i===0?0.7:0.4}
            filter="url(#about-glow)"
            style={{ animation: `twinkle ${2+i*0.3}s ease-in-out ${i*0.2}s infinite` }}
          />
        ))}
        {/* Flow pulse */}
        <line x1="300" y1="350" x2="100" y2="150" stroke="#c4b5fd" strokeWidth="2" strokeOpacity="0.7"
          className="line-flow" filter="url(#about-glow)" />
        <line x1="300" y1="350" x2="500" y2="550" stroke="#e879f9" strokeWidth="2" strokeOpacity="0.5"
          style={{ strokeDasharray: "10 240", animationDelay: "0.8s" }} className="line-flow" filter="url(#about-glow)" />
      </svg>

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            About Us
          </p>
          <h2 className="reveal text-4xl md:text-5xl font-bold text-slate-900 mb-6 stagger-1">
            What is{" "}
            <span className="relative">
              <span className="gradient-text">HivarSoft?</span>
              <svg aria-hidden="true" className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                <path d="M0 5 Q100 0 200 5" stroke="#7c3aed" strokeWidth="2" fill="none"
                  strokeDasharray="200" strokeDashoffset="200"
                  style={{ animation: "draw 1.5s ease 0.8s forwards" }} />
              </svg>
            </span>
          </h2>
          <p className="reveal text-lg text-slate-600 leading-relaxed stagger-2">
            HivarSoft is a software company focused on creating modern,
            scalable, and affordable software solutions for businesses,
            startups, and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Mission */}
          <div>
            <div className="reveal reveal-left stagger-1 mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Our Mission
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                High-quality software, without enterprise-level costs
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We build products, tools, and services that empower developers,
                businesses, and communities through open-source technology. No
                gatekeeping, no overpriced licenses.
              </p>
              <a
                href="https://github.com/HivarSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
              >
                Explore our repositories
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Stat pills */}
            <div className="reveal reveal-left stagger-2 flex flex-wrap gap-3">
              {[
                { n: "2+", label: "Live Products" },
                { n: "100%", label: "Open Source" },
                { n: "∞", label: "Community" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 card-glow">
                  <span className="text-2xl font-extrabold gradient-text">{s.n}</span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div>
            <div className="reveal reveal-right stagger-1 mb-4">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Our Vision
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                A trusted partner for every team
              </h3>
            </div>
            <ul className="space-y-3">
              {values.map((v, i) => (
                <li
                  key={v.label}
                  className={`reveal reveal-right stagger-${i + 2} flex items-center gap-4 bg-white border border-slate-100 rounded-xl px-4 py-3.5 card-glow`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${v.color} flex items-center justify-center text-base shrink-0 shadow-sm`}>
                    {v.icon}
                  </div>
                  <span className="font-medium text-slate-800">{v.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
