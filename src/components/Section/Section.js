import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ className, text }) => (
  <section className={className}>
    <span className={`${className}__text`}>{text}</span>
  </section>
);

Section.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Section;
