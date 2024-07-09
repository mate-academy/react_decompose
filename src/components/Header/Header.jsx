import './Header.scss';
import Navigation from '../Navigaton/Navigation';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
};

export default Header;
