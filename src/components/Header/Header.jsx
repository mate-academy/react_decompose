import NavigationApp from '../Navigation/Navigation';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">React Decompose</h1>
    <NavigationApp />
  </header>
);

export default Header;
