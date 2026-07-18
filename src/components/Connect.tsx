"use client";
import { useReveal } from "@/hooks/useReveal";
import { LuLinkedin, LuGithub, LuMail, LuArrowRight } from "react-icons/lu";
import type { IconType } from "react-icons";

const contacts: {
  Icon: IconType;
  label: string;
  description: string;
  href: string;
  accent: string;
  iconClass: string;
}[] = [
  {
    Icon: LuLinkedin,
    label: "LinkedIn",
    description: "Follow us for updates and news",
    href: "https://linkedin.com/company/hivarsoft",
    accent: "hover:border-blue-200 hover:bg-blue-50/50",
    iconClass: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    Icon: LuGithub,
    label: "GitHub",
    description: "Star our open source projects",
    href: "https://github.com/HivarSoft",
    accent: "hover:border-zinc-300 hover:bg-zinc-50/80",
    iconClass: "text-zinc-700 bg-zinc-100 border-zinc-200",
  },
  {
    Icon: LuMail,
    label: "Email",
    description: "Reach us directly",
    href: "mailto:hello@hivarsoft.com",
    accent: "hover:border-violet-200 hover:bg-violet-50/50",
    iconClass: "text-violet-600 bg-violet-50 border-violet-100",
  },
];

export default function Connect() {
  const ref = useReveal();

  return (
    <section id="connect" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Dot grid */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-35 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — text */}
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-widest text-violet-600 mb-4">Get in Touch</p>
            <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight stagger-1">
              Let&apos;s build<br />
              <span className="gradient-text">something great.</span>
            </h2>
            <p className="reveal text-zinc-500 mt-5 text-[15px] leading-relaxed stagger-2 max-w-sm">
              Whether you want to collaborate, contribute to open source, or just say hi —
              we&apos;d love to hear from you.
            </p>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-3">
            {contacts.map(({ Icon, label, description, href, accent, iconClass }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`reveal stagger-${i + 2} reveal-right group flex items-center gap-4 bg-white border border-zinc-100 ${accent} rounded-2xl px-5 py-4 card-lift transition-colors`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-bold text-zinc-900">{label}</div>
                  <div className="text-[12.5px] text-zinc-400">{description}</div>
                </div>
                <LuArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
