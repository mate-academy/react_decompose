import { Nav } from '../Navigation/Navigation';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;
