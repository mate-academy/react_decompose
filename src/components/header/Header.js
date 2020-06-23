import React from 'react';
import './Header.css';
import { HeaderNavigation } from './Header-nav';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <HeaderNavigation />
  </header>
);

export { Header };
