import React from 'react';
import './Navigation.css';

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
