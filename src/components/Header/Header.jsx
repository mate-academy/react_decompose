// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import React from 'react';
import Nav from '../Navigation/Nav';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
};

export default Header;
