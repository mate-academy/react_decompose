import React from 'react';
import ArticleParagraph from './ArticleParagraph';
import ArticleTitle from './ArticleTitle';

import './article.css';

const Article = () => (
  <article className="article">
    <ArticleTitle />
    <ArticleParagraph />
  </article>
);

export default Article;
