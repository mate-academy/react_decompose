import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './navigation/navigation';
import './header.css';

const Header = ({ header, nav }) => (
  <header className="header">
    <h1 className="header__title">{header}</h1>
    <Nav {...nav} />
  </header>
);

Header.propTypes = {
  header: PropTypes.string.isRequired,
  nav: PropTypes.objectOf(Object).isRequired,
};

export { Header };
