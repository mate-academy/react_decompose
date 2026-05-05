import React from 'react';
import './Header.css';
import Navegation from '../Navegation/Navegation';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navegation />
    </header>
  );
}

export default Header;
