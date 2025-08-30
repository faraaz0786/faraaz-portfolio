// src/App.jsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications"; // ← fixed
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import SectionBand from "./components/SectionBand";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
// import Background3D from "./components/Background3D";

export default function App() {
  // Respect saved theme or OS preference on first load
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO sits on its own, then a single global separator */}
      <main>
        <Hero />

        <hr className="section-sep" />
        <About />

        <hr className="section-sep" />
        <Education />

        <hr className="section-sep" />
        <Skills />

        <hr className="section-sep" />
        <Projects />

        <hr className="section-sep" />
        <Experience />

        <hr className="section-sep" />
        <Publications />

        <hr className="section-sep" />
        <Certifications />
      </main>

      {/* Contact as full-width band */}
      <SectionBand id="contact" className="contact-band">
      <Contact />
      </SectionBand>
      {/* <Background3D />
      <Background3D /> */}
      <BackToTop />
      <Footer />
    </div>
  );
}
