import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation'; // Importa o componente Navigation

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation /> {/* Usa o componente Navigation aqui */}
    </header>
  );
}

export default Header;
