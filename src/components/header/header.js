import React from 'react';
import { Nav } from '../navigation/navigation';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Nav />
    </header>
  );
}
