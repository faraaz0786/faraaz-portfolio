import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PUBLICATIONS } from "../data/publications";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

          <motion.div
            className="mt-6 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {PUBLICATIONS.map((p, i) => (
              <motion.article
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 18px 40px rgba(0,0,0,0.22), 0 6px 14px rgba(255,255,255,0.14)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="card p-6 md:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {/* Icon + title */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <FileText className="w-5 h-5 flex-shrink-0 text-slate-500 dark:text-slate-300" />
                    <h3 className="text-lg md:text-xl font-semibold font-display truncate md:whitespace-normal">
                      {p.title}
                    </h3>
                  </div>

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
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {p.note}
                  </div>
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
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
