import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';

const Welcome = ({ text }) => (
  <section className="welcome">
    <span className="welcome__text">{text}</span>
  </section>
);

Welcome.propTypes = {
  text: PropTypes.string,
};

Welcome.defaultProps = {
  text: 'Welcome',
};

export default Welcome;
