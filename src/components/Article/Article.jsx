import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare...
      </p>
      <p className="article__paragraph">In ac nisi lacus. Fusce est dolor...</p>
      <p className="article__paragraph">
        Donec arcu elit, euismod vel lobortis...
      </p>
      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem...
      </p>
      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus...
      </p>
    </article>
  );
}

export default Article;
