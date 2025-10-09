// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <nav>
        <a href="#about" className="navigation__link">
          About
        </a>
        <a href="#services" className="navigation__link">
          Services
        </a>
        <a href="#contact" className="navigation__link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
