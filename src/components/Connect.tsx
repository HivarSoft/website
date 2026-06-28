const links = [
  {
    icon: "🌐",
    label: "Website",
    value: "hivarsoft.com",
    href: "https://hivarsoft.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/company/hivarsoft",
    href: "https://linkedin.com/company/hivarsoft",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/HivarSoft",
    href: "https://github.com/HivarSoft",
  },
  {
    icon: "📧",
    label: "Email",
    value: "hitesh.k.83080@gmail.com",
    href: "mailto:hitesh.k.83080@gmail.com",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            📢 Connect With Us
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Whether you want to collaborate, contribute, or just say hi —
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex flex-col items-center gap-3 bg-white border border-slate-100 rounded-2xl p-6 text-center hover:border-purple-200 hover:shadow-md transition-all group"
            >
              <span className="text-3xl">{link.icon}</span>
              <span className="font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-slate-400 break-all">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
