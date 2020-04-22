import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => (
  <section className="welcome">
    <span className="welcome__text">{props.text}</span>
  </section>
);

Welcome.defaultProps = {
  text: '',
};

Welcome.propTypes = {
  text: PropTypes.string,
};

export default Welcome;
