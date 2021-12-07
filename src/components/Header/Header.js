import React from 'react';
import Navigation from './Navigation/Navigation';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
    <nav className="navigation">
      <a className="navigation__link" href="#about">About</a>
      <a className="navigation__link" href="#services">Services</a>
      <a className="navigation__link" href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
