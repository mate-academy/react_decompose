import React from 'react';
import './Header.css';
import Navigator from '../Navigation/Navigation';

const Header = () => (
  <>
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigator />
    </header>
  </>
);

export default Header;
