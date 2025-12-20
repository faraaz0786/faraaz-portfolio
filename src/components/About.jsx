import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="01"
            title="About Me."
            subtitle="" // subtitle removed
          />
          {/* keep a bit of vertical space where subtitle used to be */}
          <div className="h-2 md:h-3" />

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -4,
              boxShadow:
                "0 18px 40px rgba(0,0,0,0.18), 0 6px 16px rgba(255,255,255,0.10)",
            }}
            className="card p-6 leading-relaxed mt-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-shadow duration-300"
          >
            <p>
              I’m Mohd Faraaz Kalim — a software developer skilled in full-stack
              engineering, cloud systems, and intelligent IoT-based applications.
              I build solutions that merge software with real-world utility,
              backed by experience in Python, Java, Django, Node.js, React.js,
              MongoDB, and IoT hardware. My work reflects a focus on efficiency,
              scalability, and meaningful innovation driven by AI, data, and
              modern development practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
