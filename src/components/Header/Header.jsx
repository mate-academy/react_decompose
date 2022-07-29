// import the React library here
import React from 'react';
// import a css file containig article styles
import './Header.css';
import Nav from '../Nav/Nav';
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
