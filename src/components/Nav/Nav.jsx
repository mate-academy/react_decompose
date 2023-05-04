// import the React library here
import React from 'react';
// import a css file containig article styles
import './Nav.css';

// Create a Header function returning the HTML of header block
function Nav() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">About</a>
      <a className="navigation__link" href="#services">Services</a>
      <a className="navigation__link" href="#contact">Contact</a>
    </nav>
  );
}

// Add a default export statement for Header component to use it in the other files
export default Nav;
