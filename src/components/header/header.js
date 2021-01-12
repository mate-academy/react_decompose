import React from 'react';
import Navbar from '../navbar/navbar';
import './header.css';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>

    <Navbar />
  </header>
);
