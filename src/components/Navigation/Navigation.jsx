import React from 'react';
import './Navigation.css';

const navigationClass = 'navigation';

function Navigation() {
  return (
    <nav className={navigationClass}>
      <a className={`${navigationClass}__link`} href="#about">About</a>
      <a className={`${navigationClass}__link`} href="#services">Services</a>
      <a className={`${navigationClass}__link`} href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;
