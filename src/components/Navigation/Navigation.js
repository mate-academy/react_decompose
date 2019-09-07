import React from 'react';
import './Navigation.css';

const itemLink = ['About', 'Services', 'Contact'];

function Navigation() {
  return (
    <nav className="navigation">
      {itemLink.map(
        item => <a className="navigation__link" href="# ">{item}</a>
      )}
    </nav>
  );
}

export default Navigation;
