import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';

function Welcome({ text }) {
  return (
    <section className="welcome">
      <span className="welcome__text">
        {text}
      </span>
    </section>
  );
}

Welcome.defaultProps = {
  text: '',
};

Welcome.propTypes = {
  text: PropTypes.string,
};

export default Welcome;
