import React from 'react';

import './Header.css';

import Navigation from '../Navigation/Navigation';

const HeaderTitle = () => (
  <h1 className="header__title">Site Name</h1>
);

const Header = () => (
  <header className="header">
    <HeaderTitle />
    <Navigation />
  </header>
);

export default Header;
