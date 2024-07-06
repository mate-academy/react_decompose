// import a css file containig welcome styles
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

// Create a Welcome function returning the HTML of welcome block
const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

// Add a default export statement for Welcome component to use it in the other files
export default Header;
