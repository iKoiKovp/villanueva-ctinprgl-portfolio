import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const NavBar = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand-mark" aria-label="Rojge Jericho Villanueva home">
          <span>RV</span>
          <strong>Rojge Jericho Villanueva</strong>
        </NavLink>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;