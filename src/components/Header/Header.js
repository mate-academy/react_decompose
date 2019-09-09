import React from '../../../node_modules/react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default header;
