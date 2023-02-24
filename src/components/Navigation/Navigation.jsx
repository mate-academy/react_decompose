// import the React library here
import React from 'react';

// import a css file containig article styles
import './Navigation.css';

// Create a Nav function returning the HTML of Nav block
const Nav = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);

// Add a default export statement for Header component to use it in the other files
export default Nav;
