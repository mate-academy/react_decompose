import React from 'react';
import Title from '../Title/Title';
import Nav from '../Nav/Nav';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <Title classTitle={style.header__title} text="Site Name" />
      <Nav />
    </header>
  );
}

export default Header;
