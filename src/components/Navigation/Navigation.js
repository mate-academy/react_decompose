import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

function Navigation({ navigationArray }) {
  return (
    <nav className="navigation">
      {navigationArray.map(navLink => (
        <a className="navigation__link" href={navLink.link} key={navLink.id}>
          {navLink.name}
          {' '}
        </a>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  navigationArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
