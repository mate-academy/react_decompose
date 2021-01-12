import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import navigationLinks from '../../data/navigation.json';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation navigationArray={navigationLinks} />
    </header>
  );
}

export default Header;
