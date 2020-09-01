import React from 'react';
import Nav from './nav';
import '../components/styles/header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav/>
  </header>
);

export default Header;

