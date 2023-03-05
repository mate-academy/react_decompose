// import the React library here
import React from 'react';
// import a css file containig article styles

import './Header.css';
import { Navigation } from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>

    <Navigation />
  </header>
);

// Add a default export statement for Header component to use it in the other files

export default Header;
