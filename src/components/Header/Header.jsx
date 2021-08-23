import React from 'react';
import './Headers.css';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
