import React from 'react';
import './Header.scss';
import { Navigation } from '../Navigation';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}
