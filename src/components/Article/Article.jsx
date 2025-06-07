import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__headline">Headline</h1>
      <p className="article__paragraph">Lorem ipsum dolor sit amet.</p>
      <p className="article__paragraph">Consectetur adipiscing elit.</p>
      <p className="article__paragraph">Sed do eiusmod tempor.</p>
      <p className="article__paragraph">Incididunt ut labore et dolore.</p>
      <p className="article__paragraph">Magna aliqua.</p>
    </article>
  );
}

export default Article;
