import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

function Link({ href, text }) {
  return (
    <a
      className="navigation__link"
      href={href}
    >
      {text}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
