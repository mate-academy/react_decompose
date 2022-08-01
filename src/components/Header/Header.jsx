import React from 'react';
import './Header.css';
import Naviation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Naviation />
  </header>
);

export default Header;
