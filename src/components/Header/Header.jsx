// import styles for Header component
import './Header.css';

// import Navigation component
import Navigation from '../Navigation/Navigation';

// Create Header component
function Header() {
  return (
    <header className="header">
      {/* Website title */}
      <h1 className="header__title">Site Name</h1>

      {/* Navigation block */}
      <Navigation />
    </header>
  );
}

// export Header component
export default Header;
