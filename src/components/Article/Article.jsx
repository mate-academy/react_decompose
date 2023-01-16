import React from 'react';

import './Article.css';
import { articles } from './articles';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    {articles.map(([ind, article]) => (
      <p className="article__paragraph" key={ind}>
        {article}
      </p>
    ))}
  </article>
);

export default Article;
