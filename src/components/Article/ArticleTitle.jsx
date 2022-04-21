import React from 'react';
import PropTypes from 'prop-types';

export const ArticleTitle = ({ title }) => (
  <h1 className="article__title">{title}</h1>
);

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
