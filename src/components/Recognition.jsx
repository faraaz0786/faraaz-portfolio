import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";

export default function Recognition() {
  const recognition = [
    {
      title: "Letter of Recommendation (HOD)",
      issuer: "Shish Ahmad",
      url: "https://drive.google.com/file/d/1mUWonGSrj-Xa6BQs8W4-ybXC0XVnFHYO/view",
    },
    {
      title: "Letter of Recommendation",
      issuer: "Manish M. Tripathi",
      url: "https://drive.google.com/file/d/1FAV7VgbrLdQN-pjW-AFn_giEtz3Jtnnd/view",
    },
    {
      title: "Letter of Recommendation",
      issuer: "Mohd Haroon",
      url: "https://drive.google.com/file/d/1QEYJvDTK7iGa04Bx5PqFeYMpc7PgSfWq/view",
    },
    {
      title: "Letter of Appreciation",
      issuer: "Mrs. Saleha Mariyam",
      url: "https://drive.google.com/file/d/1moWkrgXiJl-jl-Ywy9OW13gLXxhb_O75/view",
    },
  ];

  return (
    <section id="recognition" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">

          <SectionHeader
            index="08"
            title="Recognition."
            subtitle="Letters of Recommendation & Appreciation."
          />

          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {recognition.map((item) => (
              <li key={item.title + item.issuer}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card p-4 hover:-translate-y-0.5 transition block"
                  aria-label={`Open document: ${item.title}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.title}</span>
                    <ExternalLink size={16} className="opacity-70" />
                  </div>

                  {item.issuer && (
                    <p className="text-sm opacity-70 mt-1">{item.issuer}</p>
                  )}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
