import React from 'react';
import Title from '../Title/Title';
import Nav from '../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <Title className={s.header__title} text="Site Name" />
      <Nav />
    </header>
  );
}

export default Header;
