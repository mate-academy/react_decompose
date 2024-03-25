import Navigation from '../Navigation/Navigation';
import './Header.css';

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
