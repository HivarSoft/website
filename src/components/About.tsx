const values = [
  { icon: "✅", label: "Affordable Solutions" },
  { icon: "🌐", label: "Open Source Innovation" },
  { icon: "⚙️", label: "Modern Technologies" },
  { icon: "🛡️", label: "Reliable Support" },
  { icon: "🤝", label: "Community-Driven Development" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            🚀 What is HivarSoft?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            HivarSoft is a software company focused on creating modern,
            scalable, and affordable software solutions for businesses,
            startups, and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Make high-quality software accessible without enterprise-level
              costs. We build products, tools, and services that empower
              developers, businesses, and communities through open-source
              technology.
            </p>
            <a
              href="https://github.com/HivarSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              Explore our repositories →
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              🌟 Our Vision
            </h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li
                  key={v.label}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-xl">{v.icon}</span>
                  <span className="font-medium">{v.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
