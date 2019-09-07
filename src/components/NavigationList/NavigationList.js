import React from 'react';
import './NavigationList.css';

import NavigationItem from '../NavigationItem';

function NavigationList() {
  return (
    <nav className="navigation">
      <NavigationItem link="About" />
      <NavigationItem link="Services" />
      <NavigationItem link="Contact" />
    </nav >
  );
}

export default NavigationList;