import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#about" className="navigation__link">
        About
      </a>
      <a href="#services" className="navigation__link">
        Services
      </a>
      <a href="#contact" className="navigation__link">
        Contact
      </a>
    </nav>
  );
}

export default Navigation;
