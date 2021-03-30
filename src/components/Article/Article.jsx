import React from 'react';
import Paragraphs from '../ArticleParagraphs/Article__paragraphs';

import './article.scss';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraphs />
  </article>
);

export default Article;
