import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Название сайта</h1>
      <Navigation />
    </header>
  );
}

export default Header;
