import React from 'react';
import './navigation-link.css';

const NavigationLink = ({ href = 0, title = 0 }) => (
  <a className="navigation__link" href={href}>{title}</a>
);

export default NavigationLink;
