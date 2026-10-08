const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <span className="footer-initials">RV</span>
          <p>Rojge Jericho Villanueva</p>
        </div>
        <p>© {new Date().getFullYear()} · Built with curiosity and care.</p>
        <div className="footer-links">
          <a href="mailto:iko.vill@gmail.com">Email</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;