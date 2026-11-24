export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container footer-container">

        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">P</span>
          <span>
            PORTFOLIO<span className="brand-dot">.</span>
          </span>
        </a>

        <p>
          Designed and developed with React.
        </p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>

        <div className="footer-bottom">
          <span>
            © {currentYear} Personal Portfolio. All rights reserved.
          </span>

          <span>
            Built with curiosity and code.
          </span>
        </div>

      </div>

    </footer>
  );
}