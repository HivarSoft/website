"use client";
import { LuCode, LuCloud, LuBrainCircuit, LuGitBranch } from "react-icons/lu";
import { LuCircleCheck } from "react-icons/lu";
import type { IconType } from "react-icons";

const services: { Icon: IconType; title: string; color: string; glow: string; items: string[] }[] = [
  {
    Icon: LuCode,
    title: "Software Development",
    color: "from-purple-500 to-violet-600",
    glow: "hover:shadow-purple-500/20",
    items: ["Web Applications", "SaaS Platforms", "Enterprise Solutions", "API Development", "Custom Software"],
  },
  {
    Icon: LuCloud,
    title: "Cloud & DevOps",
    color: "from-blue-500 to-cyan-600",
    glow: "hover:shadow-blue-500/20",
    items: ["Docker & Kubernetes", "CI/CD Automation", "Cloud Infrastructure", "Self-Hosted Solutions"],
  },
  {
    Icon: LuBrainCircuit,
    title: "AI & Automation",
    color: "from-pink-500 to-rose-600",
    glow: "hover:shadow-pink-500/20",
    items: ["AI-Powered Applications", "Workflow Automation", "Chatbots & Assistants", "Business Process Optimization"],
  },
  {
    Icon: LuGitBranch,
    title: "Open Source",
    color: "from-green-500 to-emerald-600",
    glow: "hover:shadow-green-500/20",
    items: ["Developer Tools", "Productivity Applications", "Community Projects", "Educational Resources"],
  },
];

const techStack = [
  "Next.js","React","Node.js","TypeScript","Python","Go",
  "PostgreSQL","Redis","Docker","Kubernetes","AWS","Vercel","TailwindCSS","GraphQL",
  "Next.js","React","Node.js","TypeScript","Python","Go",
  "PostgreSQL","Redis","Docker","Kubernetes","AWS","Vercel","TailwindCSS","GraphQL",
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 bg-slate-950 relative overflow-hidden">
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="svc-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <line x1="0" y1="0" x2="1400" y2="700" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" className="line-draw"/>
        <line x1="1400" y1="0" x2="0" y2="700" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2"/>
        <line x1="700" y1="0" x2="700" y2="700" stroke="#6d28d9" strokeWidth="0.5" strokeOpacity="0.25" className="line-draw-3"/>
        <path d="M0 0 L120 0 L120 20 M0 0 L0 120 L20 120" stroke="#a78bfa" strokeWidth="2" fill="none" className="line-draw" filter="url(#svc-glow)"/>
        <path d="M1400 0 L1280 0 L1280 20 M1400 0 L1400 120 L1380 120" stroke="#a78bfa" strokeWidth="2" fill="none" className="line-draw-2" filter="url(#svc-glow)"/>
        <path d="M0 700 L120 700 L120 680 M0 700 L0 580 L20 580" stroke="#a78bfa" strokeWidth="2" fill="none" className="line-draw-3" filter="url(#svc-glow)"/>
        <path d="M1400 700 L1280 700 L1280 680 M1400 700 L1400 580 L1380 580" stroke="#a78bfa" strokeWidth="2" fill="none" className="line-draw" filter="url(#svc-glow)"/>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">What We Do</p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white stagger-1">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="reveal text-slate-400 mt-4 max-w-xl mx-auto stagger-2 text-sm sm:text-base">
            From concept to deployment — we cover the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 md:mb-20">
          {services.map(({ Icon, title, color, glow, items }, i) => (
            <div key={title}
              className={`reveal stagger-${i+1} group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all card-glow hover:shadow-xl ${glow}`}>
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ animation: `float ${3.5 + i * 0.4}s ease-in-out ${i * 0.5}s infinite` }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    <LuCircleCheck className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal stagger-5">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">Technologies We Love</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none"/>
            <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none"/>
            <div className="flex gap-3 scroll-track w-max py-1">
              {techStack.map((tech, i) => (
                <span key={`${tech}-${i}`}
                  className="shrink-0 bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:border-purple-500 hover:text-purple-300 transition-colors cursor-default">
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
