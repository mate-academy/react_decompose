import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav.js'

function Header() {
  return (
    <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Nav />
    </header>
  );
}

export default Header;
