import { Navigate } from '../Navigate';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigate />
    </header>
  );
};

export default Header;
