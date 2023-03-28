import React from 'react';
import './Navigation.css';

const navigationText = {
  text1: `About`,
  text2: `Services`,
  text3: `Contact`,
};

const Navigation = () => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">{navigationText.text1}</a>
    <a className="navigation__link" href="#services">{navigationText.text2}</a>
    <a className="navigation__link" href="#contact">{navigationText.text3}</a>
  </nav>
);

export default Navigation;
