import React from 'react';
import './mainHeader.css';
import Navigation from '../navbar/Navigation';

function MainHeader() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
  </header >
  );
}

export default MainHeader;
