import React from 'react';
import './Article.css';

// eslint-disable-next-line react/prop-types
const Article = ({ children }) => (
  <article className="article">
    {children}
  </article>
);

export default Article;
