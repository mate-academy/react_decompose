import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = props => (
  <header className="header">
    <h1 className="header__title">{props.siteName}</h1>
    <Navigation />
  </header>
);

export default Header;
