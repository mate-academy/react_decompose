import './Header.css';
import Navigation from '../Navigation/Navvigation';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}
