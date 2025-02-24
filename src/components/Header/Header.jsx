import './Header.css'; // Import CSS for Header
import Navigation from '../Navigation/Navigation'; // Import Navigation component

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
