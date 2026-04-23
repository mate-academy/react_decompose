// import a css file containig header styles
import './Header.css';
import NavigationComponent from '../Navigation/Navigation';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <NavigationComponent />
    </header>
  );
}


export default Header;
