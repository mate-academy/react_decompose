import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

const Paragraph = props => (
  <p className="article__paragraph">
    {props.text}
  </p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
