import './Header.css';
import '../Article/Article.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <>
      <h1 className="header__title">Site Name</h1>
      <header className="header">
        <Navigation />
      </header>

    </>
  );
}

export default Header;
