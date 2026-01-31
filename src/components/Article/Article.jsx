// import a css file containig article styles
import './Article.css';
import React from 'react';

function Article({ paragraph }) {
  return (
    <article className="article">
      <h1 className="article-title">Headline</h1>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
      <p className="article__paragraph">{paragraph}</p>
    </article>
  );
}

export default Article;
// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
