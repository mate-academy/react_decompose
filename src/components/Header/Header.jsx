import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

// Create a Header function returning the HTML of header block
const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
