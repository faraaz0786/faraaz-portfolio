import { label } from "framer-motion/client";
import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";

export default function Certifications() {
  const certs = [
    { label: "Data Science & Artificial Intelligence – IBM/Integral SkillsNetwork", url: "https://integral.skillsnetwork.site/certificates/dbd893e4-5b67-47eb-bcfd-3cca239fbd0d" },
    { label: "Data Fundamentals – IBM", url: "https://www.credly.com/go/iVBJ2r6q" },
    { label: "Cybersecurity Fundamentals – IBM SkillsBuild", url: "https://www.credly.com/go/SlSsn6OM" },
    { label: "Data Science 101 – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/39ce0706d71947b487c38608c051abbb" },
    { label: "Digital Analytics & Regression – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/5ac1a1618eb845379b88de4834cfb6e1" },
    { label: "Business Intelligence – IBM", url: "https://courses.integral.skillsnetwork.site/certificates/99d49e46bb1f4fc497986610f8661c1b" },
    { label: "Web Development Training – Internshala", url: "https://drive.google.com/file/d/1pfxZAP2KAgCrm0OYndpSmHKn5yfrxp1L/view?usp=drive_link" },
    { label: "Machine Learning with Python – IBM/Integral SkillsNetwork", url: "https://courses.integral.skillsnetwork.site/certificates/ba9e8cb3365e4232b9dbda9e320f450d" },
  ];

  return (
    <>

      {/* ===================== CERTIFICATIONS ===================== */}
      <section id="certifications" className="section-block scroll-mt-28 font-body">
        <div className="section-surface">
          <div className="wrap">
            <SectionHeader
              index="07"
              title="Achievements & Certifications."
              subtitle="Verified links to each certificate."
            />

            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {certs.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card p-4 flex items-center justify-between hover:-translate-y-0.5 transition"
                    aria-label={`Open certificate: ${c.label}`}
                  >
                    <span>{c.label}</span>
                    <ExternalLink size={16} className="opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
