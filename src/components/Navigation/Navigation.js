import React from 'react';
import './Navigation.css';

const navList = ['About', 'Services', 'Contact'];

function Navigation() {
  return (
    <nav className="navigation">
      {navList.map(
        item => <a className="navigation__link" href="# ">{item}</a>
      )}
    </nav>
  );
}

export default Navigation;
