// import the React library here
import React from 'react';
// import a css file containig article styles
import './Navigation.css';

const Navigaiton = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);

export default Navigaiton;
