import React from 'react';
import Navigator from './Navigator';

let headerTitle = 'Site Name'

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">{headerTitle}</h1>
      <Navigator />
    </header>
  )
}


export default Header;
