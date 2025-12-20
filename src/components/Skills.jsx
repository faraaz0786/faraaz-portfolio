import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Code2, Boxes, Database, Sparkles, Circle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Category color accent mapping
const accent = {
  languages:
    "from-blue-400/40 to-blue-100/0 dark:from-blue-200/25 dark:to-transparent",
  technologies:
    "from-emerald-400/40 to-emerald-100/0 dark:from-emerald-200/25 dark:to-transparent",
  database:
    "from-amber-400/40 to-amber-100/0 dark:from-amber-200/25 dark:to-transparent",
  others:
    "from-rose-400/40 to-rose-100/0 dark:from-rose-200/25 dark:to-transparent",
};

const SKILL_GROUPS = [
  {
    key: "languages",
    icon: Code2,
    title: "Languages",
    items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    key: "technologies",
    icon: Boxes,
    title: "Technologies",
    items: ["Node.js", "Django", "Java", "Python"],
  },
  {
    key: "database",
    icon: Database,
    title: "Database",
    items: ["MongoDB", "Firebase", "Git", "Docker"],
  },
  {
    key: "others",
    icon: Sparkles,
    title: "Others",
    items: ["Arduino", "Twilio", "LaTeX"],
  },
];

function SkillCard({ group, isActive, isDimmed, setHoveredKey }) {
  const Icon = group.icon;

  // Magnetic cursor motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const deltaX = e.clientX - cardCenterX;
    const deltaY = e.clientY - cardCenterY;

    // Small factor to avoid over-dramatic movement
    x.set(deltaX * 0.08);
    y.set(deltaY * 0.08);
  };

  const handleMouseEnter = () => {
    setHoveredKey(group.key);
  };

  const handleMouseLeave = () => {
    setHoveredKey(null);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial={{ height: 120 }}
      animate={{
        height: isActive ? 260 : 120,
        opacity: isDimmed ? 0.45 : 1,
        filter: isDimmed ? "blur(1.2px)" : "blur(0px)",
        scale: isDimmed ? 0.97 : 1,
      }}
      whileHover={{
        scale: 1.06,
        rotateX: -3,
        rotateY: 3,
        boxShadow:
          "0 22px 40px rgba(0,0,0,0.15), 0 10px 22px rgba(255,255,255,0.25)",
      }}
      whileTap={{ scale: 1.01 }}
      style={{
        transformPerspective: 900,
        x: springX,
        y: springY,
      }}
      className="group relative w-[250px] lg:w-[260px]
                 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
                 border border-slate-300 dark:border-slate-700
                 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.3,.7,.4,1.4)]
                 flex flex-col items-center justify-start py-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Color Accent on Hover */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-gradient-to-b ${accent[group.key]} duration-500`}
      />

      {/* Icon + Title */}
      <div className="flex flex-col items-center gap-2 mt-1 select-none">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl
                     bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700
                     shadow-sm transition-all duration-300"
        >
          <Icon className="h-6 w-6 text-gray-700 dark:text-slate-200 transition-colors duration-300" />
        </div>
        <h3 className="text-[16px] font-semibold text-slate-800 dark:text-slate-100">
          {group.title}
        </h3>
      </div>

      {/* Skills with icon bullets */}
      <ul
        className="mt-4 text-sm text-gray-700 dark:text-gray-300 opacity-0 translate-y-3 
                   max-h-0 overflow-hidden 
                   group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0 
                   transition-all duration-300 flex flex-col gap-1.5 items-start px-4"
      >
        {group.items.map((item, idx) => (
          <li
            key={item}
            style={{ transitionDelay: `${idx * 60}ms` }}
            className="flex items-center gap-2 transition-all duration-300"
          >
            <Circle className="w-2.5 h-2.5 fill-gray-800 dark:fill-white opacity-80" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <section id="skills" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="03"
            title="Skills."
            subtitle="Tools and technologies I already work with."
          />

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {SKILL_GROUPS.map((group) => {
              const isActive = hoveredKey === group.key;
              const isDimmed = hoveredKey !== null && hoveredKey !== group.key;

              return (
                <SkillCard
                  key={group.key}
                  group={group}
                  isActive={isActive}
                  isDimmed={isDimmed}
                  setHoveredKey={setHoveredKey}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
