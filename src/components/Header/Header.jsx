/* eslint-disable react/react-in-jsx-scope */
// import the React library here
// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files

// eslint-disable-next-line import/named
import Navigation from '../Navigation/Navigation';
import '../Navigation/Navigation.scss';

const Header = () => (
  <>
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  </>
);

export default Header;
