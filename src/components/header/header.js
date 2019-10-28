import React from 'react';
import './header.css';
import Menu from './nav/nav.js';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Menu />
    </header>
  )
}

export default Header;
