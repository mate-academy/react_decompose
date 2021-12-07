import React from 'react';
import { Navigation } from '../Navigation';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}
