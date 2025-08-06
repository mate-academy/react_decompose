import './Header.css';
import Nav from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

// Add a default export statement for Header component to use it in the other files
export default Header;
