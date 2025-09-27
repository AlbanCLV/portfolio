import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {currentYear} Alban Calvo. Tous droits réservés.
        </p>
        <div className="footer__social">
          <a
            href="https://github.com/AlbanCLV"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alban-calvo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;