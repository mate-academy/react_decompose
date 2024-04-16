import Navigation from '../Navigation/Navigation';
import './Header.css';

export default () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
};
