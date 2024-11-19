// import a css file containig article styles
import './Navigation.css';

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">
      About
    </a>
    <a className="navigation__link" href="#services">
      Services
    </a>
    <a className="navigation__link" href="#contact">
      Contact
    </a>
  </nav>
);

export default Navigation;
