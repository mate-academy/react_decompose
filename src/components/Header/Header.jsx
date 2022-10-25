// import the React library here
import React from 'react';
import './Header.css';
// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
// import Article from './components/Article/Article';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Site Name
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
