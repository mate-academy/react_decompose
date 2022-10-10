import React from 'react';

import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);
// Add a default export statement for Header component to use it in the other files

export default Navigation;
