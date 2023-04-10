import React from 'react';
import Menu from '../Navigation/Navigation';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Menu />
  </header>
);

export default Header;
