import React from 'react';
import './Header.css';
import HeaderNav from '../nav/HeaderNav';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <HeaderNav />
    </header>
  );
}

export default Header;
