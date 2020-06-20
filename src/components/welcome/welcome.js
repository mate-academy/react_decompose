import React from 'react';
import PropTypes from 'prop-types';
import './welcome.css';

const Welcome = props => (
  <section className="welcome">
    <span className="welcome__text">{props.welcome}</span>
  </section>
);

Welcome.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export { Welcome };
