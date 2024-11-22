// import a css file containig welcome styles
import './Navigation.css';

// Create a Welcome function returning the HTML of welcome block
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

// Add a default export statement for Welcome component to use it in the other files
export default Navigation;
