import React from 'react';
import './Article-title.css';

// eslint-disable-next-line react/prop-types
const ArticleTitle = ({ children, id }) => (
  <h1 id={id} className="article__title">{children}</h1>
);

export default ArticleTitle;
