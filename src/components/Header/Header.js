import React from 'react';
import './Header.css';

const Header = ({ title, navLinks }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <nav className="navigation">
      {navLinks.map( link =>
        <a className="navigation__link" href="#">{link}</a>
      )}
    </nav >
  </header >
);

export default Header;
