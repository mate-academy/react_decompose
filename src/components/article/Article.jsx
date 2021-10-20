import React from 'react';
import './Article.css';
import PropTypes from 'prop-types';

const Article = ({ children }) => (
  <article className="article">
    {children}
  </article>
);

export default Article;
