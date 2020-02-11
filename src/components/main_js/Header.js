import React from 'react';
import '../main_css/Header.css';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

export default Header;
