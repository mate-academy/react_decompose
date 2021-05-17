import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header = () => (
  <>
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  </>
);

export default Header;
