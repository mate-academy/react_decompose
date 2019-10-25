import React from 'react';
import Navigation from '../nav/Navigation';
import './header.css';

const Header = (props) => {

  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <Navigation />
    </header >
  )
};

export default Header;
