import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </React.Fragment>
  );
}

export default Header;
