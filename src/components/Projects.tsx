"use client";
import { useReveal } from "@/hooks/useReveal";
import {
  LuFileText, LuFolderOpen, LuPenTool, LuSparkles,
  LuChartBarBig, LuUsers, LuFileCode2, LuGitBranch,
  LuTimer, LuCircleAlert, LuBuilding2, LuGitMerge,
  LuArrowRight, LuLock, LuGlobe,
  LuSlidersHorizontal, LuShieldAlert, LuBell, LuGauge,
  LuServer,
} from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import type { IconType } from "react-icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  Icon: IconType;
  title: string;
  description: string;
}

interface ColorScheme {
  /** Card header background */
  headerBg: string;
  /** Feature grid background */
  gridBg: string;
  /** Project number label color */
  labelColor: string;
  /** Description text color */
  descColor: string;
  /** CTA button text color */
  ctaText: string;
  /** CTA button hover bg */
  ctaHover: string;
}

interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  /** Optional GitHub repo URL — renders a GitHub icon button beside the main CTA */
  gitLink?: string;
  visibility: "open-source" | "private";
  scheme: ColorScheme;
  features: Feature[];
}

// ─── Color Schemes ────────────────────────────────────────────────────────────

const schemes = {
  /** Deep violet — Notes AI */
  violet: {
    headerBg:  "bg-[#1a0f3e]",
    gridBg:    "bg-[#130b2e]",
    labelColor: "text-violet-400/70",
    descColor:  "text-violet-200/70",
    ctaText:    "text-[#1a0f3e]",
    ctaHover:   "hover:bg-violet-50",
  },
  /** Slate navy — GitStats V2 */
  navy: {
    headerBg:  "bg-[#0b1120]",
    gridBg:    "bg-[#060c18]",
    labelColor: "text-sky-400/60",
    descColor:  "text-sky-200/60",
    ctaText:    "text-[#0b1120]",
    ctaHover:   "hover:bg-sky-50",
  },
  /** GitHub dark — GitStats OSS */
  github: {
    headerBg:  "bg-[#0d1117]",
    gridBg:    "bg-[#080d13]",
    labelColor: "text-zinc-500",
    descColor:  "text-zinc-400",
    ctaText:    "text-zinc-900",
    ctaHover:   "hover:bg-zinc-100",
  },
  /** Deep teal — PulseWatch */
  teal: {
    headerBg:  "bg-[#021f1f]",
    gridBg:    "bg-[#011515]",
    labelColor: "text-teal-400/70",
    descColor:  "text-teal-200/70",
    ctaText:    "text-[#021f1f]",
    ctaHover:   "hover:bg-teal-50",
  },
} satisfies Record<string, ColorScheme>;

