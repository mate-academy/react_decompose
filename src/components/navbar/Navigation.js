import React from 'react';
import './navigation.css';

function Navigation() {
  return (
      <nav className="navigation">
        <a className="navigation__link" href="#">About</a>
        <a className="navigation__link" href="#">Services</a>
        <a className="navigation__link" href="#">Contact</a>
      </nav >
  );
}

export default Navigation;
