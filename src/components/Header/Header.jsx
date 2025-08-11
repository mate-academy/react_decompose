// import a css file containig header styles
import './Header.css';
// Create a Header function returning the HTML of header block
const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
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
  </header>
);

// Add a default export statement for Header component to use it in the other files
export default Header;
