import React from 'react';
import { NavLink } from '../NavLink/NavLink';

export const Navigation = () => (
  <nav className="navigation">
    <NavLink href="#about" text="About" />
    <NavLink href="#services" text="Services" />
    <NavLink href="#contact" text="Contact" />
  </nav>
);
