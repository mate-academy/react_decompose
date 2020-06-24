import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ className, title }) => (
  <header className={className}>
    <h1>{title}</h1>
    <nav className="navigation">
      <a href="#about" className="navigation__link">About</a>
      <a href="#services" className="navigation__link">Services</a>
      <a href="#about" className="navigation__link">Contact</a>
    </nav>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
