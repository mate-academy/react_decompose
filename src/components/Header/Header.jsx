// import a css file containig header styles
import './Header.css';
// eslint-disable-next-line import/no-unresolved, import/no-named-as-default
import Nav from '../Navigation/Nav';
// Create a Header function returning the HTML of header block
export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
};

// Add a default export statement for Header component to use it in the other files
export default Header;
