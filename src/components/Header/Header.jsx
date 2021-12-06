import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Site Name
      </h1>
      <Navigation />
    </header>
  );
}
