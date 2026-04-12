// import a css file containing header
import './Navigaton.css';

// Create a Header function returng the html of header block
function Navigation() {
  return (
    <nav className="navigation">
      <a className="navagation__link" href="#abou">
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
}

export default Navigation;
