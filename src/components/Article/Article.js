import React from 'react';
import './Article.css';
import Paragraph from '../Paragraph';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraph />
  </article>
);

export default Article;
