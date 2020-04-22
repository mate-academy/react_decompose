import React from 'react';
import './AppHeader.css';
import NavBar from './NavBar';

const AppHeader = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <NavBar />
  </header>
);

export default AppHeader;
