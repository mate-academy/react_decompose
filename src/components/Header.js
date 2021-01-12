import React from 'react';
import './components_css/Header.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
