import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionBand from "./components/SectionBand"; // wrapper for a full-width contact band
import BackToTop from "./components/BackToTop";

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

      {/* Main content in a centered container */}
      <main className="container">
        <section id="home" className="section">
          <Hero />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="publications" className="section">
          <Publications />
        </section>

        <section id="certifications" className="section">
          <Certifications />
        </section>
        {/* NOTE: We intentionally do NOT render Contact here */}
      </main>

      {/* Contact sits in its own full-width band (with its own container inside) */}
      <SectionBand id="contact">
        <Contact />
      </SectionBand>

      <BackToTop /> 

      <Footer />
    </div>
  );
}
