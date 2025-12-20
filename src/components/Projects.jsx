import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="04"
            title="Projects."
            subtitle="Selected work and academic builds."
          />

          <motion.div
            className="mt-8 grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {PROJECTS.map((p, index) => (
              <motion.article
                key={p.title}
                className="relative card p-6 group overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Soft light overlay on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.16), transparent 55%)",
                  }}
                />

                <div className="relative flex h-full flex-col gap-3">
                  <div className="text-xs font-medium tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400">
                    {p.period}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {p.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>

                  {p.stack?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-slate-200/80 dark:border-slate-600/80 bg-slate-50/60 dark:bg-slate-900/40 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {(p.github || p.demo) && (
                    <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/80">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                        >
                          <Github size={16} />
                          <span>Source</span>
                        </a>
                      )}

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
