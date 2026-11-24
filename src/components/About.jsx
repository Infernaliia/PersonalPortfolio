export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">

        <div className="section-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-subtitle">
            A little about my background, interests and journey into
            software development.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-intro">
            <h3>
              Building my path in software development.
            </h3>

            <p>
              I'm an full Stack C# Web Developer with AI-powered development student with an interest
              in building modern applications and solving practical
              problems through technology.
            </p>

            <p>
              Through my studies and personal projects, I'm developing
              my skills in programming, frontend development, backend
              development and software architecture.
            </p>

            <p>
              I enjoy learning how different technologies work together
              and turning ideas into functional applications.
            </p>
          </div>

          <div className="about-highlights">

            <article className="highlight-card">
              <div className="highlight-icon">01</div>

              <div>
                <h4>Continuous Learning</h4>
                <p>
                  Always exploring new technologies and improving
                  my development skills.
                </p>
              </div>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">02</div>

              <div>
                <h4>Practical Development</h4>
                <p>
                  Learning by building applications and working
                  through real programming challenges.
                </p>
              </div>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">03</div>

              <div>
                <h4>Problem Solving</h4>
                <p>
                  Breaking down complex problems into smaller,
                  manageable solutions.
                </p>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
}