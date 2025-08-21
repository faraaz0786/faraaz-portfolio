// src/components/Footer.jsx
import { SITE } from "../data/site"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="block text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
    >
      {children}
    </a>
  )

  const IconBtn = ({ href, children, label, hoverClass = "" }) => (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={`h-10 w-10 rounded-full grid place-items-center border 
        border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 
        transition duration-300 group hover:shadow-lg hover:scale-110`}
    >
      {/* NOTE: hoverClass must contain full, static Tailwind classes */}
      <div className={`transition duration-300 ${hoverClass}`}>
        {children}
      </div>
    </a>
  )

  return (
    <footer className="mt-20">
      {/* Top social band */}
      <div className="py-8 bg-white/60 dark:bg-slate-950/40 backdrop-blur">
        <div className="container flex items-center justify-center gap-5">
          {/* Email → red on hover */}
          <IconBtn
            href={`mailto:${SITE.email}`}
            label="Email"
            hoverClass="group-hover:text-red-500"
          >
            <Mail size={18} />
          </IconBtn>

          {/* LinkedIn → LinkedIn blue on hover */}
          <IconBtn
            href={SITE.linkedin}
            label="LinkedIn"
            hoverClass="group-hover:text-[#0A66C2]"
          >
            <Linkedin size={18} />
          </IconBtn>

          {/* GitHub → black on light, white on dark */}
          <IconBtn
            href={SITE.github}
            label="GitHub"
            hoverClass="group-hover:text-black dark:group-hover:text-white"
          >
            <Github size={18} />
          </IconBtn>

          {/* Instagram → brand pink on hover */}
          <IconBtn
            href={SITE.instagram}
            label="Instagram"
            hoverClass="group-hover:text-pink-500"
          >
            <Instagram size={18} />
          </IconBtn>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-white dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800">
        <div className="container py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / summary */}
          <div className="space-y-3">
            <div className="font-display text-xl">
              Faraaz<span className="opacity-60">.Kalim</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Full Stack Developer — Java, Python, React, Node.js. Building scalable
              apps with clean code & creative solutions.
            </p>
            <div className="text-sm">
              <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold mb-3">Navigation</div>
            <nav className="space-y-2">
              <LinkItem href="#home">Home</LinkItem>
              <LinkItem href="#about">About</LinkItem>
              <LinkItem href="#education">Education</LinkItem>
              <LinkItem href="#skills">Skills</LinkItem>
              <LinkItem href="#projects">Projects</LinkItem>
              <LinkItem href="#experience">Experience</LinkItem>
              <LinkItem href="#publications">Publications</LinkItem>
              <LinkItem href="#certifications">Certifications</LinkItem>
              <LinkItem href="#contact">Contact</LinkItem>
            </nav>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold mb-3">Services</div>
            <div className="space-y-2">
              <LinkItem href={SITE.resumeUrl} download>Download Resume</LinkItem>
              <LinkItem href={SITE.github} target="_blank">Open Source</LinkItem>
              {/* Removed: Feedback / Me as requested */}
            </div>
          </div>

          {/* Activity */}
          <div>
            <div className="font-semibold mb-3">Activity</div>
            <div className="space-y-2">
              <LinkItem href="#projects">IoT & Web Projects</LinkItem>
              <LinkItem href="#experience">Academic Work</LinkItem>
              <LinkItem href="#certifications">Certifications</LinkItem>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/70 dark:border-slate-800">
          <div className="container py-6 text-xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="font-mono">© {year} {SITE.name}. All rights reserved.</div>
            <div className="opacity-70">Made with React & Tailwind · Hosted on Vercel</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
