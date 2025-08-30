import SectionHeader from "./SectionHeader";
import { PUBLICATIONS } from "../data/publications";

const Chip = ({ children }) => (
  <span className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    {children}
  </span>
);

export default function Publications() {
  return (
    <section id="publications" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="06"
            title="Publications."
            subtitle="Selected research & conference work."
          />

          <div className="mt-6 space-y-4">
            {PUBLICATIONS.map((p, i) => (
              <article key={i} className="card p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg md:text-xl font-semibold font-display flex-1">
                    {p.title}
                  </h3>
                  <Chip>{p.year}</Chip>
                  {p.status && <Chip>{p.status}</Chip>}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.authors.join(", ")}
                </div>
                <div className="mt-1 text-sm">
                  <span className="font-medium">Presented at:</span> {p.venue}
                </div>
                {p.note && (
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{p.note}</div>
                )}
                {p.link && (
                  <div className="mt-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gradient inline-block text-white"
                    >
                      View Abstract
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
