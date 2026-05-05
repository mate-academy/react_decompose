import React from 'react';
import './Navegation.css';

function Navegation() {
  return (
    <nav className="navegation">
      <a className="navegation__link" href="#about">
        About
      </a>
      <a className="navegation__link" href="#services">
        Services
      </a>
      <a className="navegation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default Navegation;
