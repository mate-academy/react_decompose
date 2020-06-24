import React from 'react';
import './Paragraph.css';
import PropTypes from 'prop-types';

export const Paragraph = props => (
  <p className="article__paragraph">{props.text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};
