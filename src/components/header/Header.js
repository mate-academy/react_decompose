import React from 'react';
import './Header.css';
import { Navbar } from '../navbar/Navbar';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Navbar />
  </header>
);
