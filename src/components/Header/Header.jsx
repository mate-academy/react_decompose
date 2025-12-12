// import a css file containig header styles
import './Header.css';
// Create a Header function returning the HTML of header block
import Navigation from '../Navigation/Navigation';
// Add a default export statement for Header component to use it in the other files
export default () => {
  return (
    <header className="header">
      <Navigation />
      <h1 className="header__title">Site Name</h1>
    </header>
  );
};
