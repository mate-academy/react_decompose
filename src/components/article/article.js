import React from 'react';
import Paragraph from '../paragraph/Paragraph';
import './article.css';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraph />
  </article>
);

export default Article;
