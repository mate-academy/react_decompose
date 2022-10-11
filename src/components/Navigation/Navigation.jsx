// import the React library here
import React from 'react';

// import a css file containig article styles
import './Navigation.css';

// Create a Header function returning the HTML of header block
const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);

export default Navigation;
