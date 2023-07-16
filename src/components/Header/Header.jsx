import React from 'react';
import './Header.css';
import NavigationComp from './Navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <NavigationComp />
  </header>
);

export default Header;
