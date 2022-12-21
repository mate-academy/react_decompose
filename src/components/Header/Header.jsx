import React from 'react';
import './Header.css';
import Navigations from '../Navigations/Navigations';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigations />
    </header>
  );
}

export default Header;
