import './Header.css';
import NavigationBlock from '../Navigation/Navigation';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <NavigationBlock />
    </header>
  );
}

export default Header;
