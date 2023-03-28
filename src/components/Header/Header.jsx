import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const headerText = `Site Name`;

const Header = () => (
  <header className="header">
    <h1 className="header__title">{headerText}</h1>
    <Navigation />
  </header>
);

export default Header;
