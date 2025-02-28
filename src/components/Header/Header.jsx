import './Header.css';
import Welcome from '../Welcome/Welcome';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Welcome />
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
};

export default Header;
