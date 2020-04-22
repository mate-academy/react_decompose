import React from 'react';
import NavigationLink from '../navigation-link';
import './navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <NavigationLink href="#about" title="About" />
    <NavigationLink href="#services" title="Services" />
    <NavigationLink href="#contact" title="Contact" />
  </nav>
);

export default Navigation;
