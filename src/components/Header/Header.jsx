// import the React library here
// import a css file containig article styles

import React from 'react';
import Navigation from '../Navigation/Navigation';

import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);
// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files

export default Header;
