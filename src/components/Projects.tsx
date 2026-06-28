"use client";
import { useReveal } from "@/hooks/useReveal";
import {
  LuFileText, LuFolderOpen, LuPenTool, LuSparkles,
  LuChartBarBig, LuUsers, LuFileCode2, LuGitBranch,
  LuTimer, LuCircleAlert, LuBuilding2, LuGitMerge,
  LuArrowRight,
} from "react-icons/lu";
import type { IconType } from "react-icons";

interface Feature { Icon: IconType; title: string; description: string }

const notesFeatures: Feature[] = [
  { Icon: LuFileText,   title: "Rich Notes",      description: "Write, edit, and format notes with a clean, distraction-free editor." },
  { Icon: LuFolderOpen, title: "Smart Folders",   description: "Group related notes into folders — any structure that fits your mind." },
  { Icon: LuPenTool,    title: "Infinite Canvas", description: "Sketch diagrams and wireframes right alongside your notes." },
  { Icon: LuSparkles,   title: "AI Assistant",    description: "Get summaries, brainstorm, and ask questions with built-in AI that knows your notes." },
];

const gitStatsFeatures: Feature[] = [
  { Icon: LuChartBarBig,  title: "Activity Heatmaps",        description: "Visualize commit patterns by hour, day, and month." },
  { Icon: LuUsers,        title: "Author Analytics",          description: "Per-author stats — commits, lines, streaks, peak hours." },
  { Icon: LuFileCode2,    title: "Language Breakdown",        description: "Understand your codebase composition by file type." },
  { Icon: LuGitBranch,    title: "Multi-Platform Import",     description: "GitHub, GitLab, Bitbucket — or upload your .git folder." },
  { Icon: LuTimer,        title: "Engineering Metrics",       description: "Cycle time, PR size, coding time, code rework ratio." },
  { Icon: LuCircleAlert,  title: "Bus Factor Analysis",       description: "Surface files owned by a single person." },
  { Icon: LuBuilding2,    title: "Team Organisations",        description: "Org-level dashboards across all repos with granular permissions." },
  { Icon: LuGitMerge,     title: "Stale Branch Detection",    description: "Auto-surface branches untouched for 30+ days." },
];

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/6 sm:divide-x sm:divide-y-0 lg:divide-x lg:divide-y-0 [&>*:nth-child(n+3)]:sm:border-t [&>*:nth-child(n+3)]:sm:border-white/6">
      {features.map(({ Icon, title, description }) => (
        <div key={title} className="group p-5 sm:p-6 hover:bg-white/4 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center mb-3 shrink-0">
            <Icon className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
          </div>
          <h4 className="text-[13.5px] font-bold text-white/90 mb-2">{title}</h4>
          <p className="text-[12.5px] text-white/45 leading-relaxed group-hover:text-white/65 transition-colors">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14 md:mb-20">
          <p className="reveal text-xs font-bold uppercase tracking-widest text-violet-600 mb-4">Our Products</p>
          <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight stagger-1">
            Real tools,<br />
            <span className="gradient-text">used by real people.</span>
          </h2>
          <p className="reveal text-zinc-500 mt-4 text-[15px] leading-relaxed stagger-2">
            We don&apos;t just build projects — we build products people actually use every day.
          </p>
        </div>

        {/* Notes AI */}
        <div className="reveal mb-5 rounded-2xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/5">
          {/* Header */}
          <div className="bg-[#1a0f3e] px-6 sm:px-8 py-8 sm:py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-violet-400/70 mb-3">Project 01</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Notes AI</h3>
                <p className="text-violet-200/70 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                  Capture ideas, sketch your thoughts, and stay organised. Rich text, infinite canvas,
                  smart folders, and an AI assistant — all in one beautiful app.
                </p>
              </div>
              <a
                href="https://notes-ai.hivarsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1a0f3e] font-bold px-5 py-2.5 rounded-xl hover:bg-violet-50 hover:shadow-lg hover:-translate-y-0.5 transition-all text-[13.5px] whitespace-nowrap self-start shrink-0"
              >
                Open App <LuArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="bg-[#130b2e]">
            <FeatureGrid features={notesFeatures} />
          </div>
        </div>

        {/* GitStats */}
        <div className="reveal stagger-2 rounded-2xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/5">
          {/* Header */}
          <div className="bg-zinc-900 px-6 sm:px-8 py-8 sm:py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Project 02</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">GitStats</h3>
                <p className="text-zinc-400 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                  Turn your Git history into team intelligence. Upload any repo — or import from GitHub,
                  GitLab, or Bitbucket — and get instant engineering metrics.
                </p>
              </div>
              <a
                href="https://gitstats.hivarsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-zinc-900 font-bold px-5 py-2.5 rounded-xl hover:bg-zinc-100 hover:shadow-lg hover:-translate-y-0.5 transition-all text-[13.5px] whitespace-nowrap self-start shrink-0"
              >
                Open App <LuArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Features */}
          <div className="bg-[#0a0f1a]">
            <FeatureGrid features={gitStatsFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}
