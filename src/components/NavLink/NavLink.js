import React from 'react';
import './NavLink.css';
import PropTypes from 'prop-types';

export const NavLink = ({ href, text }) => (
  <a className="navigation__link" href={href}>{text}</a>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
