export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">

        <div className="section-heading">
          <p className="section-eyebrow">MY BACKGROUND</p>

          <h2>
            Education & <span>Experience</span>
          </h2>

          <p className="section-subtitle">
            My educational journey and practical experience
            developing software applications.
          </p>
        </div>

        <div className="timeline">

          <article className="timeline-item">

            <div className="timeline-marker" />

            <div className="timeline-content">

              <span className="timeline-date">
                CURRENTLY STUDYING
              </span>

              <h3>Full Stack C# .NET Web Development with AI-powered development</h3>

              <h4>Lexicon Malmö</h4>

              <p>
                Developing knowledge in programming, software
                development, web technologies, databases and
                modern application architecture.
              </p>

              <div className="timeline-tags">
                <span>C#</span>
                <span>.NET</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>

            </div>
          </article>

          <article className="timeline-item">

            <div className="timeline-marker" />

            <div className="timeline-content">

              <span className="timeline-date">
                PRACTICAL PROJECT EXPERIENCE
              </span>

              <h3>Application Development</h3>

              <h4>Personal & Educational Projects</h4>

              <p>
                Building practical applications while developing
                skills in object-oriented programming, data
                management, validation, testing and user interface
                development.
              </p>

              <div className="timeline-tags">
                <span>OOP</span>
                <span>JSON</span>
                <span>LINQ</span>
                <span>Git</span>
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}