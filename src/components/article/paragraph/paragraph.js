import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.css';

const Paragraph = props => (
  <p className="article__paragraph">{props.text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Paragraph };
