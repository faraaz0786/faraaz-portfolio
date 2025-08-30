// src/components/BackToTop.jsx
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.max(0, (y / h) * 100)) : 0;
      setProgress(pct);
      // show once you’ve scrolled a bit, or near the very bottom
      setVisible(y > 600 || y + window.innerHeight >= document.documentElement.scrollHeight - 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Ring (conic) with tiny angle offset to remove the seam.
  // TWEAK color: use --accent-* or a fixed rgb/hex if you want.
  const ringBg = `conic-gradient(
    from .8deg,
    rgb(var(--accent-from)) 0% ${progress}%,
    rgba(148,163,184,0.25) ${progress}% 100%
  )`;

  return (
    <div
      className={[
        // Position — respects safe areas on iOS
        "fixed z-[60]",
        "right-[calc(1rem+env(safe-area-inset-right))]",
        "bottom-[calc(1.25rem+env(safe-area-inset-bottom))]",
        "md:right-[calc(2rem+env(safe-area-inset-right))]",
        "md:bottom-[calc(2rem+env(safe-area-inset-bottom))]",
        // Show/hide
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      ].join(" ")}
    >
      <div className="group relative flex items-center gap-2">
        {/* Optional label (desktop only) */}
        <span
          className={[
            "hidden md:inline-block text-xs font-medium rounded-full px-3 py-1",
            "bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/70 backdrop-blur",
            "text-slate-700 dark:text-slate-200 shadow-sm",
            "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
            "transition-all duration-300"
          ].join(" ")}
        >
          Back to top
        </span>

        {/* Progress ring + button */}
        <div
          // TWEAK ring thickness via p-[2px]
          className="p-[2px] rounded-full shadow-[0_4px_14px_rgba(0,0,0,.12)]"
          style={{ backgroundImage: ringBg }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={[
              // TWEAK button size via h-9 w-9 / md:h-10 md:w-10
              "h-9 w-9 md:h-10 md:w-10",
              "rounded-full grid place-items-center",
              // TWEAK fill colors if desired
              "bg-white/75 dark:bg-slate-950/60 backdrop-blur",
              "border border-slate-200/70 dark:border-slate-800",
              "text-slate-800 dark:text-slate-100",
              "transition-transform duration-300",
              "hover:scale-[1.05] focus:scale-[1.05] focus:outline-none",
              "focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--accent-to))] focus:ring-offset-white dark:focus:ring-offset-slate-950"
            ].join(" ")}
          >
            <ChevronUp size={20} className="translate-y-[1px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
