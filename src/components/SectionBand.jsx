// Full-width section with its own background, but content centered in a container
export default function SectionBand({ id = "", children }) {
    return (
      <section
        id={id}
        className="
          relative py-16 md:py-20
          bg-white dark:bg-slate-950
          border-t border-slate-200/70 dark:border-slate-800
          bg-grid
        "
      >
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
  