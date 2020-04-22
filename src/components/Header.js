import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './nav/Nav';

const Header = props => (
  <header className="header">
    <h1 className="header__title">{props.text}</h1>
    <Navigation />
  </header>
);

Header.defaultProps = {
  text: '',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
