import React from 'react';
import './Article.css';

const Article = () => {
  return (
    <article className="article">
      <h1>Headline</h1>
      <p className="article__paragraph">Paragraph 1</p>
      <p className="article__paragraph">Paragraph 2</p>
      <p className="article__paragraph">Paragraph 3</p>
      <p className="article__paragraph">Paragraph 4</p>
      <p className="article__paragraph">Paragraph 5</p>
    </article>
  );
};

export default Article;
