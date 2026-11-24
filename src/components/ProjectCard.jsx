export default function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className={`project-visual ${project.variant}`}>

        <div className="project-visual-top">
          <span>PROJECT / {project.number}</span>
          <span
              className={`project-status ${
                project.status === "In Progress"
                  ? "project-status--progress"
                  : ""
              }`}
            >
              {project.status}
            </span>
          </div>

        <div className="project-visual-content">
          <span className="project-symbol">
            {project.number}
          </span>

          <h3>{project.title}</h3>

          <p>{project.category}</p>
        </div>

        <span className="project-visual-bottom">
          PERSONAL DEVELOPMENT PROJECT
        </span>

      </div>

      <div className="project-information">

        <div className="project-title-row">
          <div>
            <span className="project-number">
              PROJECT {project.number}
            </span>

            <h3>{project.title}</h3>
          </div>

          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <span key={highlight}>
              <span className="highlight-check">✓</span>
              {highlight}
            </span>
          ))}
        </div>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository ↗
            </a>
          ) : (
            <span className="project-link-pending">
              GitHub link to be added
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

    </article>
  );
}