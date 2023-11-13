import './Header.css';
import NavigationApp from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <NavigationApp />
  </header>
);

export default Header;
