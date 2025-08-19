// src/components/Hero.jsx
import { ArrowRight, Send } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section pt-8 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.05fr]">

          {/* LEFT — Intro */}
          <div className="max-w-xl pl-6 md:pl-10 animate-heroUp">
            <p className="uppercase tracking-widest text-xs text-slate-400">
              Hey, I’m
            </p>

            <h1 className="mt-2 leading-tight font-display font-extrabold text-4xl md:text-5xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Mohd. Faraaz Kalim
              </span>
            </h1>

            <div className="mt-3 text-slate-300/90 font-medium">
              Full Stack Developer | Java | Python | React | Node.js
            </div>

            <p className="mt-4 text-slate-400">
              Building scalable applications with clean code and creative solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/40 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:bg-slate-900/60"
              >
                Contact Me <Send size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT — Oval Profile (tighter vertically) */}
          <div className="relative flex justify-center animate-heroIn">
            <div className="rounded-[40%] p-[3px] bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-[0_20px_60px_rgba(14,165,233,.35)] transition hover:scale-[1.02]">
              <div className="rounded-[40%] overflow-hidden bg-slate-900/70 backdrop-blur-md">
                <img
                  src="/headshot.png"
                  alt="Mohd. Faraaz Kalim"
                  className="block h-[420px] w-[300px] sm:h-[460px] sm:w-[320px] md:h-[500px] md:w-[340px] object-cover object-center"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-5 rounded-[40%] bg-gradient-to-br from-cyan-400/18 via-sky-400/10 to-blue-500/18 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="mt-10 h-[1px] w-full bg-slate-300/40 dark:bg-slate-700/50" />
    </section>
  );
}
