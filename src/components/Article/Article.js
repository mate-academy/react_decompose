import React from 'react';
import './Article.css';

function Article() {
  // eslint-disable-next-line global-require
  const data = require('../../lib/article1');

  return (
    <article className="article">
      <h1 className="article__title">
        {data.title}
      </h1>
      {data.paragraphs.map(text => (
        <p
          className="article__paragraph"
          key={text}
        >
          {text}
        </p>
      ))}
    </article>
  );
}

export default Article;
