import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const groupVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.05 },
  }),
};

export default function Skills() {
  const groups = [
    { title: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"] },
    { title: "Backend", items: ["Node.js", "Django", "Java", "Python"] },
    { title: "Databases & Tools", items: ["MySQL", "MongoDB", "Firebase", "Git", "Docker"] },
    { title: "Others", items: ["Arduino", "Twilio", "LaTeX"] },
  ];

  return (
    <section id="skills" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader index="03" title="Skills." subtitle="A compact view of my toolbox." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {groups.map((g, i) => (
              <motion.article
                key={g.title}
                className="card p-6"
                variants={groupVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <div className="font-semibold mb-3 font-display">{g.title}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
