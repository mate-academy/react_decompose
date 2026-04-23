import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#services" className="navigation__link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="navigation__link">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
