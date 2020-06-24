import React from 'react';
import PropTypes from 'prop-types';

function Link({ linkClass, href, linkText }) {
  return (
    <a className={linkClass} href={href}>{linkText}</a>
  );
}

Link.propTypes = {
  linkClass: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Link;
