import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.css';

const Paragraph = ({ text }) => (
  <p className="article__paragraph">{text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Paragraph };
