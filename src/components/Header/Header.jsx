import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Site Name</h1>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
// import the React library here
// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
