import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline</h2>
      <p className="article__paragraph">
        {/* texto do 1º parágrafo */}
      </p>
      <p className="article__paragraph">
        {/* texto do 2º parágrafo */}
      </p>
      {/* ... e assim até o 5º parágrafo */}
    </article>
  );
}

export default Article;
