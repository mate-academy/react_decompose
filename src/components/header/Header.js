import React from 'react';
import './Header.css';
import { HeaderNavigation } from './Header-nav';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <HeaderNavigation />
  </header>
);
