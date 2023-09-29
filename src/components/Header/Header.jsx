import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => (
  <div>
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  </div>
);

export default Header;
