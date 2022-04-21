import React from 'react';
import PropTypes from 'prop-types';

export const ArticleParagraph = ({ text }) => (
  <p className="article__paragraph">{text}</p>
);

ArticleParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};
