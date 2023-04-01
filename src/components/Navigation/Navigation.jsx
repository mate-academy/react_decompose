import React from 'react';

import './Navigation.css';

const navigationLink = 'navigation__link';

function Navigation() {
  return (
    <nav className="navigation">
      <a className={navigationLink} href="#about">About</a>
      <a className={navigationLink} href="#services">Services</a>
      <a className={navigationLink} href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;
