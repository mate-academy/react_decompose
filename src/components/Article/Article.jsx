import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>

      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris. Aliquam quis malesuada ex...
      </p>

      <p className="article__paragraph">
        In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae...
      </p>

      <p className="article__paragraph">
        Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor...
      </p>

      <p className="article__paragraph">
        Cras egestas tempor nibh, a fermentum lorem sollicitudin non...
      </p>

      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus...
      </p>
    </article>
  );
}

export default Article;
