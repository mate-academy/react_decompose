// import the React library here
// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import React from 'react';
import './Nav.css';

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);

export default Navigation;
