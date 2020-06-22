import React from 'react';
import PropTypes from 'prop-types';
import './NavLink.css';

const NavLink = ({ link, linkName }) => (
  <a
    className="navigation__link"
    href={link}
  >
    {linkName}
  </a>
);

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
};

export default NavLink;
