import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";

// Auto detect category from label text
function getCategory(label) {
  if (label.toLowerCase().includes("internshala")) return "Internshala";
  if (label.toLowerCase().includes("skillsnetwork")) return "SkillsNetwork";
  if (label.toLowerCase().includes("ibm")) return "IBM";
  return "Other";
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" }
  },
};

export default function Certifications() {
  const certs = [
    { label: "Data Science & Artificial Intelligence – IBM/Integral SkillsNetwork", url: "https://integral.skillsnetwork.site/certificates/dbd893e4-5b67-47eb-bcfd-3cca239fbd0d" },
    { label: "Data Fundamentals – IBM", url: "https://www.credly.com/go/iVBJ2r6q" },
    { label: "Cybersecurity Fundamentals – IBM SkillsBuild", url: "https://www.credly.com/go/SlSsn6OM" },
    { label: "Data Science 101 – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/39ce0706d71947b487c38608c051abbb" },
    { label: "Digital Analytics & Regression – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/5ac1a1618eb845379b88de4834cfb6e1" },
    { label: "Business Intelligence – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/99d49e46bb1f4fc497986610f8661c1b" },
    { label: "Web Development Training – Internshala", url: "https://drive.google.com/file/d/1pfxZAP2KAgCrm0OYndpSmHKn5yfrxp1L/view?usp=drive_link" },
    { label: "Machine Learning with Python – IBM/Integral SkillsNetwork", url: "https://courses.integral.skillsnetwork.site/certificates/ba9e8cb3365e4232b9dbda9e320f450d" },
  ];

  return (
    <section id="certifications" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">

          <SectionHeader
            index="07"
            title="Achievements & Certifications."
            subtitle="Verified links to each certificate."
          />

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            {certs.map((c, i) => {
              const category = getCategory(c.label);

              return (
                <motion.li key={c.label + i} variants={itemVariants}>
                  <motion.a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -4,
                      boxShadow:
                        "0 18px 40px rgba(0,0,0,0.18), 0 6px 16px rgba(255,255,255,0.10)",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80
                               bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
                               flex flex-col gap-2 transition-transform duration-300"
                  >
                    {/* Category chip */}
                    <span
                      className="px-2 py-[2px] text-[11px] rounded-full font-medium
                                 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit"
                    >
                      {category}
                    </span>

                    {/* Certification Label + Link Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-[15px] leading-snug">
                        {c.label}
                      </span>
                      <ExternalLink size={15} className="opacity-70 hover:opacity-100 transition" />
                    </div>
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}
