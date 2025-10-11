import './Navigation.css';

function Navigation() {
  return (
    <navigation className="navigation">
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </navigation>
  );
}

export default Navigation;
