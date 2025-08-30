import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-block scroll-mt-28 font-body">
      <div className="section-surface">
        <div className="wrap">
          <SectionHeader
            index="01"
            title="About Me."
            subtitle="Professional yet approachable."
          />

          <div className="card p-6 leading-relaxed mt-6">
            <p>
              I'm Mohd Faraaz Kalim, a passionate software developer with a solid
              background in computer science and emerging technologies. I recently
              completed my B.Tech in Computer Science and Engineering with IBM
              (Data Science & Artificial Intelligence) and have gained both academic
              and professional experience in full-stack development/deployment,
              cloud computing and application software inspired by analytics. My
              final-year project, <em>Real-Time Monitoring and Data Management for
              Smart Meters Using IoT and Cloud Technologies</em>, is one such
              example in which I combine electronic hardware (sensors) and software
              (applications) to create flexible, customer-centric solutions.
            </p>

            <p className="mt-3">
              My technical expertise includes Python, Java, Django, Node.js,
              React.js, MongoDB, and cloud platforms, with additional exposure to
              IoT hardware such as ESP8266 and energy monitoring sensors. I’m
              particularly passionate about leveraging AI, data science, and modern
              web technologies to build solutions that bridge the gap between
              theoretical knowledge and real-world applications. Beyond academics,
              I’m committed to continuous learning, problem-solving, and
              contributing to projects that drive efficiency, innovation, and
              meaningful user experiences.
            </p>

            <p className="mt-3">
              I strive to find opportunities focused on growth and flexibility,
              where I can engage my skills, collaborate with different teams, and
              pursue meaningful projects across software engineering, artificial
              intelligence, and cloud-based solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
