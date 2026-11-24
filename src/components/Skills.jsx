const skillCategories = [
  {
    title: "Programming Languages",
    description: "Programming languages used in my development journey.",
    skills: [
      "C#",
      "JavaScript",
      "Python",
    ],
  },

  {
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Responsive Design",
    ],
  },

  {
    title: "Backend & Application Development",
    description: "Application logic, data handling and software development.",
    skills: [
      ".NET",
      "OOP",
      "JSON",
      "LINQ",
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Development environments and version control.",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <div className="section-heading">
          <p className="section-eyebrow">
            MY TECHNICAL TOOLKIT
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p className="section-subtitle">
            Technologies, programming languages and tools
            I'm using and continuously developing my skills in.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <article
              className="skill-card"
              key={category.title}
            >

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-tags">

                {category.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}