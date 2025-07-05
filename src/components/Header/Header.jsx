import './Header.css';
import Navi from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navi />
  </header>
);

export default Header;
