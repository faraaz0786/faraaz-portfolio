// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-animated relative flex items-center overflow-hidden min-h-[90vh] md:min-h-[92vh] lg:min-h-[94vh]"
    >
      {/* Background layers */}
      <div className="hero-gradient absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.05fr]">
          {/* LEFT — Intro */}
          <motion.div
            className="max-w-xl pl-6 md:pl-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="uppercase tracking-widest text-xs text-[#6f655a] dark:text-slate-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              Hey, I’m
            </motion.p>

            {/* Animated gradient name — separate light & dark spans */}
            <motion.h1
              className="mt-2 leading-tight font-display font-extrabold text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              {/* Light mode gradient (warm clay → terracotta → sand) */}
              <motion.span
                className="block bg-clip-text text-transparent dark:hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9F5B4A, #C78062, #E4B363, #C78062, #9F5B4A)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                Mohd. Faraaz Kalim
              </motion.span>

              {/* Dark mode gradient (indigo → violet → fuchsia) */}
              <motion.span
                className="hidden dark:block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #6D63E6, #7B5CF6, #D14FA3, #7B5CF6, #6D63E6)",
                  backgroundSize: "220% 220%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              >
                Mohd. Faraaz Kalim
              </motion.span>
            </motion.h1>

            <motion.div
              className="mt-3 text-[#5C5348] dark:text-slate-300/90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.55 }}
            >
              Full Stack Developer | Java | Python | React | Node.js
            </motion.div>

            <motion.p
              className="mt-4 text-[#5C5348]/90 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.55 }}
            >
              Building scalable applications with clean code and creative solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55 }}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition",
                  "bg-gradient-to-r from-[#9F5B4A] via-[#C78062] to-[#E4B363] hover:brightness-[1.05]",
                  "dark:from-[#6D63E6] dark:via-[#7B5CF6] dark:to-[#D14FA3] dark:hover:brightness-[1.06]",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E4B363]/70 dark:focus:ring-[#7B5CF6]/60 dark:focus:ring-offset-slate-950",
                ].join(" ")}
              >
                View My Work <ArrowRight size={16} />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition backdrop-blur",
                  "border border-[#C97D60]/40 bg-[#FAF8F5]/75 text-[#2B2118] hover:bg-[#FAF8F5]/90",
                  "dark:border-slate-600/50 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900/70",
                  "shadow-[0_1px_0_rgba(255,255,255,.5)] dark:shadow-none",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C97D60]/50 dark:focus:ring-slate-600/50 dark:focus:ring-offset-slate-950",
                ].join(" ")}
              >
                Contact Me <Send size={15} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Lifted square portrait w/ premium frame */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-xl overflow-hidden shadow-2xl p-[3px]
                         bg-gradient-to-br from-[#E4B363] via-[#C78062] to-[#9F5B4A]
                         dark:from-[#7B5CF6] dark:via-[#6D63E6] dark:to-[#D14FA3]"
              style={{
                boxShadow:
                  "0 24px 60px rgba(0,0,0,.25), 0 2px 0 rgba(255,255,255,.06) inset",
              }}
            >
              <div className="rounded-[10px] overflow-hidden bg-[#FAF8F5] dark:bg-slate-950">
                <img
                  src="/headshot.png"
                  alt="Mohd. Faraaz Kalim"
                  className="block h-[420px] w-[320px] sm:h-[460px] sm:w-[340px] md:h-[500px] md:w-[380px] object-cover object-center"
                />
              </div>

              {/* subtle ambient glow below the card */}
              <div
                className="pointer-events-none absolute -inset-x-6 -bottom-8 h-16 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 100% at 50% 0%, rgba(228,179,99,.35), rgba(0,0,0,0))",
                }}
              />
              <div
                className="pointer-events-none absolute -inset-x-6 -bottom-8 h-16 blur-2xl hidden dark:block"
                style={{
                  background:
                    "radial-gradient(60% 100% at 50% 0%, rgba(123,92,246,.35), rgba(0,0,0,0))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
