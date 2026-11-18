import './Header.css';
import '../Navigation/Navigation.css';
import Nav from '../Navigation/Navigation';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

export default Header;
