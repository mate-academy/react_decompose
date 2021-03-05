import React from 'react';
import './Header.css';
import Welcome from '../welcome/Welcome';
import Navigation from '../navigation/Navigation';

const Header = () => (
  <>
    <Welcome />
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  </>
);

export default Header;