// ─── Project Data ──────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "notes-ai",
    number: "01",
    name: "Notes AI",
    description:
      "Capture ideas, sketch your thoughts, and stay organised. Rich text, infinite canvas, smart folders, and an AI assistant — all in one beautiful app.",
    href: "https://notes-ai.hivarsoft.com/",
    ctaLabel: "Open App",
    gitLink: "https://github.com/HivarSoft/notes",
    visibility: "open-source",
    scheme: schemes.violet,
    features: [
      { Icon: LuFileText,   title: "Rich Notes",      description: "Write, edit, and format notes with a clean, distraction-free editor." },
      { Icon: LuFolderOpen, title: "Smart Folders",   description: "Group related notes into folders — any structure that fits your mind." },
      { Icon: LuPenTool,    title: "Infinite Canvas", description: "Sketch diagrams and wireframes right alongside your notes." },
      { Icon: LuSparkles,   title: "AI Assistant",    description: "Get summaries, brainstorm, and ask questions with built-in AI that knows your notes." },
    ],
  },
  {
    id: "gitstats-oss",
    number: "02",
    name: "GitStats",
    description:
      "A lightweight, self-hosted Git analytics dashboard. Point it at any local repo and get instant insights — commit heatmaps, author breakdowns, language stats, and branch switching. Free and open source forever.",
    gitLink: "https://github.com/HivarSoft/gitstats",
    visibility: "open-source",
    scheme: schemes.github,
    features: [
      { Icon: LuChartBarBig, title: "Commit Heatmaps",  description: "Visualize activity by hour, day of week, and month of year." },
      { Icon: LuUsers,       title: "Author Breakdown",  description: "Per-author commits, lines added/removed, and coding streaks." },
      { Icon: LuFileCode2,   title: "Language Stats",    description: "File-type pie chart and extension breakdown table." },
      { Icon: LuGitBranch,   title: "Branch Switching",  description: "Analyse any local branch without leaving the dashboard." },
      { Icon: LuTimer,       title: "Files Timeline",    description: "Track how file count evolves over the project's lifetime." },
      { Icon: LuGitMerge,    title: "Tag History",       description: "Commits-per-tag bar chart and full release table." },
    ],
  },
  {
    id: "pulsewatch",
    number: "03",
    name: "PulseWatch",
    description:
      "Production-grade uptime monitoring built on BullMQ and Redis. Track any HTTPS endpoint with per-service check intervals, smart incident detection, multi-channel alerts, and deep response-time analytics.",
    href: "https://pulsewatch.hivarsoft.com/",
    ctaLabel: "Open App",
    gitLink: "https://github.com/HivarSoft/uptime-monitoring-system",
    visibility: "open-source",
    scheme: schemes.teal,
    features: [
      { Icon: LuSlidersHorizontal, title: "Custom Check Intervals",   description: "Set check frequency per service — from every 1 minute to every 24 hours. BullMQ workers process checks at scale with 50 concurrent threads." },
      { Icon: LuShieldAlert,       title: "Smart Incident Detection", description: "Configure consecutive failures to trigger a DOWN alert and successes to confirm recovery. Eliminates false positives completely." },
      { Icon: LuBell,              title: "Multi-Channel Alerts",     description: "Email (SMTP), Slack, Discord, Telegram, and generic webhooks. Test any channel with one click before incidents happen." },
      { Icon: LuGauge,             title: "Response Time Analytics",  description: "Avg, min, max, and P95 latency tracked per service with interactive charts. Select any date range from 24h to 1 year." },
      { Icon: LuChartBarBig,       title: "Uptime History & MTBF",    description: "Accurate uptime %, incident counts, downtime duration, and Mean Time Between Failures across 24h, 7d, 30d, and 365d windows." },
      { Icon: LuServer,            title: "BullMQ Queue Architecture", description: "Checks are enqueued to Redis-backed BullMQ queues. Workers run concurrently, retry on failure, and scale horizontally." },
    ],
  },
  {
    id: "gitstats-v2",
    number: "04",
    name: "GitStats V2",
    description:
      "Turn your Git history into team intelligence. Upload any repo — or import from GitHub, GitLab, or Bitbucket — and get instant engineering metrics.",
    href: "https://gitstats.hivarsoft.com/",
    ctaLabel: "Open App",
    visibility: "private",
    scheme: schemes.navy,
    features: [
      { Icon: LuChartBarBig, title: "Activity Heatmaps",     description: "Visualize commit patterns by hour, day, and month." },
      { Icon: LuUsers,       title: "Author Analytics",       description: "Per-author stats — commits, lines, streaks, peak hours." },
      { Icon: LuFileCode2,   title: "Language Breakdown",     description: "Understand your codebase composition by file type." },
      { Icon: LuGitBranch,   title: "Multi-Platform Import",  description: "GitHub, GitLab, Bitbucket — or upload your .git folder." },
      { Icon: LuTimer,       title: "Engineering Metrics",    description: "Cycle time, PR size, coding time, code rework ratio." },
      { Icon: LuCircleAlert, title: "Bus Factor Analysis",    description: "Surface files owned by a single person." },
      { Icon: LuBuilding2,   title: "Team Organisations",     description: "Org-level dashboards across all repos with granular permissions." },
      { Icon: LuGitMerge,    title: "Stale Branch Detection", description: "Auto-surface branches untouched for 30+ days." },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectTag({ type }: { type: "open-source" | "private" }) {
  return type === "open-source" ? (
    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2.5 py-1 rounded-full">
      <LuGlobe className="w-3 h-3" /> Open Source
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest bg-white/8 text-white/50 border border-white/10 px-2.5 py-1 rounded-full">
      <LuLock className="w-3 h-3" /> Private
    </span>
  );
}

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { scheme } = project;
  const isLast = index === PROJECTS.length - 1;

  return (
    <div className={`reveal${index > 0 ? ` stagger-${index + 1}` : ""} ${isLast ? "" : "mb-5"} rounded-2xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/5`}>
      {/* Header */}
      <div className={`${scheme.headerBg} px-6 sm:px-8 py-8 sm:py-10`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[11px] font-bold uppercase tracking-widest ${scheme.labelColor}`}>
                Project {project.number}
              </span>
              <ProjectTag type={project.visibility} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{project.name}</h3>
            <p className={`${scheme.descColor} text-[14px] sm:text-[15px] leading-relaxed max-w-md`}>
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start shrink-0">
            {project.href && <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-white ${scheme.ctaText} font-bold px-5 py-2.5 rounded-xl ${scheme.ctaHover} hover:shadow-lg hover:-translate-y-0.5 transition-all text-[13.5px] whitespace-nowrap`}
            >
              {project.ctaLabel} <LuArrowRight className="w-4 h-4" />
            </a>}
            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white/70 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <FiGithub className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Features */}
      <div className={scheme.gridBg}>
        <FeatureGrid features={project.features} />
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative overflow-hidden">
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

        {/* Project cards */}
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}

      </div>
    </section>
  );
}
