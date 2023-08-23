// import a css file
import './Header.css';
import Navigation from '../Navigation/Navigation';

// Create
const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);
// Add a default export statement

export default Header;
