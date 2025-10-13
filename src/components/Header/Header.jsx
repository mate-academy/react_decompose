import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ children }) => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    {children || <Navigation />}
  </header>
);

export default Header;
