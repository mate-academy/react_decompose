import React from 'react';
import './Navbar.css';

export const Navbar = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">About</a>
    <a className="navigation__link" href="#services">Services</a>
    <a className="navigation__link" href="#contact">Contact</a>
  </nav>
);
