import React from 'react';
import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.navigation}>
      <a className={style.navigation__link} href="#about">About</a>
      <a className={style.navigation__link} href="#services">Services</a>
      <a className={style.navigation__link} href="#contact">Contact</a>
    </nav>
  );
}

export default Nav;
