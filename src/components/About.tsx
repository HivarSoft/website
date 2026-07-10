"use client";
import { useEffect, useRef, useState } from "react";
import { LuRocket, LuGlobe, LuCpu, LuBadgeDollarSign, LuShieldCheck, LuUsers } from "react-icons/lu";
import type { IconType } from "react-icons";

const pillars: { Icon: IconType; label: string }[] = [
  { Icon: LuRocket,          label: "SaaS & Proprietary Products"  },
  { Icon: LuGlobe,           label: "Open Source Contributions"    },
  { Icon: LuCpu,             label: "Modern Tech Stack"            },
  { Icon: LuBadgeDollarSign, label: "Pricing That Makes Sense"     },
  { Icon: LuShieldCheck,     label: "Reliable & Scalable"          },
  { Icon: LuUsers,           label: "Community-Driven Innovation"  },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 36;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1200 / steps);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <p className="reveal text-xs font-bold uppercase tracking-widest text-violet-600 mb-4">About HivarSoft</p>
          <h2 className="reveal text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight stagger-1">
            Software built to last,{" "}
            <span className="gradient-text">priced to be fair.</span>
          </h2>
          <p className="reveal text-[15px] sm:text-lg text-zinc-500 mt-4 leading-relaxed stagger-2">
            HivarSoft builds modern, scalable software — both commercial SaaS platforms
            and open source tools — for teams and developers who want quality without compromise.
          </p>
        </div>

        {/* Two-column layout — single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — mission + stats */}
          <div>
            <div className="reveal reveal-left stagger-1">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Our approach</h3>
              <p className="text-zinc-500 leading-relaxed text-[15px] mb-5">
                We ship proprietary SaaS products with transparent pricing — and we give back
                to the developer community with open source tools. Not every product needs to be free,
                but every product should be worth what you pay for it.
              </p>
              <a
                href="https://github.com/HivarSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-600 hover:text-violet-800 transition-colors group"
              >
                Explore our repositories
                <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
              </a>
            </div>

            {/* Stats — stacked list on mobile, row on sm+ */}
            <div className="reveal reveal-left stagger-2 mt-8 flex flex-col sm:flex-row gap-3">
              {[
                { label: "Live Products",     special: "3+"  },
                { label: "Open Source Repos", special: "4+" },
                // { label: "Community",         special: "-"   },
              ].map((s) => (
                <div key={s.label} className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 p-4 bg-zinc-50 border border-zinc-100 rounded-2xl sm:flex-1">
                  <span className="text-2xl font-extrabold text-zinc-900 shrink-0">{s.special}</span>
                  <span className="text-xs text-zinc-400 font-medium sm:mt-1 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — "What we stand for" pillars */}
          <div>
            <div className="reveal reveal-right stagger-1 mb-4">
              <h3 className="text-xl font-bold text-zinc-900 mb-1">What we stand for</h3>
              <p className="text-[14px] text-zinc-500">The principles that guide everything we build.</p>
            </div>

            <ul className="flex flex-col gap-2">
              {pillars.map(({ Icon, label }, i) => (
                <li
                  key={label}
                  className={`reveal reveal-right stagger-${Math.min(i + 2, 8)} flex items-center gap-3 bg-white border border-zinc-100 hover:border-zinc-200 rounded-xl px-4 py-3 card-lift`}
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] font-medium text-zinc-800 min-w-0">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
