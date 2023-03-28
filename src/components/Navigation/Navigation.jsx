import React from 'react';
import './Navigation.css';

const navigationText = {
  about: `About`,
  services: `Services`,
  contact: `Contact`,
};

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">
      {navigationText.about}
    </a>
    <a className="navigation__link" href="#services">
      {navigationText.services}
    </a>
    <a className="navigation__link" href="#contact">
      {navigationText.contact}
    </a>
  </nav>
);

export default Navigation;
