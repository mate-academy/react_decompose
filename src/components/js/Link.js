import React from 'react';
import PropTypes from 'prop-types';

function Link({ linkClass, linkHref, linkText }) {
  return (
    <a className={linkClass} href={linkHref}>{linkText}</a>
  );
}

Link.propTypes = {
  linkClass: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Link;
