import React from 'react';
import './article.css';
import Paragraph from './paragraph/paragraph';

const Article = paragraphes => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    {paragraphes.map(paragraph => (
      <Paragraph key={paragraph.id} text={paragraph.text} />
    ))}
  </article>
);

export default Article;
