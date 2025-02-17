import React from 'react';
import './Header.css';

function Header({ children }) {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      {children}
    </header>
  );
}

export default Header;
