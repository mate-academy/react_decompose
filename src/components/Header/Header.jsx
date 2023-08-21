import './Header.css';
// eslint-disable-next-line
import Navigation from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
