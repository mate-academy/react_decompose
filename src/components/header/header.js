import React from 'react';
import './header.css';
import Navigation from '../navigation/navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
