import React from 'react';
import './Article.css';
import paragraphList from './paragrap.json';

export default function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      {paragraphList.map(paragraph => (
        <p className="article__paragraph">
          {paragraph}
        </p>
      ))}
    </article>
  );
}
