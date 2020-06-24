import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav/Nav';
import './Header.css';

const Header = ({ className, title }) => (
  <header className={className}>
    <h1 className={`${className}__title`}>{title}</h1>
    <Nav className="navigation" />
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
