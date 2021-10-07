import React from 'react';
import './Header.css';

export default Header;

function Header() {
  function HeaderTitle() {
    return (
      <h1 className="header__title">Site Name</h1>
    );
  }

  function Nav() {
    return (
      <nav className="navigation">
        <a className="navigation__link" href="#about">About</a>
        <a className="navigation__link" href="#services">Services</a>
        <a className="navigation__link" href="#contact">Contact</a>
      </nav>
    );
  }

  return (
    <header className="header">
      <HeaderTitle />
      <Nav />
    </header>
  );
}
