import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.06 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="section-block pt-8 md:pt-10 scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader index="04" title="Projects." subtitle="Selected work and academic builds." />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                className="card p-6 transition hover:-translate-y-1 hover:shadow-xl"
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={i}
              >
                <div className="text-sm text-slate-500 dark:text-slate-400">{p.period}</div>
                <h3 className="text-xl font-semibold mt-1 font-display">{p.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-white btn-gradient"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
