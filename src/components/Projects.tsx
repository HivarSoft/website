const notesFeatures = [
  {
    icon: "📝",
    title: "Rich Notes",
    description:
      "Write, edit, and format notes with a clean, distraction-free editor that keeps your thoughts organised.",
  },
  {
    icon: "📁",
    title: "Smart Folders",
    description:
      "Group related notes into folders. Build any structure that matches the way you think.",
  },
  {
    icon: "🎨",
    title: "Infinite Canvas",
    description:
      "Sketch diagrams, flowcharts, and wireframes right alongside your notes — no context switching.",
  },
  {
    icon: "✨",
    title: "AI Assistant",
    description:
      "Ask questions, get summaries, and brainstorm ideas with a built-in AI chat that knows your notes.",
  },
];

const gitStatsFeatures = [
  {
    icon: "📊",
    title: "Activity Heatmaps",
    description:
      "Visualize commit patterns by hour, day, and month. Spot peak productivity windows and identify burnout risks.",
  },
  {
    icon: "👥",
    title: "Author Analytics",
    description:
      "Deep-dive into per-author stats — commits, lines added/removed, active days, streaks, and peak hours.",
  },
  {
    icon: "⏱️",
    title: "Parameter Metrics",
    description:
      "Engineering KPIs from git history: cycle time, coding time, PR size distribution, and code rework ratio.",
  },
  {
    icon: "🚌",
    title: "Bus Factor Analysis",
    description:
      "Know your team's knowledge risk. See which files are owned by a single person.",
  },
  {
    icon: "🌿",
    title: "Branch & Multi-Platform",
    description:
      "Switch branches instantly. Import from GitHub, GitLab, or Bitbucket — or upload your .git folder.",
  },
  {
    icon: "🏢",
    title: "Team Organisations",
    description:
      "Invite team members with granular permissions. Org-level dashboards aggregate analytics across all repos.",
  },
  {
    icon: "📁",
    title: "File & Language Breakdown",
    description:
      "See your codebase composition by file extension and language. Understand what your repo is actually made of.",
  },
  {
    icon: "🔄",
    title: "Stale Branch Detection",
    description:
      "Automatically surface branches untouched for 30+ days. Keep your repository clean and your team focused.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Our Products
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            🚀 What We&apos;ve Built
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Real tools, used by real people. Here are two of our flagship
            products.
          </p>
        </div>

        {/* Notes AI */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-10">
          <div className="bg-linear-to-r from-purple-600 to-purple-800 px-8 py-10 text-white">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-purple-200 mb-2">
                  Project 01
                </div>
                <h3 className="text-3xl font-bold mb-2">Notes AI</h3>
                <p className="text-purple-100 text-lg max-w-xl">
                  Capture ideas, draw your thoughts, and stay organised. Rich
                  text, infinite canvas sketching, smart folders, and an AI
                  assistant — all in one place.
                </p>
              </div>
              <a
                href="https://notes-ai.hivarsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-purple-50 transition-colors text-sm whitespace-nowrap self-start"
              >
                Launch App →
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
            {notesFeatures.map((f) => (
              <div key={f.title} className="bg-white p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GitStats */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="bg-linear-to-r from-slate-800 to-slate-900 px-8 py-10 text-white">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Project 02
                </div>
                <h3 className="text-3xl font-bold mb-2">GitStats</h3>
                <p className="text-slate-300 text-lg max-w-xl">
                  Turn your Git history into team intelligence. Upload any Git
                  repository — or import from GitHub, GitLab, or Bitbucket —
                  and get instant engineering metrics.
                </p>
              </div>
              <a
                href="https://gitstats.hivarsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors text-sm whitespace-nowrap self-start"
              >
                Launch App →
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
            {gitStatsFeatures.map((f) => (
              <div key={f.title} className="bg-white p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
