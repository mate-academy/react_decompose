import React from 'react';
import './Header.css';
import Novigation from '../Novigation/Novigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Novigation />
  </header>
);

export default Header;
