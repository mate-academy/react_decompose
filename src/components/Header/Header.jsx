import './Header.css';
import Navigation from './Navigation/Navigation';

const header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default header;
