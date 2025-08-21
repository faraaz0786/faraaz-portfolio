// src/components/Education.jsx
import { SITE } from "../data/site";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { education } = SITE;

  return (
    <section id="education" className="section-block scroll-mt-28 font-body">
      <div className="wrap">
        <SectionHeader
          index="02"
          title="Education."
          subtitle="Academic foundation and focus."
        />

        <div className="card p-6 mt-6">
          <div className="font-semibold text-lg md:text-xl font-display">
            {education.degree}
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            {education.institute} • {education.years}
          </div>
          <div className="mt-1 text-slate-500 dark:text-slate-400">{education.gpa}</div>
        </div>
      </div>
    </section>
  );
}
