import React from 'react';
import NavigationLink from './Link';

const Navigation = () => (
  <nav className="navigation">
    <NavigationLink url="#about" text="About" />
    <NavigationLink url="#services" text="Services" />
    <NavigationLink url="#contact" text="Contact" />
  </nav>
);

export default Navigation;
