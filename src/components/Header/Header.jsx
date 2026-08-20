import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
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
    </header>
  );
};

export default Header;
