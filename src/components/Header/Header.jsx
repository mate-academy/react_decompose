import React from 'react';
import Navigator from '../../Navigator/Navigator';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigator />
    </header>
  );
}

export default Header;
