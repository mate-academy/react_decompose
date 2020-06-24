import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ className }) => (
  <nav className={className}>
    <a href="#about" className={`${className}__link`}>About</a>
    <a href="#services" className={`${className}__link`}>Services</a>
    <a href="#about" className={`${className}__link`}>Contact</a>
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Nav;
