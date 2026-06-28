import Link from "next/link";
import Image from "next/image";

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-2.5">
          <span className="text-purple-500 shrink-0 leading-none" style={{ fontSize: "1.1em", lineHeight: "1.6" }}>•</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OAuthBox({
  emoji, title, intro, scopes, notAccessed,
}: {
  emoji: string;
  title: string;
  intro: string;
  scopes: { code: string; desc: string }[];
  notAccessed: string;
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
        <span>{emoji}</span> {title}
      </h3>
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{intro}</p>
      <ul className="space-y-1.5">
        {scopes.map((s) => (
          <li key={s.code} className="flex items-baseline gap-2 text-sm text-slate-600">
            <span className="text-purple-400 shrink-0">•</span>
            <span>
              <code className="bg-slate-200 px-1.5 py-0.5 rounded text-xs font-mono">{s.code}</code>
              {" — "}{s.desc}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-slate-500 text-xs mt-3 font-medium leading-relaxed">
        {notAccessed}
      </p>
    </div>
  );
}

export function LegalHeader({ opposite, oppositeHref }: { opposite: string; oppositeHref: string }) {
  return (
    <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image src="/Logo.png" alt="HivarSoft" width={30} height={30} className="rounded-lg" />
          <span className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base">
            HivarSoft
          </span>
        </Link>
        <Link href={oppositeHref} className="text-xs sm:text-sm text-slate-500 hover:text-purple-600 transition-colors whitespace-nowrap">
          {opposite} →
        </Link>
      </div>
    </header>
  );
}

export function LegalFooter({ company, current, opposite, oppositeHref }: {
  company: string; current: string; opposite: string; oppositeHref: string;
}) {
  return (
    <footer className="border-t border-slate-100 mt-16 py-8 text-center text-xs sm:text-sm text-slate-400 px-4">
      <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
        <span>&copy; {new Date().getFullYear()} {company}. All rights reserved.</span>
        <span className="hidden sm:inline">·</span>
        <Link href={oppositeHref} className="hover:text-purple-600 transition-colors">{opposite}</Link>
        <span>·</span>
        <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
      </p>
    </footer>
  );
}
