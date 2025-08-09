import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <a href="#home">Site Name</a>
    </h1>
    <Navigation />
  </header>
);

export default Header;
