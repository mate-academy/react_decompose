// import a css file containig article styles
import './Header.css';
import { Nav } from './Navigation/Navigation';

// Create a Header function returning the HTML of header block
export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);
// Add a default export statement for Header component to use it in the other files
export default Header;
