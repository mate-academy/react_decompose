import './Header.css';
import Navigat from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigat />
  </header>
);

export default Header;
