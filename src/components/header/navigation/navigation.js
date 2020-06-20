import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

const Nav = props => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">{props.about}</a>
    <a className="navigation__link" href="#services">{props.services}</a>
    <a className="navigation__link" href="#contact">{props.contact}</a>
  </nav>
);

Nav.propTypes = {
  about: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export { Nav };
