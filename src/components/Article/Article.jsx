import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <p className="article__paragraph">
        In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris...
      </p>
      <p className="article__paragraph">
        In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae...
      </p>
      {/* Add all other paragraphs here */}
    </article>
  );
}

export default Article;
