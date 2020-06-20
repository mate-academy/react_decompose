import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

const Welcome = ({ welcome }) => (
  <section className="welcome">
    <span className="welcome__text">{welcome}</span>
  </section>
);

Welcome.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export { Welcome };
