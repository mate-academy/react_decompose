import React from 'react';
import './Article.css';
import { articleParagraphs } from './ArticleParagraphs';

export const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>

    {articleParagraphs.map(({ text, id }) => (
      <p key={id} className="article__paragraph">
        {text}
      </p>
    ))}

  </article>
);
