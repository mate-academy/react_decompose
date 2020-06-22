import React from 'react';
import NavLink from '../nav-link/NavLink';

const Nav = () => (
  <nav className="navigation">
    <NavLink link="#about" linkName="About" />
    <NavLink link="#services" linkName="Services" />
    <NavLink link="#contact" linkName="Contact" />
  </nav>
);

export default Nav;
