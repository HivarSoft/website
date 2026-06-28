"use client";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: "💻",
    title: "Software Development",
    color: "from-purple-500 to-violet-600",
    glow: "group-hover:shadow-purple-500/20",
    items: ["Web Applications", "SaaS Platforms", "Enterprise Solutions", "API Development", "Custom Software"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    color: "from-blue-500 to-cyan-600",
    glow: "group-hover:shadow-blue-500/20",
    items: ["Docker & Kubernetes", "CI/CD Automation", "Cloud Infrastructure", "Self-Hosted Solutions"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    color: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/20",
    items: ["AI-Powered Applications", "Workflow Automation", "Chatbots & Assistants", "Business Process Optimization"],
  },
  {
    icon: "🌐",
    title: "Open Source",
    color: "from-green-500 to-emerald-600",
    glow: "group-hover:shadow-green-500/20",
    items: ["Developer Tools", "Productivity Applications", "Community Projects", "Educational Resources"],
  },
];

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "Python",
  "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes",
  "AWS", "Vercel", "TailwindCSS", "GraphQL",
  // duplicate for infinite scroll
  "Next.js", "React", "Node.js", "TypeScript", "Python",
  "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes",
  "AWS", "Vercel", "TailwindCSS", "GraphQL",
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Background SVG lines */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="svc-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="0" y1="0" x2="1400" y2="700" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" className="line-draw" />
        <line x1="1400" y1="0" x2="0" y2="700" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2" />
        <line x1="700" y1="0" x2="700" y2="700" stroke="#6d28d9" strokeWidth="1" strokeOpacity="0.2" className="line-draw-3" />
        <line x1="0" y1="350" x2="1400" y2="350" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.2" className="line-draw" />
        {/* Corner accents */}
        <path d="M0 0 L120 0 L120 20 M0 0 L0 120 L20 120" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="line-draw" filter="url(#svc-glow)" />
        <path d="M1400 0 L1280 0 L1280 20 M1400 0 L1400 120 L1380 120" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="line-draw-2" filter="url(#svc-glow)" />
        <path d="M0 700 L120 700 L120 680 M0 700 L0 580 L20 580" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="line-draw-3" filter="url(#svc-glow)" />
        <path d="M1400 700 L1280 700 L1280 680 M1400 700 L1400 580 L1380 580" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="line-draw" filter="url(#svc-glow)" />
      </svg>

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            What We Do
          </p>
          <h2 className="reveal text-4xl md:text-5xl font-bold text-white stagger-1">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="reveal text-slate-400 mt-4 max-w-xl mx-auto stagger-2">
            From concept to deployment — we cover the full stack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal stagger-${i + 1} group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all card-glow hover:shadow-xl ${s.glow}`}
            >
              {/* Icon with gradient bg */}
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    <svg className="w-3 h-3 text-purple-500 shrink-0" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scrolling tech badge strip */}
        <div className="reveal stagger-5">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Technologies We Love
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 scroll-track w-max">
              {techStack.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:border-purple-500 hover:text-purple-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
