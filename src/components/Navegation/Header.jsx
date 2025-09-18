// import a css file containig header styles
import './Header.css';

// Create a Header function returning the HTML of header block
function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My Website</h1>
      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </header>
  );
}


// Add a default export statement for Header component to use it in the other files
export default Header;
