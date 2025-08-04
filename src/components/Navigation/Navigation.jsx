// Import a css file containing navigation styles
import './Navigation.css'; // Import navigation styles

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#home" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__link">
            About
          </a>
        </li>
        <li className="navigation__item">
          <a href="#services" className="navigation__link">
            Services
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contact" className="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation }; // Export Navigation component for use in other files
// Note: Ensure to create a Navigation.css file with appropriate styles for the navigation component.
