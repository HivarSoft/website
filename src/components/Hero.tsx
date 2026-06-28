import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 40%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/Logo.png"
            alt="HivarSoft"
            width={56}
            height={56}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1.5 text-sm text-purple-200">
          <span>🌍</span>
          <span>Open Source &bull; Innovation &bull; Simplicity &bull; Community</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
            Affordable
          </span>{" "}
          &amp; Open Source Software
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          We believe powerful software should be accessible, transparent, and
          affordable — for everyone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            🚀 View Projects
          </a>
          <a
            href="https://github.com/HivarSoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
