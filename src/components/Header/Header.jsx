import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <h1 className="header__title">Site Name</h1>
    </header>
  );
}

export default Header;
