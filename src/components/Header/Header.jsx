import React from 'react';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

import './Header.css';

const Header = () => (
  <header className="header">
    <HeaderTitle />
    <HeaderNavigation />
  </header>
);

export default Header;
