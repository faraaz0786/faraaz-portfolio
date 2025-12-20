// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

// word-by-word animation for the first line
const headingWords = ["Hi,", "I'm"];

// Animation variants for left column
const containerVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-animated relative flex items-center overflow-hidden min-h-[90vh] md:min-h-[92vh] lg:min-h-[94vh]"
    >
      {/* Background layers */}
      <div className="hero-gradient absolute inset-0 -z-20" />
      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT — Intro with staggered animation */}
          <motion.div
            className="max-w-xl pl-6 md:pl-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top chip */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-700/70 px-3 py-1 text-xs md:text-[13px] text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Open to opportunities in Software &amp; AI Engineering</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-4 leading-tight font-display font-extrabold text-4xl md:text-5xl"
            >
              {/* First line: Hi, I'm (word-by-word reveal) */}
              <div className="flex flex-wrap gap-2 text-slate-900 dark:text-slate-50">
                {headingWords.map((word, index) => (
                  <motion.span
                    key={word + index}
                    initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.2 + index * 0.08,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Second line: gradient name (same as before) */}
              <div className="mt-1">
                {/* Light-mode gradient name */}
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
                  Mohd Faraaz Kalim.
                </motion.span>

                {/* Dark-mode gradient name */}
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
                  Mohd Faraaz Kalim
                </motion.span>
              </div>
            </motion.h1>

            {/* Tagline with "breathing" emphasis */}
            <motion.p
              className="mt-3 text-sm md:text-base text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            >
              Full Stack Developer | Software Engineer | AI Enthusiast
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-3"
            >
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition",
                  "bg-gradient-to-r from-[#9F5B4A] via-[#C78062] to-[#E4B363] hover:brightness-[1.05]",
                  "dark:from-[#6D63E6] dark:via-[#7B5CF6] dark:to-[#D14FA3] dark:hover:brightness-[1.06]",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E4B363]/70 dark:focus:ring-[#7B5CF6]/60 dark:focus:ring-offset-slate-950",
                ].join(" ")}
              >
                View Projects <ArrowRight size={16} />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition backdrop-blur",
                  "border border-[#C97D60]/40 bg-[#FAF8F5]/75 text-[#2B2118] hover:bg-[#FAF8F5]/90",
                  "dark:border-slate-600/50 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900/70",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C97D60]/50 dark:focus:ring-slate-600/50 dark:focus:ring-offset-slate-950",
                ].join(" ")}
              >
                Contact Me <Send size={15} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Profile Image (unchanged) */}
          <motion.div
            className="flex justify-center"
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
            >
              <div className="rounded-[10px] overflow-hidden bg-[#FAF8F5] dark:bg-slate-950">
                <img
                  src="/headshot.png"
                  alt="Mohd Faraaz Kalim"
                  className="block h-[400px] w-[300px] sm:h-[450px] sm:w-[340px] md:h-[500px] md:w-[380px] object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
