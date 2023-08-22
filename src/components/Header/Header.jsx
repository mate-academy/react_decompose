import './Header.css';

import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>

    <Navigation className="navigation" />
  </header>
);

export default Header;
