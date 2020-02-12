import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.navigation}>
      <a className={s.navigation__link} href="#about">About</a>
      <a className={s.navigation__link} href="#services">Services</a>
      <a className={s.navigation__link} href="#contact">Contact</a>
    </nav>
  );
}

export default Nav;
