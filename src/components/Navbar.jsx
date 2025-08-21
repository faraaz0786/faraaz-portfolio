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
  "contact",
];

function NavLink({ href, children, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? "is-active" : ""}`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const burgerBtnRef = useRef(null);

  // Scroll spy
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveId(visible[0].target.id);
          return;
        }
        let closest = sections[0];
        let min = Infinity;
        for (const s of sections) {
          const d = Math.abs(s.getBoundingClientRect().top);
          if (d < min) {
            min = d;
            closest = s;
          }
        }
        if (closest) setActiveId(closest.id);
      },
      { root: null, rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Glass intensifies on scroll (soft drop shadow)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : original || "";
    return () => {
      document.documentElement.style.overflow = original || "";
    };
  }, [open]);

  const handleNavClick = useCallback(() => setOpen(false), []);

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      <div
        className="
          mx-auto max-w-[95%] lg:max-w-[100%]
          flex items-center justify-between
          py-3 px-6 pt-2xl glass shadow-soft"
      >
        {/* Logo */}
        <a href="#home" className="font-display tracking-tight text-lg ml-9">
          <span className="font-bold">Faraaz</span>
          <span className="opacity-60">.Kalim</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 text-sm font-body">
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
        <div className="flex items-center gap-3 mr-9">
          <a
            href={SITE.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-2xl text-white btn-gradient shadow-soft"
          >
            <Download size={16} /> Resume
          </a>
          <ThemeToggle />
          {/* Mobile burger */}
          <button
            ref={burgerBtnRef}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
