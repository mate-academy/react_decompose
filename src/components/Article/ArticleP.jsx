import React from 'react';
import PropTypes from 'prop-types';

export const ArticleP = ({ text }) => (
  <p className="article__paragraph">{text}</p>
);

ArticleP.propTypes = {
  text: PropTypes.string.isRequired,
};
