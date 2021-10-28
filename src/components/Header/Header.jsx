import React from 'react';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  const title = 'Site Name';
  const navLinks = ['About', 'Services', 'Contact'];

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <Nav navLinks={navLinks} />
    </header>
  );
};
