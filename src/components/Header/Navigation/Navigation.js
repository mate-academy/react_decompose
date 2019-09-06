import React from 'react';
import '../../../generalCSS.css';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="https://www.google.com/">
        About
      </a>
      <a className="navigation__link" href="https://www.google.com/">
        Services
      </a>
      <a className="navigation__link" href="https://www.google.com/">
        Contact
      </a>
    </nav>
  );
}

export default Navigation;
