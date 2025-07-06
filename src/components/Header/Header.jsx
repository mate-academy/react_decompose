import './Header.css';
import PageNavigation from '../Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <PageNavigation />
  </header>
);

export default Header;
