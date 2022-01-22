import React from 'react';
import './Header.css';
import './HeaderTitle.css';

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => (
  <header className="header">
    {children}
  </header>
);

export default Header;
