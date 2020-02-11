import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}
