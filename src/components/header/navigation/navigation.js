import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

const Nav = ({ about, services, contact }) => (
  <nav className="navigation">
    <a className="navigation__link" href="#about">{about}</a>
    <a className="navigation__link" href="#services">{services}</a>
    <a className="navigation__link" href="#contact">{contact}</a>
  </nav>
);

Nav.propTypes = {
  about: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export { Nav };
