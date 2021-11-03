import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const headerClass = 'header';

function Header() {
  return (
    <header className={headerClass}>
      <h1 className={`${headerClass}__title`}>Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
