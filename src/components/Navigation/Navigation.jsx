import './Navigation.css';

// Create a Navigation function returning the HTML of navigation block
const Navigation = () => {
  return (
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
};

// Add a default export statement for Navigation component to use it in the other files
export default Navigation;
