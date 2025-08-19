import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" 
    className="section-block scroll-mt-28 font-body mb-16">

      <SectionHeader index="04" title="Projects." subtitle="Selected work and academic builds." />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="text-sm text-slate-500">{p.period}</div>
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
              <a href={p.github} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Github size={16}/> GitHub
              </a>
              <a href={p.demo} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-white btn-gradient">
                <ExternalLink size={16}/> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
