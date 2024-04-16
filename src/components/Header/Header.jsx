// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files

import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default function Header() {
  return (
    <>
      <Navigation />
      <header className="header">
        <h1 className="header__title">Site Name</h1>
      </header>
    </>
  );
}
