import { Nav } from './Navigation/Nav';
import './Header.css';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;
