import React from 'react';
import './Navigation.css';

// eslint-disable-next-line react/prop-types
const NavigationItem = ({ item }) => (
  // eslint-disable-next-line react/prop-types
  <a href={item.path} className="navigation__link">
    {/* eslint-disable-next-line react/prop-types */}
    {item.label}
  </a>
);

export default NavigationItem;
