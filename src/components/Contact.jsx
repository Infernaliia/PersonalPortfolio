const contactDetails = {
  email: null,
  github: "https://github.com/Infernaliia",
  linkedin: null,
};

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-content">

          <p className="section-eyebrow">
            LET'S CONNECT
          </p>

          <h2>
            Have a project or opportunity in mind?
          </h2>

          <p className="contact-description">
            I'm interested in connecting with developers,
            learning from new experiences and exploring
            opportunities to grow within the technology industry.
          </p>

          <a
            className="button button-primary contact-button"
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on GitHub <span>↗</span>
          </a>

          <div className="contact-links">

            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            {contactDetails.email && (
              <a href={`mailto:${contactDetails.email}`}>
                Email ↗
              </a>
            )}

            {contactDetails.linkedin && (
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}