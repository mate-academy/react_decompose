import React from 'react';
import './Header.scss';
import Nav from '../nav/Nav';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;
