import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navbar />
  </header>
);

export default Header;
