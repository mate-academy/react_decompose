import './Navigation.css';
// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
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
