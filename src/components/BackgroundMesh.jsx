// src/components/BackgroundMesh.jsx
import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * Minimal, calm mesh:
 * - Very few nodes
 * - Subtle links
 * - Slow motion
 * - Theme-aware colors (light/dark)
 * - Responsive reductions for tablet/mobile
 */
export default function BackgroundMesh() {
  // track current theme so we can recolor cleanly
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // watch <html class="dark"> changes (your ThemeToggle flips this)
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // palette per theme
  const colors =
    theme === "dark"
      ? {
          node: "#cbd5e1",   // slate-300 (soft nodes)
          link: "#94a3b8",   // slate-400 (subtle lines on dark)
          linkOpacity: 0.16,
        }
      : {
          node: "#C97D60",   // muted terracotta (fits sand & clay)
          link: "#D6CFC9",   // **Warm Taupe** — requested color for lines
          linkOpacity: 0.28, // a bit stronger so it shows on cream backgrounds
        };

  // minimal options (memoized) — key changes on theme to remount cleanly
  const options = useMemo(
    () => ({
      fpsLimit: 60,
      detectRetina: true,
      pauseOnBlur: true,
      fullScreen: false,                  // we size with CSS (.mesh-wrap)
      background: { color: "transparent" },

      particles: {
        number: {
          value: 26,                      // ✦ very few points on desktop
          density: { enable: true, area: 1200 },
        },
        color: { value: colors.node },
        shape: { type: "circle" },
        opacity: { value: 0.55 },
        size: { value: { min: 1, max: 2 } },

        links: {
          enable: true,
          color: colors.link,
          distance: 155,                  // keep triangles wide (less crossing)
          opacity: colors.linkOpacity,    // visibility tuned for light mode
          width: 0.75,
          triangles: { enable: false },   // no filled faces — stays airy
        },

        move: {
          enable: true,
          speed: 0.3,                     // ✦ slow, elegant drift
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },

      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" }, // light “magnet” effect
          onClick: { enable: false },
          resize: true,
        },
        modes: {
          // brief brighter link on hover, capped for subtlety
          grab: { distance: 130, links: { opacity: Math.min(0.6, colors.linkOpacity + 0.22) } },
        },
      },

      // progressively simpler on smaller screens
      responsive: [
        {
          maxWidth: 1024,
          options: {
            particles: {
              number: { value: 18 },
              links: { distance: 145, opacity: Math.max(0.18, colors.linkOpacity - 0.06) },
              move: { speed: 0.28 },
            },
          },
        },
        {
          maxWidth: 640,
          options: {
            particles: {
              number: { value: 11 },
              links: { distance: 130, opacity: Math.max(0.14, colors.linkOpacity - 0.1) },
              move: { speed: 0.25 },
            },
          },
        },
      ],
    }),
    // re-create options when theme changes so colors update instantly
    [colors.link, colors.linkOpacity, colors.node]
  );

  return (
    <div className="mesh-wrap" aria-hidden>
      {/* key={theme} forces a clean remount when light/dark flips */}
      <Particles id="mesh" init={loadSlim} options={options} key={theme} />
    </div>
  );
}
