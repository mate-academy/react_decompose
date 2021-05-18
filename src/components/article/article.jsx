import React from 'react';
import './article.css';
import Paragraph from './paragraph/paragraph';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <Paragraph />
    </article>
  );
}

export default Article;
