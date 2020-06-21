import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
  return (
    <section className="welcome">
      <span className="welcome__text">{props.text}</span>
    </section>
  );
}

Welcome.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Welcome;
