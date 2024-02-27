import './Header.css';
import NavComponent from '../Nav/Nav';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <NavComponent />
  </header>
);

export default Header;
