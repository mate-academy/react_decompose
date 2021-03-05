import React from 'react';
import './header.css';
import Welcome from '../welcome/welcome';
import Navigation from '../navigation/navigation';

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
