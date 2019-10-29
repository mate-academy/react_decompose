import React from 'react';
import './header.css';
import Nav from '../nav/nav';

function Header() {
  return (
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Nav />
      </header>
  );
}

export default Header;
