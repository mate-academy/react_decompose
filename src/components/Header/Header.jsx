// import a css file containig header styles
import React from 'react';

// Create a Header function returning the HTML of header block
import './Header.css';

// Add a default export statement for Header component to use it in the other files
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </header>
  );
};

export default Header;
