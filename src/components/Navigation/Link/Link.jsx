import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({ href, text }) => (
  <a
    className="navigation__link"
    href={href}
  >
    {text}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
