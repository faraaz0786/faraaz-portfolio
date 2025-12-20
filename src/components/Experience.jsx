import { motion } from "framer-motion";
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

export default function Experience() {
  const items = [
    {
      role: "Web Development Trainee",
      company: "Internshala",
      time: "2024",
      desc: "Completed hands-on training focused on building a full-stack PG-Life application, integrating responsive UI with backend services.",
      location: "Remote",
      type: "Training / Internship",
    },
    {
      role: "Research Contributor – Smart Metering",
      company: "Integral University",
      time: "2024 – 2025",
      desc: "Worked on IoT-based smart energy metering system, resulting in publications (ICBDAIT – in progress; DSAI – accepted, Springer).",
      location: "Lucknow, India",
      type: "Academic / Research",
    },
  ];

  return (
    <section id="experience" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="05"
            title="Experience."
            subtitle="Internships, research and real-world contributions."
          />

          <div className="relative mt-10">
            {/* Left vertical timeline line */}
            <div
              className="pointer-events-none absolute left-4 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(148,163,184,0.0), rgba(148,163,184,0.6), rgba(148,163,184,0.0))",
              }}
            />

            <div className="space-y-8">
              {items.map((e, index) => (
                <motion.article
                  key={e.role + index}
                  className="relative pl-12"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute left-3.5 top-6 h-3.5 w-3.5 rounded-full border-[2px] border-slate-200 dark:border-slate-900 shadow-[0_0_0_4px_rgba(148,163,184,0.35)]"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #f8fafc, #64748b)",
                    }}
                  />

                  {/* Experience card */}
                  <div className="card rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm dark:shadow-md px-6 py-5 md:px-8 md:py-6 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    {/* Top row: type & time */}
                    <div className="flex items-center justify-between gap-3 text-xs md:text-[11px] tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400 mb-3">
                      <span>{e.type}</span>
                      <span className="tracking-normal font-medium text-[11px] md:text-xs">
                        {e.time}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="font-display text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
                      {e.role}
                    </h3>

                    {/* Company + location */}
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {e.company}
                      {e.location ? ` • ${e.location}` : null}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {e.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
