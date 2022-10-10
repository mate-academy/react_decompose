import React from 'react';
import Navigation from '../Navigation/Navigation';
import Article from '../Article/Article';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
      <Article />
    </header>
  );
}

export default Header;
