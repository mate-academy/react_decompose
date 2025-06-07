import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header({ children }) {
  return (
    <header className="header">
      <h1>Nome do Site</h1>
      {children}
    </header>
  );
}

export default Header;
