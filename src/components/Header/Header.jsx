import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
