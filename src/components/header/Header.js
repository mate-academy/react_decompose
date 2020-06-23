import React from 'react';
import './Header.css';
import { Navigation } from '../navigation/Navigation';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navigation />
  </header>
);
