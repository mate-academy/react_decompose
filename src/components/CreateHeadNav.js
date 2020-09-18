import React from 'react';
import './ComponentsCSS/navCP.css';

function CreateHeadNav() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">About us</a>
      <a className="navigation__link" href="#services">Services</a>
      <a className="navigation__link" href="#contact">Contact</a>
    </nav>
  );
}

export default CreateHeadNav;
