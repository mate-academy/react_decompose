import React from 'react';
import './Header.css';
import Navigation from '../Navigaton/Navigaton';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
