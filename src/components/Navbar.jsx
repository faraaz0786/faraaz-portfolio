// src/components/Navbar.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { SITE } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "publications",
  "certifications",
  "recognition",
  "contact",
];

function NavLink({ href, children, active, onClick, className = "" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? "is-active" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);
  const burgerBtnRef = useRef(null);

  /* Scroll spy */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) return setActiveId(visible[0].target.id);

        let closest = sections[0];
        let min = Infinity;
        for (const s of sections) {
          const d = Math.abs(s.getBoundingClientRect().top);
          if (d < min) { min = d; closest = s; }
        }
        setActiveId(closest.id);
      },
      { root: null, rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Subtle on-scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock page scroll while mobile drawer is open */
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.overflow;
    if (open) html.style.overflow = "hidden";
    return () => { html.style.overflow = prev || ""; };
  }, [open]);

  /* Close mobile drawer on nav click */
  const handleNavClick = useCallback(() => setOpen(false), []);

  /* Close on Esc / click-outside (mobile) */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      {/* Glass container */}
      <div className="nav-chrome">
        <div className="nav-inner nav-pad-y">
          {/* Brand */}
          <a href="#home" className="font-display tracking-tight text-lg">
            <span className="font-bold">Faraaz</span>
            <span className="opacity-60">.Kalim</span>
          </a>

          {/* Desktop nav (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-body">
            {SECTION_IDS.map((id) => (
              <NavLink
                key={id}
                href={`#${id}`}
                active={activeId === id}
                onClick={handleNavClick}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={SITE.resumeUrl}
              download
              className="nav-resume hidden sm:inline-flex"   /* hide CTA on very small if you want */
            >
              <Download size={16} /> Resume
            </a>
            <ThemeToggle />

            {/* Burger — strictly mobile only */}
            <button
              ref={burgerBtnRef}
              type="button"
              className="inline-flex md:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : "false"}
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet (never rendered on md+) */}
      <div className={`nav-sheet ${open ? "open" : ""}`}>
        <aside
          ref={panelRef}
          className={`nav-sheet-panel ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between px-2 py-1">
            <span className="font-display font-semibold">Menu</span>
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mt-3 grid gap-1 text-sm font-body">
            {SECTION_IDS.map((id) => (
              <NavLink
                key={id}
                href={`#${id}`}
                active={activeId === id}
                onClick={handleNavClick}
                className="px-2 py-2"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 grid gap-2">
            <a href={SITE.resumeUrl} download className="nav-resume justify-center">
              <Download size={16} /> Resume
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
