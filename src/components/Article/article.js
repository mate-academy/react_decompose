import React from 'react';
import Paragraphs from '../ArticleParagraphs/article__paragraphs';

import './article.scss';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <Paragraphs />
    </article>
  );
}

export default Article;
