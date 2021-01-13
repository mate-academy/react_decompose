import React from 'react';
import PropTypes from 'prop-types';

export const Item = ({ href, text }) => (
  <a className="navigation__link" href={href}>
    {text}
  </a>
);

Item.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
