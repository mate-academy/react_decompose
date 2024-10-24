import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
// Move each BEM block to a separate component (file) and import them here

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
