const services = [
  {
    icon: "💻",
    title: "Software Development",
    items: [
      "Web Applications",
      "SaaS Platforms",
      "Enterprise Solutions",
      "API Development",
      "Custom Software",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    items: [
      "Docker & Kubernetes",
      "CI/CD Automation",
      "Cloud Infrastructure",
      "Self-Hosted Solutions",
    ],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    items: [
      "AI-Powered Applications",
      "Workflow Automation",
      "Chatbots & Assistants",
      "Business Process Optimization",
    ],
  },
  {
    icon: "🌐",
    title: "Open Source",
    items: [
      "Developer Tools",
      "Productivity Applications",
      "Community Projects",
      "Educational Resources",
    ],
  },
];

const techStack = [
  "Next.js", "React", "Node.js", "TypeScript", "Python",
  "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes",
  "AWS", "Vercel", "TailwindCSS", "GraphQL",
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            🎯 Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <ul className="space-y-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="text-purple-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            🛠️ Technologies We Love
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
