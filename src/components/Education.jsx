// src/components/Education.jsx
import { SITE } from "../data/site";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { education } = SITE;

  return (
    <section
      id="education"
      className="section-block scroll-mt-28 font-body pb-24 md:pb-28 mb-20"
      // ↑ extra bottom padding + margin pushes next section further down
    >
      <SectionHeader
        index="02"
        title="Education."
        subtitle="Academic foundation and focus."
      />

      <div className="card p-6 mt-6">
        <div className="font-semibold text-lg font-display">
          {education.degree}
        </div>
        <div className="text-slate-500">
          {education.institute} • {education.years}
        </div>
        <div className="mt-1 text-slate-500">{education.gpa}</div>
      </div>

      {/* subtle separator so the end of Education feels finished */}
      <div className="mt-12 border-t border-slate-800/50" aria-hidden="true" />
    </section>
  );
}
