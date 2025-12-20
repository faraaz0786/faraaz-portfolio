import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SITE } from "../data/site";
import SectionHeader from "./SectionHeader";

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

export default function Education() {
  const { education } = SITE;

  const items = [
    {
      degree: education.degree,
      institute: education.institute,
      years: education.years,
      gpa: education.gpa,
    },
    // later you can push more entries here (school, intermediate, etc.)
  ];

  return (
    <section id="education" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="02"
            title="Education."
            subtitle="Academic foundation and focus."
          />

          <div className="relative mt-10">
            {/* Left vertical line (timeline) */}
            <div
              className="pointer-events-none absolute left-4 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(148,163,184,0.0), rgba(148,163,184,0.6), rgba(148,163,184,0.0))",
              }}
            />

            <div className="space-y-8">
              {items.map((item, index) => (
                <motion.article
                  key={item.degree + index}
                  className="relative pl-12"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  custom={index}
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute left-3.5 top-6 h-3.5 w-3.5 rounded-full border-[2px]
                               border-slate-200 dark:border-slate-900 shadow-[0_0_0_4px_rgba(148,163,184,0.35)]"
                    style={{
                      background: "radial-gradient(circle, #ffffff, #64748b)",
                    }}
                  />

                  {/* Wide education card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow:
                        "0 22px 40px rgba(0,0,0,0.22), 0 8px 18px rgba(255,255,255,0.18)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="w-full rounded-3xl border border-slate-200/80 dark:border-slate-700/80
                               bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
                               px-6 py-5 md:px-8 md:py-6
                               shadow-sm dark:shadow-md flex flex-col gap-2"
                  >
                    {/* Top row: years + GPA badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        <span className="text-xs tracking-[0.16em] uppercase text-slate-600 dark:text-slate-400">
                          {item.years}
                        </span>
                      </div>

                      {item.gpa && (
                        <span className="inline-flex items-center rounded-md px-2 py-[2px]
                                         text-xs font-medium
                                         bg-slate-200/70 dark:bg-slate-700/60
                                         text-slate-700 dark:text-slate-200">
                          CGPA: {item.gpa.replace(/[^0-9.]/g, "")}
                        </span>
                      )}
                    </div>

                    {/* Degree */}
                    <h3 className="mt-1 font-display text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                      {item.degree}
                    </h3>

                    {/* Institute */}
                    <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-300">
                      {item.institute}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
