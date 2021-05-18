import React from 'react';
import Nav from './Nav';
import './Header.css';
import './Nav.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>

      <Nav />
    </header>
  );
}

export default Header;
