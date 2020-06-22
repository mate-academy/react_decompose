import React from 'react';
import PropTypes from 'prop-types';
import './ArticleParagraph.css';

const ArticleParagraph = ({ text }) => (
  <p className="article__paragraph">
    {text}
  </p>
);

ArticleParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ArticleParagraph;
