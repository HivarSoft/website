"use client";
import { useReveal } from "@/hooks/useReveal";
import {
  LuFileText, LuFolderOpen, LuPenTool, LuSparkles,
  LuChartBarBig, LuUsers, LuFileCode2, LuGitBranch,
  LuTimer, LuCircleAlert, LuBuilding2, LuGitMerge,
} from "react-icons/lu";
import type { IconType } from "react-icons";

const notesFeatures: { Icon: IconType; title: string; description: string }[] = [
  { Icon: LuFileText,   title: "Rich Notes",      description: "Write, edit, and format notes with a clean, distraction-free editor that keeps your thoughts organised." },
  { Icon: LuFolderOpen, title: "Smart Folders",   description: "Group related notes into folders. Build any structure that matches the way you think." },
  { Icon: LuPenTool,    title: "Infinite Canvas", description: "Sketch diagrams, flowcharts, and wireframes right alongside your notes — no context switching." },
  { Icon: LuSparkles,   title: "AI Assistant",    description: "Ask questions, get summaries, and brainstorm ideas with a built-in AI chat that knows your notes." },
];

const gitStatsFeatures: { Icon: IconType; title: string; description: string }[] = [
  { Icon: LuChartBarBig,  title: "Activity Heatmaps",        description: "Visualize commit patterns by hour, day, and month. Spot peak productivity windows and identify burnout risks." },
  { Icon: LuUsers,       title: "Author Analytics",          description: "Deep-dive into per-author stats — commits, lines added/removed, active days, streaks, and peak hours." },
  { Icon: LuFileCode2,   title: "File & Language Breakdown", description: "See your codebase composition by file extension and language. Understand what your repo is made of." },
  { Icon: LuGitBranch,   title: "Branch & Multi-Platform",   description: "Switch branches instantly. Import from GitHub, GitLab, or Bitbucket — or upload your .git folder." },
  { Icon: LuTimer,       title: "Parameter Metrics",         description: "Engineering KPIs from git history: cycle time, coding time, PR size distribution, and code rework ratio." },
  { Icon: LuCircleAlert, title: "Bus Factor Analysis",       description: "Know your team's knowledge risk. See which files are owned by a single person." },
  { Icon: LuBuilding2,   title: "Team Organisations",        description: "Invite team members with granular permissions. Org-level dashboards across all repos." },
  { Icon: LuGitMerge,    title: "Stale Branch Detection",    description: "Automatically surface branches untouched for 30+ days. Keep your repo clean and your team focused." },
];

function FeatureCard({ Icon, title, description, delay }: { Icon: IconType; title: string; description: string; delay: number }) {
  return (
    <div
      className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200">
        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/80 group-hover:text-white transition-colors" />
      </div>
      <h4 className="font-bold text-white text-xs sm:text-sm mb-1 sm:mb-2">{title}</h4>
      <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{description}</p>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-16 md:py-28 bg-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">Our Products</p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 stagger-1">
            What We&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="reveal text-slate-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto stagger-2">
            Real tools, used by real people.
          </p>
        </div>

        {/* Notes AI */}
        <div className="reveal mb-10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-purple-100">
          <div className="relative overflow-hidden bg-[#2d1b69] px-4 sm:px-8 py-6 sm:py-10">
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
              <defs><filter id="notes-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
              <path d="M0 100 L200 60 L400 120 L600 40 L800 80" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.5" className="line-draw" filter="url(#notes-glow)" />
              <path d="M0 150 L150 120 L350 160 L550 100 L800 140" fill="none" stroke="#c4b5fd" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2" />
              {[200,400,600].map((x,i)=>(
                <circle key={i} cx={x} cy={i===0?60:i===1?120:40} r="4" fill="#a78bfa" fillOpacity="0.7" filter="url(#notes-glow)"
                  style={{ animation: `twinkle 2s ease-in-out ${i*0.4}s infinite` }} />
              ))}
            </svg>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-purple-300 mb-2">Project 01</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Notes AI</h3>
                <p className="text-purple-200 text-sm sm:text-base leading-relaxed">
                  Capture ideas, draw your thoughts, and stay organised. Rich text, infinite canvas sketching, smart folders, and an AI assistant — all in one place.
                </p>
              </div>
              <a href="https://notes-ai.hivarsoft.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 sm:px-5 py-2.5 rounded-xl hover:bg-purple-50 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap self-start shrink-0">
                Launch App →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#1e1035]">
            {notesFeatures.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 60} />)}
          </div>
        </div>

        {/* GitStats */}
        <div className="reveal stagger-2 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200">
          <div className="relative overflow-hidden bg-[#0f172a] px-4 sm:px-8 py-6 sm:py-10">
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
              <defs><filter id="git-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
              <path d="M0 80 L100 50 L300 90 L500 30 L700 70 L800 50" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" className="line-draw" filter="url(#git-glow)" />
              <path d="M0 140 L200 100 L400 150 L600 80 L800 120" fill="none" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.3" className="line-draw-2" />
              {[100,300,500,700].map((x,i)=>(
                <circle key={i} cx={x} cy={i===0?50:i===1?90:i===2?30:70} r="3.5" fill="#38bdf8" fillOpacity="0.7" filter="url(#git-glow)"
                  style={{ animation: `twinkle 2.5s ease-in-out ${i*0.3}s infinite` }} />
              ))}
            </svg>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Project 02</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">GitStats</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Turn your Git history into team intelligence. Upload any repo — or import from GitHub, GitLab, or Bitbucket — and get instant engineering metrics.
                </p>
              </div>
              <a href="https://gitstats.hivarsoft.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-4 sm:px-5 py-2.5 rounded-xl hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap self-start shrink-0">
                Launch App →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#0a0f1e]">
            {gitStatsFeatures.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 50} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
