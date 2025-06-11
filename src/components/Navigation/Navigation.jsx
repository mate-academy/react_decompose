// src/components/Navigation/Navigation.jsx
import React from 'react';
import './Navigation.css'; // Importa o CSS específico da Navigation

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default Navigation;