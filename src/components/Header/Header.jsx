// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files

import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation /> {/* Navigation всередині Header */}
  </header>
);

export default Header;
