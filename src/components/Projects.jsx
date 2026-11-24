import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">

      <div className="container">

        <div className="section-heading">

          <p className="section-eyebrow">
            WHAT I'VE BEEN BUILDING
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-subtitle">
            A selection of applications and projects that demonstrate
            my development journey and practical programming experience.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}