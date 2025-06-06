import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#about">
            About
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#services">
            Services
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
