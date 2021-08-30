import React from 'react';
import './Header.css';
import Nav from './Nav/Nav';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;
