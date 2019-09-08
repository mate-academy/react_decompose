import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">React is cool!</h1>
      <Navigation />
    </header>
  );
}

export default Header;
