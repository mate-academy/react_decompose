import React from 'react';
import './Header.css';
import { Navigation } from '../Navigation/Navigation';
import '../Navigation/Navigation.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}
