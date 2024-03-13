import React from 'react';
import './Navigation.css';
// Move each BEM block to a separate component (file) and import them here

const Navigation = () => (
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

export default Navigation;
