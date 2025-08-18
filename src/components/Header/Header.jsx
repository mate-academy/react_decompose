import './Header.css';
import Navigation from '../Navigation_temp/Navigation_temp';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}
