// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import MyNavigation from '../Navigation/Navigation';
import './Header.css';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <MyNavigation />
  </header>
);

export default Header;
