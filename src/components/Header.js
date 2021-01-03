import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ navlinks }) => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <nav className="navigation">
      {navlinks.map(navlink => (
        <a
          key={navlink}
          className="navigation__link"
          href={`#${navlink}`}
        >
          {navlink}
        </a>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  navlinks: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
