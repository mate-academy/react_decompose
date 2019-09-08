import React from 'react';
import './header.css';

const linkText = ['About', 'Services', 'Contact'];

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <nav className="navigation">
        {linkText.map(itemLink => {
          return <a className="navigation__link" href="#">{itemLink}</a>
        })}
      </nav >
    </header >
  )
}

export default Header;
