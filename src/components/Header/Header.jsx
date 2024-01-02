import './Header.css';
import Navigation from './navigation/Navigation';
// import a css file containig article styles
function Header() {
  return (
    <>
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </>
  );
}

export default Header;
// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
