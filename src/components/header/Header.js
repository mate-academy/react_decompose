import React from 'react';
import './Header.css';
import Nav from '../nav/Nav';
import Heading from '../heading/Heading';

const Header = () => (
  <header className="header">
    <Heading />
    <Nav />
  </header>
);

export default Header;
