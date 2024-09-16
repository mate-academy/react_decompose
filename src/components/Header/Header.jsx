import './Header.css';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

// Add a default export statement for Header component to use it in the other files
