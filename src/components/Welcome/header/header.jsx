import React from 'react';
import './header.css';
import Navigation from '../navigation/Navihation';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
