import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#projects" },
    { label: "Contact",  href: "#connect"  },
  ];

  const productLinks = [
    { label: "Notes AI",  href: "https://notes-ai.hivarsoft.com/" },
    { label: "PulseWatch",  href: "https://pulsewatch.hivarsoft.com/" },
  ];

  const connectLinks = [
    { label: "GitHub",   href: "https://github.com/HivarSoft"          },
    { label: "LinkedIn", href: "https://linkedin.com/company/hivarsoft" },
    { label: "Email",    href: "mailto:hello@hivarsoft.com"        },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10 pb-10 border-b border-zinc-800/60">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/Logo.png" alt="HivarSoft" width={30} height={30} className="rounded-lg" />
              <span className="text-[15px] font-bold text-white">HivarSoft</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px]">
              Creating value through technology. One product at a time.
            </p>
          </div>

          {/* Navigate — anchor links, no external icon needed */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Navigate</p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Products</p>
            <div className="flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-zinc-400 hover:text-white transition-colors group"
                >
                  {l.label}
                  <BsArrowUpRight className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              {connectLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-1.5 text-[13px] text-zinc-400 hover:text-white transition-colors group"
                >
                  {l.label}
                  <BsArrowUpRight className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-zinc-600">
          <p>&copy; {year} HivarSoft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms"   className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
