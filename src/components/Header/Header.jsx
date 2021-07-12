import React from 'react';
import Navigation from './subcomponents/Navigation/Navigation';
import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation/>
  </header>
);

export default Header;
