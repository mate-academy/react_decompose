import './Header.css';
import Nav from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;
// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
