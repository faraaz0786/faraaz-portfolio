// src/components/SectionHeader.jsx
export default function SectionHeader({
    index = "01",               // e.g. "01", "02", ...
    title = "",
    subtitle = "",              // optional
  }) {
    return (
      <header className="mb-6 md:mb-8 relative">
        {/* Ghost number behind the title */}
        <span
          aria-hidden
          className="
            pointer-events-none select-none
            absolute -left-1 -top-6 md:-top-10
            text-[72px] md:text-[120px] leading-none font-black
            text-slate-900/5 dark:text-white/5
          "
        >
          {index}
        </span>
  
        {/* Title with accent underline */}
        <h2
          className="
            section-title font-display relative
            pl-16 md:pl-24
            after:content-[''] after:absolute
            after:left-16 md:after:left-24
            after:-bottom-2 after:h-1 after:w-24 md:after:w-32
            after:rounded-full
            after:[background-image:linear-gradient(90deg,rgb(var(--accent-from)),rgb(var(--accent-via)),rgb(var(--accent-to)))]
          "
        >
          {title}
        </h2>
  
        {subtitle && (
          <p className="section-subtitle mt-2 pl-16 md:pl-24">{subtitle}</p>
        )}
      </header>
    );
  }
  