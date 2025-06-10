// import a css file containig header styles
import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
// Create a Header function returning the HTML of header block

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
// Add a default export statement for Header component to use it in the other files
