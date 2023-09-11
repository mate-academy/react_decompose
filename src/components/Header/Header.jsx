// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files

import React from 'react';
import './Header.css';
// Move each BEM block to a separate component (file) and import them here
const Header = props => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    {props.children}
  </header>
);

export default Header;
