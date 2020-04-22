import React from 'react';
import Navigation from '../navigation';
import './header.css'

const Header = () => (
  <header className="header">
    <h1 className="header__tmkitle">Site Name</h1>
    <Navigation />
  </header>
);

export default Header;
