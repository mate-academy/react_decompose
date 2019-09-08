import React from 'react';
import './Navigation.css';

const menuItem = ['About', 'Services', 'Contact'];

const Navigation = () => (
  <nav className="navigation">
    {menuItem.map(item => (<a href='#' key={item} className="navigation__link">{item}</a>))}
  </nav>
);

export default Navigation;
