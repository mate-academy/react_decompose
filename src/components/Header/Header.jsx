import React from 'react';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
