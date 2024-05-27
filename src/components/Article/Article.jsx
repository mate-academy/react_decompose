// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files

import React from 'react';
import './Article.css';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <p className="article__paragraph">
      In elementum lorem eget est euismod ornare. Phasellus sit amet
      pellentesque mauris...
    </p>
    <p className="article__paragraph">
      In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae, fermentum
      ac quam...
    </p>
    <p className="article__paragraph">
      Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor. Cras
      congue...
    </p>
    <p className="article__paragraph">
      Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
      facilisi...
    </p>
    <p className="article__paragraph">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis...
    </p>
  </article>
);

export default Article;
