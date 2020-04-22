import React from 'react';
import PropTypes from 'prop-types';

const NavigationLink = ({ url, text }) => (
  <a className="navigation__link" href={url}>{text}</a>
);

NavigationLink.defaultProps = {
  url: '#',
  text: '',
};

NavigationLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default NavigationLink;
