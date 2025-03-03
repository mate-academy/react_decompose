import './Header.css';
import '../Media.css';

import Nav from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
};

export default Header;
