// import the React library here
import React from 'react';
import Nav from '../Navigation/Nav';
import './Header.css';
// import a css file containig article styles

// Create a Header function returning the HTML of header block
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

// Add a default export statement for Header component to use it in the other files
export default Header;
