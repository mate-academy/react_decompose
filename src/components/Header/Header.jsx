import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => (
  <div>
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>

  </div>
);

export default Header;
