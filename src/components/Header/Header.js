/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <nav className="navigation">
      <a className="navigation__link" href="#">About</a>
      <a className="navigation__link" href="#">Services</a>
      <a className="navigation__link" href="#">Contact</a>
    </nav>
  </header>
);

export default Header;
