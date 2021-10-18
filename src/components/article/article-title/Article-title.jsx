import React from 'react';
import './Article-title.css';

const ArticleTitle = ({ children, id }) => (
  <h1 id={id} className="article__title">{children}</h1>
);

export default ArticleTitle;
