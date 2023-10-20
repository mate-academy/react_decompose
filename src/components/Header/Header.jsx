import Navigation from '../Navigation/Navigation';
import '../Article/Article.css';
import '../Navigation/Navigation.css';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
