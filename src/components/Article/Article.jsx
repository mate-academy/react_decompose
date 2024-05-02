// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
import React from 'react';
import './Article.css';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <p className="article__paragraph">
      In elementum lorem eget est euismod ornare...
    </p>
  </article>
);

export default Article;
