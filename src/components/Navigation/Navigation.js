/* eslint-disable jsx-a11y/anchor-is-valid */
import React from '../../../node_modules/react';
import './Navigation.css';

function navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#">About</a>
      <a className="navigation__link" href="#">Services</a>
      <a className="navigation__link" href="#">Contact</a>
    </nav>
  );
}

export default navigation;
