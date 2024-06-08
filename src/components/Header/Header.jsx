import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <Navigation />
      <h1 className="header__title">Site Name</h1>
    </header>
  );
}

export default Header;
