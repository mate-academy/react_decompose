import Navigation from '/Users/bartekkowalski/projects_REACT/react_decompose/src/components/Navigation/Navigation';
import '/Users/bartekkowalski/projects_REACT/react_decompose/src/components/Navigation/Navigation.css'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
};

export default Header;
