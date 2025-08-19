import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { SITE } from "../data/site";
import ThemeToggle from "./ThemeToggle";

// All sections you want tracked by the scroll-spy:
const SECTION_IDS = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "publications",
  "certifications",
  "contact",
];

function NavLink({ href, children, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "px-3 py-2 rounded-lg transition",
        "hover:bg-slate-100 dark:hover:bg-slate-800",
        active ? "text-slate-900 dark:text-white font-semibold" : "text-slate-600 dark:text-slate-300",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const burgerBtnRef = useRef(null);

  // ---- Scroll-spy (IntersectionObserver)
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the most visible section near the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveId(visible[0].target.id);
        } else {
          // Fallback: find section closest to top
          let closest = sections[0];
          let min = Infinity;
          for (const s of sections) {
            const rect = s.getBoundingClientRect();
            const d = Math.abs(rect.top);
            if (d < min) {
              min = d;
              closest = s;
            }
          }
          if (closest) setActiveId(closest.id);
        }
      },
      {
        // Trigger when the top ~25% of a section hits the viewport
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ---- Body scroll lock while drawer is open
  useEffect(() => {
    const original = document.documentElement.style.overflow;
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = original || "";
    }
    return () => {
      document.documentElement.style.overflow = original || "";
    };
  }, [open]);

  // ---- Focus trap inside the drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    // Focus first link on open
    const focusables = drawerRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length) {
      focusables[0].focus();
      firstFocusableRef.current = focusables[0];
      lastFocusableRef.current = focusables[focusables.length - 1];
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        // restore focus to burger button
        requestAnimationFrame(() => burgerBtnRef.current?.focus());
      }
      if (e.key === "Tab" && focusables.length) {
        // Simple loop
        if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close drawer on route (hash) click
  const handleNavClick = useCallback(() => {
    setOpen(false);
    // optionally smooth scroll is already enabled via html.scroll-smooth
  }, []);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="font-display tracking-tight text-lg">
          <span className="font-bold">Faraaz</span><span className="opacity-60">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-body">
          <NavLink href="#home" active={activeId === "home"}>Home</NavLink>
          <NavLink href="#about" active={activeId === "about"}>About</NavLink>
          <NavLink href="#education" active={activeId === "education"}>Education</NavLink>
          <NavLink href="#skills" active={activeId === "skills"}>Skills</NavLink>
          <NavLink href="#projects" active={activeId === "projects"}>Projects</NavLink>
          <NavLink href="#experience" active={activeId === "experience"}>Experience</NavLink>
          <NavLink href="#publications" active={activeId === "publications"}>Publications</NavLink>
          <NavLink href="#certifications" active={activeId === "certifications"}>Certifications</NavLink>
          <NavLink href="#contact" active={activeId === "contact"}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl text-white btn-gradient"
          >
            <Download size={16} /> Resume
          </a>
          <ThemeToggle />
          {/* Burger */}
          <button
            ref={burgerBtnRef}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      {/* Drawer (right) */}
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        className={[
          "fixed top-0 right-0 h-full w-[84%] max-w-sm md:hidden",
          "bg-white dark:bg-slate-950 shadow-2xl border-l border-slate-200 dark:border-slate-800",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="font-display text-lg">Menu</div>
          <button
            onClick={() => {
              setOpen(false);
              burgerBtnRef.current?.focus();
            }}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 flex flex-col text-base font-body">
          <NavLink href="#home" active={activeId === "home"} onClick={handleNavClick}>Home</NavLink>
          <NavLink href="#about" active={activeId === "about"} onClick={handleNavClick}>About</NavLink>
          <NavLink href="#education" active={activeId === "education"} onClick={handleNavClick}>Education</NavLink>
          <NavLink href="#skills" active={activeId === "skills"} onClick={handleNavClick}>Skills</NavLink>
          <NavLink href="#projects" active={activeId === "projects"} onClick={handleNavClick}>Projects</NavLink>
          <NavLink href="#experience" active={activeId === "experience"} onClick={handleNavClick}>Experience</NavLink>
          <NavLink href="#publications" active={activeId === "publications"} onClick={handleNavClick}>Publications</NavLink>
          <NavLink href="#certifications" active={activeId === "certifications"} onClick={handleNavClick}>Certifications</NavLink>
          <NavLink href="#contact" active={activeId === "contact"} onClick={handleNavClick}>Contact</NavLink>

          <a
            href={SITE.resumeUrl}
            download
            className="mt-3 inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl text-white btn-gradient"
            onClick={handleNavClick}
          >
            <Download size={16} /> Resume
          </a>
        </nav>
      </aside>
    </header>
  );
}
