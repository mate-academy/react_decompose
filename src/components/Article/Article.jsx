import React from 'react';
import './Article.css';

export default function Article() {
  return (
    <article className="article">
      <h1>Headline</h1>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare...
      </p>
      <p className="article__paragraph">In ac nisi lacus...</p>
      <p className="article__paragraph">Donec arcu elit...</p>
      <p className="article__paragraph">Cras egestas tempor...</p>
      <p className="article__paragraph">Pellentesque habitant morbi...</p>
    </article>
  );
}
