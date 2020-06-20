import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = ({ siteName }) => (
  <h1 className="header__title">{siteName}</h1>
);

Heading.propTypes = {
  siteName: PropTypes.string,
};

Heading.defaultProps = {
  siteName: 'Site Name',
};

export default Heading;
