import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#">About</a>
      <a className="navigation__link" href="#">Services</a>
      <a className="navigation__link" href="#">Contact</a>
    </nav>
  );
}

export default Nav;
