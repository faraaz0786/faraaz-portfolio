import SectionHeader from "./SectionHeader";

export default function Experience() {
  const items = [
    {
      role: "Web Development Training (Internshala)",
      time: "2024",
      desc: "Developed PG-Life project; focused on responsive UI and backend integration."
    },
    {
      role: "Academic/Research Contributions",
      time: "2025",
      desc: "IoT-based smart metering papers (ICBDAIT – in progress; DSAI – accepted in Springer)."
    }
  ];

  return (
    <section id="experience" 
    className="section-block scroll-mt-28 font-body mb-16">

      <SectionHeader index="05" title="Experience." subtitle="Internships, freelance & academic work." />

      <div className="relative mt-8">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] accent-line opacity-70" />
        <div className="space-y-6">
          {items.map((e, idx) => (
            <div key={idx} className="relative pl-10 md:pl-14">
              <div className="absolute left-[9px] md:left-[19px] top-1.5 h-3 w-3 rounded-full bg-white dark:bg-slate-950 ring-4 ring-[rgba(20,184,166,.35)]" />
              <div className="card p-6">
                <div className="text-sm text-slate-500">{e.time}</div>
                <div className="font-semibold text-lg font-display">{e.role}</div>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
