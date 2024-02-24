import Menu from './Navigation/Menu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Menu />
    </header>
  );
};

export default Header;
