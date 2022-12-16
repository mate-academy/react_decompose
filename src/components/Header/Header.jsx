// import the React library here
import React from 'react';

// import a css file containig article styles
import './Header.css';
import Navigation from '../Navigation/Navigation';

// Create an Article function returning the HTML of article block
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
