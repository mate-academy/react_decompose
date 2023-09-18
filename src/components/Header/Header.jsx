// import a css file containig article styles
import './Header.css';
import { Nav } from '../Navigation/Navigation';
// Create a Header function returning the HTML of header block
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

export default Header;
