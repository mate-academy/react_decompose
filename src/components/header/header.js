import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './navigation/navigation';
import './header.css';

const Header = props => (
  <header className="header">
    <h1 className="header__title">{props.header}</h1>
    <Nav {...props.nav} />
  </header>
);

Header.propTypes = {
  header: PropTypes.string.isRequired,
  nav: PropTypes.objectOf(Object).isRequired,
};

export { Header };
