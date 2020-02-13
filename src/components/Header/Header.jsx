import React from 'react';
import Caption from '../Caption/Caption';

export default function Header() {
  return (
    <header className="header">
      <Caption className="header__title" text="Site Name" />
      <nav className="navigation">
        <a className="navigation__link" href="#about">About</a>
        <a className="navigation__link" href="#services">Services</a>
        <a className="navigation__link" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
