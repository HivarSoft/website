"use client";
import { LuCode, LuCloud, LuBrainCircuit, LuGitBranch, LuCircleCheck } from "react-icons/lu";
import type { IconType } from "react-icons";

const services: {
  Icon: IconType;
  title: string;
  description: string;
  items: string[];
  accent: string;
  iconBg: string;
}[] = [
  {
    Icon: LuCode,
    title: "Software Development",
    description: "Full-stack applications built with modern frameworks — from idea to production.",
    accent: "group-hover:border-violet-200",
    iconBg: "bg-violet-50 text-violet-600 border-violet-100",
    items: ["Web Applications", "SaaS Platforms", "Enterprise Solutions", "API Development"],
  },
  {
    Icon: LuCloud,
    title: "Cloud & DevOps",
    description: "Infrastructure that scales. CI/CD, containers, and cloud-native deployments.",
    accent: "group-hover:border-blue-200",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    items: ["Docker & Kubernetes", "CI/CD Automation", "Cloud Infrastructure", "Self-Hosted Solutions"],
  },
  {
    Icon: LuBrainCircuit,
    title: "AI & Automation",
    description: "Intelligent systems that work for you — from AI apps to workflow automation.",
    accent: "group-hover:border-pink-200",
    iconBg: "bg-pink-50 text-pink-600 border-pink-100",
    items: ["AI-Powered Applications", "Workflow Automation", "Chatbots & Assistants", "Process Optimization"],
  },
  {
    Icon: LuGitBranch,
    title: "Open Source",
    description: "Developer tools and utilities released to the community — free and open.",
    accent: "group-hover:border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    items: ["Developer Tools", "Productivity Apps", "Community Projects", "Educational Resources"],
  },
];

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "Python", "Go",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Vercel", "TailwindCSS", "GraphQL",
  "Next.js", "React", "Node.js", "TypeScript", "Python", "Go",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Vercel", "TailwindCSS", "GraphQL",
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid-dark absolute inset-0 opacity-70 pointer-events-none" />

      {/* Radial tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14 md:mb-20">
          <p className="reveal text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">What We Do</p>
          <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-white leading-tight stagger-1">
            Full-stack,<br />
            <span className="gradient-text">full-service.</span>
          </h2>
          <p className="reveal text-zinc-400 mt-4 text-[15px] leading-relaxed stagger-2">
            From concept to deployment — we handle the whole stack so you don&apos;t have to.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20">
          {services.map(({ Icon, title, description, items, accent, iconBg }, i) => (
            <div
              key={title}
              className={`reveal stagger-${i + 1} group bg-zinc-900 border border-zinc-800 ${accent} rounded-2xl p-6 card-lift`}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{title}</h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed mb-4">{description}</p>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12.5px] text-zinc-400">
                    <LuCircleCheck className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech strip */}
        <div className="reveal stagger-5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-600 mb-5">Technologies We Love</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="flex gap-2.5 scroll-track w-max py-1">
              {techStack.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[12.5px] font-medium px-4 py-2 rounded-full hover:border-violet-600 hover:text-violet-300 transition-colors cursor-default"
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
