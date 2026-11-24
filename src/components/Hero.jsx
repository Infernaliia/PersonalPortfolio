export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">

        <div className="hero-copy">

          <p className="eyebrow">
            <span className="eyebrow-line" />
            ASPIRING FULL-STACK DEVELOPER
          </p>

          <h1>
            Turning ideas into
            <span> thoughtful digital experiences.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Infernaliia</strong>. I'm a developer in training that is
            passionate about building useful applications and exploring
            modern web technologies.
          </p>

          <p className="hero-description secondary-description">
            Currently developing my skills in C#, .NET, JavaScript,
            React and modern frontend development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <span>↗</span>
            </a>

            <a href="#about" className="button button-secondary">
              More about me <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="availability-dot" />
              Learning. Building. Improving.
            </span>

            <span>Frontend · Backend · Problem solving</span>
          </div>

        </div>

        <div className="hero-visual" aria-hidden="true">

          <div className="visual-glow" />

          <div className="code-window">

            <div className="window-topbar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="window-file">developer.js</span>
              <span className="window-menu">···</span>
            </div>

            <div className="code-content">

              <div className="code-line">
                <span className="code-number">01</span>
                <span>
                  <span className="code-keyword">const</span> developer ={" "}
                  <span className="code-punctuation">{"{"}</span>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">02</span>
                <span>
                  &nbsp;&nbsp;name:{" "}
                  <span className="code-string">"Infernaliia"</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">03</span>
                <span>
                  &nbsp;&nbsp;role:{" "}
                  <span className="code-string">"Developer"</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">04</span>
                <span>
                  &nbsp;&nbsp;focus:{" "}
                  <span className="code-string">"Full-stack"</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">05</span>
                <span>
                  &nbsp;&nbsp;skills:{" "}
                  <span className="code-punctuation">[</span>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">06</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"C#"</span>,{" "}
                  <span className="code-string">"React"</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">07</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"JavaScript"</span>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">08</span>
                <span>
                  &nbsp;&nbsp;<span className="code-punctuation">]</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">09</span>
                <span>
                  &nbsp;&nbsp;mindset:{" "}
                  <span className="code-string">"Always learning"</span>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">10</span>
                <span>
                  <span className="code-punctuation">{"};"}</span>
                </span>
              </div>

            </div>

            <div className="code-window-footer">
              <span className="availability-dot" />
              Always learning, always building
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}