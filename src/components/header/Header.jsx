import React from 'react';
import Nav from '../navigation/Navigation';

import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}

export default Header;
