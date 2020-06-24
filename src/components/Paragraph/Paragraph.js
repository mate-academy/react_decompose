import React from 'react';
import './Paragraph.css';
import PropTypes from 'prop-types';

const Paragraph = ({ text }) => (
  <p className="article__paragraph">{text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
