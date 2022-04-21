import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './NavItem';

export const Nav = ({ navLinks }) => (
  <nav className="navigation">
    {navLinks.map(link => <NavItem key={link} link={link} />)}
  </nav>
);

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string),
};

Nav.defaultProps = {
  navLinks: [],
};
