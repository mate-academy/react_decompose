import React from 'react';
import './styles/Paragraph.css';
import PropTypes from 'prop-types';

function Paragraph({ text }) {
  return (
    <p className="article__paragraph">{text}</p>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
