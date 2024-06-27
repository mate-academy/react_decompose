import React from 'react';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <a href="#about" className="navigation__link">
      About
    </a>
    <a href="#services" className="navigation__link">
      Services
    </a>
    <a href="#contact" className="navigation__link">
      Contact
    </a>
  </div>
);

export default Navigation;
