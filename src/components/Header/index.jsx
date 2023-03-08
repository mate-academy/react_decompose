// import the React library here
// import a css file containig article styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import React from 'react';
import './Header.css';
import nav from '../Navigation';

const Header = () => (
  <header className="header">
    {nav}
  </header>
);

export default Header;
