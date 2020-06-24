import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ paragraphClass, paragraphText }) {
  return (
    <p className={paragraphClass}>{paragraphText}</p>
  );
}

Paragraph.propTypes = {
  paragraphClass: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};

export default Paragraph;
