import React from 'react';
import './Header.css';

const Header = ({ children }) => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    {children}
  </header>
);

export default Header;
