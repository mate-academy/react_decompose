import React from 'react';
import PropTypes from 'prop-types';

export const NavItem = ({ link }) => (
  <a key={link} className="navigation__link" href="#about">{link}</a>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
};
