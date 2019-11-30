import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className="navigation">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="navigation__link" href="#">About</a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="navigation__link" href="#">Services</a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="navigation__link" href="#">Contact</a>
  </nav>
)

export default Nav;
