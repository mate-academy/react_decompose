import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare...
      </p>
      <p className="article__paragraph">Lorem ipsum...</p>
      <p className="article__paragraph">More content...</p>
      <p className="article__paragraph">Another paragraph...</p>
      <p className="article__paragraph">Last one...</p>
    </article>
  );
}

export default Article;
