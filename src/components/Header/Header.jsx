import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default header;
